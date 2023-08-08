import React from 'react'
import './Free.css'
import { FaDollarSign } from 'react-icons/fa';

function Pro() {
    return React.createElement('div',{className:'free'},<h6>PRO</h6>,<h4><FaDollarSign/>49/MONTH</h4>);
}

export default Pro