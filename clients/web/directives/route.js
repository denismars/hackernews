module.exports = {
  isLiteral : true,
  bind: function() {
    if (this.expression) {
      this.url = this.expression
    } else {
      this.url = this.el.getAttribute('href')
    }
    var self = this
    this.handler = function(event) {
        event.preventDefault()
        hn.router.setRoute(self.url)
    }
    this.el.addEventListener('click', this.handler)
  },
  update: function(value) {
    this.url = value
  },
  unbind: function() {
    this.el.removeEventListener('click', this.handler)
  }
}