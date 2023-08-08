import React from 'react'
import './Free.css'
import { FaDollarSign } from 'react-icons/fa';


function Free() {
  return React.createElement('div',{className:'free'},<h6>FREE</h6>,<h4><FaDollarSign/>0/MONTH</h4>);
  
}

export default Free