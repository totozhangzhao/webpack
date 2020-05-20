import _ from 'lodash';
import printMe from './print';
import './index.css';

import { cube } from './math';

function component() {
  let element = document.createElement('pre');

  element.innerHTML = ['Hello webpack!', '5 cubed is equal to' + cube(5)].join('\n\n');

  return element;
}

let element = component();

document.body.appendChild(element);