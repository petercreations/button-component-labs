import React from 'react'

export const Buttons = (props) => {

    // const btnOnHover = () => {
       
    // }

    // const btnOnClick = () => {
        
    // }

    return (
        <div className="btn-container">
            <button className="sub-btn" onMouseOver={btnOnHover}>{props.title}</button>
            <button className="sub-btn-hover">{props.title}</button>
            <button className="sub-btn-disabled">{props.title}{props.disabled}</button>
        </div>
    );
  };