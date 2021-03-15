import React from 'react'

export const DefaultBtn = (props) => {

const defaulBtn = { 
    width: props.width,
    height: props.height,
    border: props.border,
    margin: props.margin,
    color: props.color,
}
    return (
        <div className="btn-container">
            <button className="btn" style={defaulBtn}>{props.title}</button>
        </div>
    );
  };