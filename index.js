import Validator from './Validator'
import ErrorComponent from './ErrorComponent.vue'
import axios from 'axios'

class Validator {
  install (Vue) {
    Vue.component('error', ErrorComponent);
    if (Vue.http) {
      Vue.http.interceptors.push((request, next) => {
        next(response => {
          if (response.status === 422) {
            Validator.fill(response.body)
          }
        });
      });
    }
    if (axios) {
      axios.interceptors.response.use((response) => {
        return response;
      }, (error) => {
        const { response } = error
        if (response.status === 422) {
          const { data = {} } = response.data.errors
          Validator.fill(data.errors)
        }
        return Promise.reject(error);
      });
    }
    Vue.mixin({
      beforeCreate () {
        this.$options.$errors = {};
        Vue.util.defineReactive(this.$options, '$errors', Errors);
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
