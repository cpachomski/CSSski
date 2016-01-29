import React from 'react'

import Header from './header'
import Animation from './animation'


export default React.createClass({
  displayName: 'app',

  render () {
    return (

      <div className='app'>
      	<Header />
        <div className='content'>
          <Animation animationClass='double-circle-revolve' />
          <Animation animationClass='hover-lines' />
          <Animation animationClass='hover-lines' />
          <Animation animationClass='hover-lines' />
        </div>
      </div>
    )
  }
});