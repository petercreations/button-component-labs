import React from 'react'

export const DisabledBtn = (props) => {

const disabledBtn = { 
    width: props.width,
    height: props.height,
    border: props.border,
    margin: props.margin,
    color: props.color,
    background: props.background
}

    return (
            <button className="btn" style={disabledBtn}>{props.title}</button>
    );
  };