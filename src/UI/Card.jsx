import "../../src/stylesheets/css/Card.css";

import React from 'react'

function Card(props) {
  const {className} = props;
  const classes = "card-holder " + (className ? className : "")
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card