import React, { Component } from 'react'

// stateless functional component because state of form elements
// lives inside the app's state
const Input = (props) => {
  return (
    <fieldset className="row">
      <legend>{props.display}</legend>
      <input
        name={props.name}
        type="text"
        onChange={props.handleInputChange}
        placeholder={props.placeholder}
      />
    </fieldset>
  )
}

export default Input
