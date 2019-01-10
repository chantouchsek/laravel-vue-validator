class Errors {

  constructor () {
    this.errors = {}
  }

  has (key) {
    return this.errors[key] !== undefined
  }

  first (key) {
    if (this.has(key)) {
      return this.errors[key][0]
    }
  }

  get (key) {
    if (this.has(key)) {
      return this.errors[key]
    }
  }

  all () {
    return this.errors
  }

  fill (values) {
    this.errors = values
  }

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
    if (event.target.name) {
      this.clear(event.target.name)
    }
  }

}

export default new Errors()
