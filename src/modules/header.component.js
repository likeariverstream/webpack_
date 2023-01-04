import Jquery from 'jquery'

Jquery('<h1 />')
.text('Hello Jquery')
.css({
  textAlign: 'center',
  color: 'blue'
})
.appendTo(Jquery('header'))
