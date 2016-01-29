import React from 'react';




export default React.createClass({

  render () {
    return(
	    <section>
	      <div className="animation-container">
	      	<span className={this.props.animationClass}></span>
	      </div>
	    </section>
    )
  }
});
