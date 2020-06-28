# Laravel Vue Validator

By [bookingkh.com](https://bookingkh.com)

This package allow to display errors from laravel validation rules

! This package needs axios or vue-resource to work !

# Installation

```
npm install --save laravel-vue2-validator
```

```javascript
import LaravelVueValidator from 'laravel-vue2-validator'
  
Vue.use(LaravelVueValidator)
```

# Usage Example

If you have in your laravel validation rule :

  `'name' => 'required|min:2|max:20'`

You can display the error using in vue :

  `<error input="name" />`

This error will only be displayed if a 422 error is produced by laravel when the form is submited (when the rule is not satisfied)
  
To flush errors in a vue component: 

  `this.$errors.flush()`

# Full Example

```vue
<template>
	<form @keydown="$errors.onKeydown($event)">
	    <input type='text' v-model='name' :inputClass="errorClass"/>
    	<error input="name" />
    	<button @click="submit">Submit</button>
</form>
</template>
<script>

export default {
	data(){
		return{
			name: '',
			errorClass: 'form-error'
		}
	},
	methods(){
		this.$http.post('/submit', {name: this.name});
	},
     destroyed () {
       this.$errors.flush()
     }
}

</script>
```
