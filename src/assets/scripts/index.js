// import styles and js module
import '../styles/normalize.scss'
import '../styles/style.sass'
import keys from './keys'
import getCaretPos from './caretPos'
import cookies from './cookies'

const { setCookieC, getCookieC } = cookies

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
textarea.addEventListener('change', (e) => {
  getCaretPos(textarea)
})

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

// set language from cookies
let keyboardLanguage = ''
if (getCookieC('keyboard_language') === '') {
  keyboardLanguage = 'en'
  setCookieC('keyboard_language', 'en', 1)
} else {
  keyboardLanguage = getCookieC('keyboard_language')
}
document.querySelectorAll('.keyboard__key').forEach(item => {
  if (keyboardLanguage === 'ru') {
    item.querySelector('.ru').classList.remove('hide')
    item.querySelector('.en').classList.add('hide')
  } else {
    item.querySelector('.ru').classList.add('hide')
    item.querySelector('.en').classList.remove('hide')
  }
})

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

    f(pressKey)
    pressKey.clear()
  })

  document.addEventListener('keyup', (e) => {
    pressKey.delete(e.code)
  })
}

const items = document.querySelectorAll('.keyboard__key')
keyboardShortcuts(
  (pressKey) => {
    if (
      Array.from(pressKey).indexOf('ShiftLeft') !== -1 &&
      Array.from(pressKey).indexOf('AltLeft') !== -1
    ) {
      document.querySelectorAll('.keyboard__key').forEach(item => {
        item.querySelector('.ru').classList.toggle('hide')
        item.querySelector('.en').classList.toggle('hide')
      })
      keyboardLanguage = (document.querySelector('.keyboard__key .ru').classList.contains('hide')) ? 'en' : 'ru'
      setCookieC('keyboard_language', keyboardLanguage, 1)
    }
  },
  'AltLeft',
  'ShiftLeft'
)

const activeKey = (item) => {
  item.classList.add('active')
  setTimeout(() => {
    item.classList.remove('active')
  }, 200)
}

items.forEach(item => {
  // eventlistener for keyboard
  item.addEventListener('click', (e) => {
    if (e.currentTarget === item) {
      textarea.textContent += item.querySelector('.keyboard__lang.en > .lowercase').textContent
      if (item.classList.contains('Backspace')) {
        console.log('1')
        textarea.focus()
        document.dispatchEvent(new KeyboardEvent('keydown', {
          key: 'Backspace',
          char: 8,
          ctrlKey: true
        }))

        document.dispatchEvent(new KeyboardEvent('keyup', {
          key: 'Backspace',
          char: 8,
          ctrlKey: false
        }))
      }
      activeKey(item)
    }
  })
})

document.addEventListener('keydown', (e) => {
  console.log(e.code)
  const item = document.querySelector(`.${e.code}`)
  const dataAtr = item.dataset.keys

  if (e.code === dataAtr) {
    console.log(e.code)
    textarea.textContent += item.querySelector('.keyboard__lang.en > .lowercase').textContent
    activeKey(item)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  textarea.focus()
})
