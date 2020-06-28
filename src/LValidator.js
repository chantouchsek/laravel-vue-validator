class LValidator {
  constructor () {
    this.errors = {}
    this.busy = false
    this.success = false
  }

  /**
   * Missed field method
   * @param {string|null} field
   */
  missed(field = null) {
    return !this.has(field);
  }

  /**
   * Missed field method
   * @param {string|null} field
   */
  nullState(field = null) {
    return this.has(field) ? !this.has(field) : null;
  }

  /**
   * Check if field has any error
   * @param {string} key
   * @return {boolean}
   */
  has (key) {
    return this.errors[key] !== undefined
  }

  /**
   * Get first error message by key
   * @param {string} key
   * @return {*}
   */
  first (key) {
    if (this.has(key)) {
      return this.errors[key][0]
    }
    return null
  }

  /**
   * Get all errors by key
   * @param {string} key
   * @return {*}
   */
  get (key) {
    if (this.has(key)) {
      return this.errors[key]
    }
  }

  /**
   * Get all errors
   * @return {{}}
   */
  all () {
    return this.errors
  }

  /**
   * Fill errors object
   * @param values
   */
  fill (values) {
    this.errors = values
  }

  /**
   * Clear all errors
   */
  flush () {
    this.errors = {}
  }

  /**
   * Clear one or all error fields.
   *
   * @param {String|undefined} field
   */
  clear (field) {
    const errors = {}
    if (field) {
      Object.keys(this.errors).forEach(key => {
        if (key !== field) {
          errors[key] = this.errors[key]
        }
      })
    }
    this.fill(errors)
  }

  /**
   * Clear errors on keydown.
   *
   * @param {KeyboardEvent} event
   */
  onKeydown (event) {
    const { name } = event.target
    if (name) {
      this.clear(name)
    }
  }
}

export default new LValidator()
