import LValidator from './LValidator'
import ErrorComponent from './ErrorComponent.vue'
import axios from 'axios'

class Validator {
  install (Vue, options = {}) {
    Vue.component('error', ErrorComponent);
    if (Vue.http) {
      Vue.http.interceptors.push((request, next) => {
        next(response => {
          if (response.status === 422) {
            LValidator.fill(response.body)
          }
        });
      });
    }
    if (axios) {
      axios.interceptors.response.use((response) => {
        return response;
      }, (error) => {
        if (error.response.status === 422) {
          LValidator.fill(error.response.data.errors)
        }
        return Promise.reject(error);
      });
    }
    Vue.mixin({
      beforeCreate () {
        //errors
        this.$options.$errors = {};
        Vue.util.defineReactive(this.$options, '$errors', LValidator);
        if (!this.$options.computed) {
          this.$options.computed = {}
        }
        this.$options.computed["$errors"] = function () {
          return this.$options.$errors;
        };
      },

    })

  }
}

export default new Validator()
export { LValidator }
