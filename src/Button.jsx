import React from 'react'
import './Button.css'

function Button() {
  return React.createElement('div',{className:'b1'},
   React.createElement('button',{className:'b1',type:'button'},'BUTTON'));
}

export default Button