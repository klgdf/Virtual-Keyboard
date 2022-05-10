// import styles and js module
import '../styles/normalize.scss'
import '../styles/style.sass'
import keys from './keys'
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
    </div>
    <div class="keyboard__lang en current-lang">
      <span class="lowercase">${key.en.lowercase}</span>
      <span class="uppercase hide">${key.en.uppercase}</span>
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
    item.querySelector('.ru').classList.add('current-lang')
    item.querySelector('.en').classList.add('hide')
    item.querySelector('.en').classList.remove('current-lang')
  } else {
    item.querySelector('.ru').classList.add('hide')
    item.querySelector('.ru').classList.remove('current-lang')
    item.querySelector('.en').classList.remove('hide')
    item.querySelector('.en').classList.add('current-lang')
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
        item.querySelector('.ru').classList.toggle('current-lang')
        item.querySelector('.en').classList.toggle('current-lang')
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

const removeABC = (target) => {
  let startPos = textarea.selectionStart
  const endPos = textarea.selectionEnd
  const textareaValue = textarea.value

  if (target === 'Backspace') {
    if (startPos > 0) {
      textarea.value = textareaValue.slice(0, startPos - 1) + textareaValue.slice(endPos)
      textarea.focus()
      startPos -= 1
    }
  }
  if (target === 'Delete') {
    if (endPos < textareaValue.length) {
      textarea.value = textareaValue.slice(0, startPos) + textareaValue.slice(endPos + 1)
      textarea.focus()
    }
  }
  textarea.selectionStart = startPos
  textarea.selectionEnd = startPos
}

items.forEach(item => {
  // eventlistener for keyboard
  item.addEventListener('click', (e) => {
    if (e.currentTarget === item && !(e.currentTarget.classList.contains('CapsLock'))) {
      textarea.value += item.querySelector('.keyboard__lang.current-lang > .lowercase').innerText
      activeKey(item)
    } else if (e.currentTarget.classList.contains('CapsLock')) {
      e.currentTarget.classList.toggle('active')
    }
    removeABC(e.currentTarget.dataset.keys)
  })
})

document.addEventListener('keyup', (e) => {
  const item = document.querySelector(`.${e.code}`)
  const dataAtr = item.dataset.keys

  if (e.code === dataAtr && e.code !== 'CapsLock') {
    textarea.textContent += item.querySelector('.keyboard__lang.current-lang > .lowercase').textContent
    activeKey(item)
  } else if (e.code === 'CapsLock') {
    console.log('1')
    item.classList.toggle('active')
  }

  removeABC(e.code)
})

let registr = ''
const lowercases = document.querySelectorAll('.lowercase')
const uppercases = document.querySelectorAll('.uppercase')
const caps = document.querySelector('.CapsLock')
if (getCookieC('registr') === '') {
  registr = 'false'
  setCookieC('registr', 'false', 1)
  caps.classList.remove('active')
} else {
  registr = 'true'
  caps.classList.add('active')
}

textarea.addEventListener('keyup', (e) => {
  console.log('1')
  controlRegistr(e)
})

const controlRegistr = (e) => {
  if (e.getModifierState('CapsLock') && (e.getModifierState('ShiftLeft') || e.getModifierState('ShiftRight'))) {
    console.log(1)
    caps.classList.add('active')
    setCookieC('registr', 'true', 1)
    lowercases.forEach(lowercase => {
      lowercase.classList.remove('hide')
    })
    uppercases.forEach(uppercase => {
      uppercase.classList.add('hide')
    })
  } else if (e.getModifierState('CapsLock') && !(e.getModifierState('ShiftLeft') || e.getModifierState('ShiftRight'))) {
    console.log(2)
    caps.classList.add('active')
    setCookieC('registr', 'true', 1)
    lowercases.forEach(lowercase => {
      lowercase.classList.add('hide')
    })
    uppercases.forEach(uppercase => {
      uppercase.classList.remove('hide')
    })
  } else if (!e.getModifierState('CapsLock') && !(e.getModifierState('ShiftLeft') || e.getModifierState('ShiftRight'))) {
    console.log(3)
    caps.classList.remove('active')
    setCookieC('registr', 'false', 1)
    lowercases.forEach(lowercase => {
      lowercase.classList.remove('hide')
    })
    uppercases.forEach(uppercase => {
      uppercase.classList.add('hide')
    })
  } else {
    console.log(4)
    caps.classList.remove('active')
    setCookieC('registr', 'false', 1)
    lowercases.forEach(lowercase => {
      lowercase.classList.add('hide')
    })
    uppercases.forEach(uppercase => {
      uppercase.classList.remove('hide')
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  textarea.focus()
})
