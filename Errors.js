class Errors {

  constructor () {
    this.errors = {}
    this.busy = false
    this.success = false
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
    if (Array.isArray(values[0])) {
      this.errors = values
      return;
    }
    const messages = {}
    for (let i = 0; i < values.length; i++) {
      let type = values[i]
      Object.assign(messages, {
        [type.property]: Object.values(type.constraints)
      })
    }
    this.errors = messages
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
