console.log(2222);

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
console.log(3333);

import { cube } from './math';
import './index.css';

function component() {
  let element = document.createElement('pre');

  element.innerHTML = ['Hello webpack!', '5 cubed is equal to' + cube(5)].join('\n\n');

  return element;
}

let element = component();

document.body.appendChild(element);