import _ from 'lodash';
import printMe from './print';
import './index.css';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');
  element.innerHTML = _.join(['Hello ', 'World'], '');

  btn.innerHTML = 'click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component();

document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('print file updte');

    document.boyd.removeChild(element);
    element = component();
    document.body.appendChild(element);
    // printMe();
  });
}