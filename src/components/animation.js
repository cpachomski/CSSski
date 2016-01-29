import React from 'react';




export default React.createClass({

  render () {
    return(
	    <section>
	    	<h3>{this.props.animationClass} </h3>
	      <div className="animation-container">
	      	<span className={this.props.animationClass}></span>
	      </div>
	    </section>
    )
  }
});
