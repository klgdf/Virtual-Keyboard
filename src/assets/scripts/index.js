// import styles and js module
import '../styles/normalize.scss'
import '../styles/style.sass'
import keys from './keys'

// function create elements
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
const textarea = document.querySelector('.textarea')
textarea.placeholder = 'Введите текст'
textarea.setAttribute('rows', '10')
textarea.setAttribute('cols', '30')

createSomeElement(wrapper, 'div', 'keyboard')
const keyboard = document.querySelector('.keyboard')

createSomeElement(wrapper, 'div', 'description')
const description = document.querySelector('.description')
description.innerHTML = 'Клавиатура создана в операционной системе Windows.<br>Для переключения языка комбинация: левыe alt + shift'

// create keys
let keysInner = ''
keys.forEach(key => {
  keysInner += `<div class="keyboard__key ${key.key}" data-keys="${key.key}">
    <div class="keyboard__lang ru hide">
      <span class="lowercase">${key.ru.lowercase}</span>
      <span class="uppercase hide">${key.ru.uppercase}</span>
      <span class="capsLower hide">${key.ru.capsLower}</span>
      <span class="capsUpper hide">${key.ru.capsUpper}</span>
    </div>
    <div class="keyboard__lang en">
      <span class="lowercase">${key.en.lowercase}</span>
      <span class="uppercase hide">${key.en.uppercase}</span>
      <span class="capsLower hide">${key.en.capsLower}</span>
      <span class="capsUpper hide">${key.en.capsUpper}</span>
    </div>
  </div>`
})

keyboard.innerHTML = keysInner

// keyboard Shortcuts for switch language
const keyboardShortcuts = (f, ...keys) => {
  const pressKey = new Set()

  document.addEventListener('keydown', (e) => {
    pressKey.add(e.code)

    for (const key of keys) {
      if (!pressKey.has(key)) {
        return
      }
    }

    pressKey.clear()
    f()
  })

  document.addEventListener('keyup', (e) => {
    pressKey.delete(e.code)
  })
}

// caps
// backspace
const backspaceKey = () => {
  console.log(textarea.textContent)
  textarea.textContent = textarea.textContent.slice()
}

const activeKey = (item) => {
  item.classList.add('active')
  setTimeout(() => {
    item.classList.remove('active')
  }, 200)
}

const items = document.querySelectorAll('.keyboard__key')
items.forEach(item => {
  // eventlistener for keyboard
  item.addEventListener('click', (e) => {
    if (e.currentTarget === item) {
      textarea.textContent += item.querySelector('.keyboard__lang.en > .lowercase').textContent
      if (item.classList.contains('Backspace')) {
        backspaceKey()
      }
      activeKey(item)
    }
  })
})

document.addEventListener('keydown', (e) => {
  const item = document.querySelector(`.${e.code}`)
  const dataAtr = item.dataset.keys

  if (e.code === dataAtr) {
    console.log(1)
    textarea.textContent += item.querySelector('.keyboard__lang.en > .lowercase').textContent
    activeKey(item)
    if (dataAtr === 'AltLeft') {
      // switch language
      keyboardShortcuts(
        () => {
          const ruKeys = document.querySelectorAll('.ru')
          const enKeys = document.querySelectorAll('.en')

          for (let i = 0; i < ruKeys.length; i++) {
            for (let j = 0; j < enKeys.length; j++) {
              ruKeys[i].classList.remove('hide')
              enKeys[j].classList.add('hide')
            }
          }
        },
        'AltLeft',
        'ShiftLeft'
      )
    }
  }
})

document.addEventListener('DOMContentLoaded', () => {
  textarea.focus()
})
