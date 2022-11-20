import React from 'react'
import'./button.css'

const buttonBg = {
    border: '5px solid black'
};
function Button({name}) {
    // const {name} = props; // pulls key name from props
    return (
    <button style={buttonBg}>{name}</button>
  )
}

export default Button
