import _ from 'lodash';
import printMe from './print';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');
  element.innerHTML = _.join(['Hello ', 'World'], '');

  btn.innerHTML = 'click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());