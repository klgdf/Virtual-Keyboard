import '../styles/normalize.scss'
import '../styles/style.sass'
import keys from './keys'

function createSomeElement (container, element, className, id) {
  const el = document.createElement(element)
  el.className = className
  if (id) {
    el.id = id
  }
  container.appendChild(el)
}

createSomeElement(document.body, 'div', 'wrapper')
const wrapper = document.querySelector('.wrapper')

createSomeElement(wrapper, 'h1', 'title')
const title = document.querySelector('.title')
title.innerHTML = 'Virtual Keyboard'

createSomeElement(wrapper, 'textarea', 'textarea', 'textarea')

createSomeElement(wrapper, 'div', 'keyboard')
const keyboard = document.querySelector('.keyboard')


