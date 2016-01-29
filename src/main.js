import React from 'react'
import app from 'ampersand-app'
import  App from './components/app'


import './styles/fix.styl'
import './styles/header.styl'
import './styles/animation-containers.styl'


import './styles/animations/double-circle-revolve.styl'
import './styles/animations/double-circle-revolve-in.styl'
import './styles/animations/double-circle-bump.styl'
import './styles/animations/splitting-lines.styl'

window.app = app;

app.extend({
  init () {
    React.render(<App />, document.body)
  }
});


app.init();