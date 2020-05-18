import _ from 'lodash';
import './index.css';
import Kobe from './img/kobe1.jpg';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello new ', 'World'], '');
  element.classList.add('red');

  let img = new Image();
  img.src = Kobe;

  element.appendChild(img);
  return element;
}

document.body.appendChild(component());