/* eslint-disable import/no-extraneous-dependencies */
import { DirectiveBinding as V2DirectiveBinding } from 'vue2';
import { DirectiveBinding as V3DirectiveBinding } from 'vue3';

import './index';

const printHandler = Symbol('printHandler');
const printBinding = Symbol('printBinding');

type DirectiveBinding = V2DirectiveBinding<unknown> | V3DirectiveBinding<unknown>;
declare global {
  interface Element {
    [printHandler]: EventListener;
    [printBinding]: DirectiveBinding;
  }
}

export function updated(el: Element, binding: DirectiveBinding) {
  if (!binding.arg) {
    // eslint-disable-next-line no-param-reassign
    el[printBinding] = binding;
    return;
  }

  if (binding.arg !== 'hide') {
    // only support hide
    return;
  }

  if (binding.value === false) {
    el.classList.remove('print-element-hide-vrr0av0v5xe');
  } else {
    el.classList.add('print-element-hide-vrr0av0v5xe');
  }
}

export function mounted(el: Element, binding: DirectiveBinding) {
  if (binding.arg) {
    updated(el, binding);
    return;
  }
  // eslint-disable-next-line no-param-reassign
  el[printBinding] = binding;

  let clicked = false;
  let timer = 0;
  // eslint-disable-next-line no-param-reassign
  el[printHandler] = () => {
    if (clicked || el[printBinding].value === false) {
      // been clicked within 2s or banned
      return;
    }
    clicked = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      clicked = false;
    }, 2000);

    // set selector in localStorage and call window.print
    const selector = el[printBinding].value;
    if (typeof selector === 'string' && selector.trim()) {
      localStorage.setItem('print-element-selector', selector.trim());
    }
    window.print();
  };

  el.addEventListener('click', el[printHandler]);
}

export function unmounted(el: Element) {
  el.removeEventListener('click', el[printHandler]);
}
