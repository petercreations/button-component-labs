import React from 'react'
import { DefaultBtn } from './button-components/DefaultBtn';
import { HoverBtn } from './button-components/HoverBtn';
import { DisabledBtn } from './button-components/DisabledtBtn';

import './index.css';

export const App = () => {
  return (
    <div className="btn-wrapper">
      <div className="btn-container"> 
        <DefaultBtn 
          title="Subscribe" 
          width="257px"
          height="100px"
          border="4px solid #005d25"
          margin="20px"
          color="#005d25"
        />

        <HoverBtn 
         title="Subscribe" 
          width="257px"
          height="100px"
          border="4px solid #005d25"
          margin="20px"
          color="#fff"
          background="#005e25"
        />

        <DisabledBtn 
        title="Subscribe" 
        disabled="true" 
        width="257px"
        height="100px"
        border="none"
        margin="20px"
        color="rgba(0, 94, 37, 0.25)"
        background="rgba(0, 94, 37, 0.25)"
        />

      </div>
    </div>
  )
}
