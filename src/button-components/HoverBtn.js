import React from 'react'

export const HoverBtn = (props) => {

const hoverBtn = { 
    width: props.width,
    height: props.height,
    border: props.border,
    margin: props.margin,
    color: props.color,
    background: props.background
}
   

    return (
        <div className="btn-container">
            <button className="btn" style={hoverBtn}>{props.title}</button>
        </div>
    );
  };