import React, { Component } from 'react'

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
