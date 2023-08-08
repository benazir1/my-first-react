import React from 'react'
import './Sample.css'

import Order1 from './Order1';
import Free from './Free';
import Button from './Button';
import Plus from './Plus';
import Pro from './Pro';
import List1 from './List1';
import List2 from './List2';


function Sample() {
  return React.createElement('div',{className:'box'},
  React.createElement('div', {className:'container'}),
  React.createElement('div',{className:'row'},
  React.createElement('div',{className:'col-md-4'},
  React.createElement('div',{className:'box-part'}, <Free> </Free>,<hr/>,<Order1></Order1>,<Button></Button>)),
  React.createElement('div',{className:'col-md-4'},
  React.createElement('div',{className:'box-part'}, <Plus></Plus>,<hr/>,<List1></List1>,<Button></Button>)),
  React.createElement('div',{className:'col-md-4'},
  React.createElement('div',{className:'box-part'}, <Pro> </Pro>,<hr/>,<List2></List2>,<Button></Button>))
 ));

}

export default Sample