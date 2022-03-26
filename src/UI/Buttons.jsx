import "../../src/stylesheets/css/Buttons.css";

import React from 'react'

function Buttons(props) {
  const {className} = props;
  const classes = "button-holder " + (className ? className : "")
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Buttons