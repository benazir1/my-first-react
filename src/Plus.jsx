import React from 'react'
import './Free.css'
import { FaDollarSign } from 'react-icons/fa';

function Plus() {
    return React.createElement('div',{className:'free'},<h6>PLUS</h6>,<h4><FaDollarSign/>9/MONTH</h4>);
}

export default Plus