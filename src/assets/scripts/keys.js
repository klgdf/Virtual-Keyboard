/* Типы навигации:
1. Клавиши ввода - type = input.
2. Клавиши навигации - type = nav.
3. Служебные клавиши - type = service.
 */

const keys = [
  {
    key: 'Backquote',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ё',
      uppercase: 'Ё'
    },
    en: {
      lowercase: '`',
      uppercase: '~'
    }
  },
  {
    key: 'Digit1',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '1',
      uppercase: '!'
    },
    en: {
      lowercase: '1',
      uppercase: '!'
    }
  },
  {
    key: 'Digit2',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '2',
      uppercase: '"'
    },
    en: {
      lowercase: '2',
      uppercase: '@'
    }
  },
  {
    key: 'Digit3',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '3',
      uppercase: '№'
    },
    en: {
      lowercase: '3',
      uppercase: '#'
    }
  },
  {
    key: 'Digit4',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '4',
      uppercase: ';'
    },
    en: {
      lowercase: '4',
      uppercase: '$'
    }
  },
  {
    key: 'Digit5',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '5',
      uppercase: '%'
    },
    en: {
      lowercase: '5',
      uppercase: '%'
    }
  },
  {
    key: 'Digit6',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '6',
      uppercase: ':'
    },
    en: {
      lowercase: '6',
      uppercase: '^'
    }
  },
  {
    key: 'Digit7',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '7',
      uppercase: '?'
    },
    en: {
      lowercase: '7',
      uppercase: '&'
    }
  },
  {
    key: 'Digit8',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '8',
      uppercase: '*'
    },
    en: {
      lowercase: '8',
      uppercase: '*'
    }
  },
  {
    key: 'Digit9',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '9',
      uppercase: '('
    },
    en: {
      lowercase: '9',
      uppercase: '('
    }
  },
  {
    key: 'Digit0',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '0',
      uppercase: ')'
    },
    en: {
      lowercase: '0',
      uppercase: ')'
    }
  },
  {
    key: 'Minus',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '-',
      uppercase: '_'
    },
    en: {
      lowercase: '-',
      uppercase: '_'
    }
  },
  {
    key: 'Equal',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '=',
      uppercase: '+'
    },
    en: {
      lowercase: '=',
      uppercase: '+'
    }
  },
  {
    key: 'Backspace',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: '',
      uppercase: ''
    },
    en: {
      lowercase: '',
      uppercase: ''
    }
  },
  {
    key: 'Tab',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Tab',
      uppercase: 'Tab'
    },
    en: {
      lowercase: 'Tab',
      uppercase: 'Tab'
    }
  },
  {
    key: 'KeyQ',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'й',
      uppercase: 'Й'
    },
    en: {
      lowercase: 'q',
      uppercase: 'Q'
    }
  },
  {
    key: 'KeyW',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ц',
      uppercase: 'Ц'
    },
    en: {
      lowercase: 'w',
      uppercase: 'W'
    }
  },
  {
    key: 'KeyE',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'у',
      uppercase: 'У'
    },
    en: {
      lowercase: 'e',
      uppercase: 'E'
    }
  },
  {
    key: 'KeyR',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'к',
      uppercase: 'К'
    },
    en: {
      lowercase: 'r',
      uppercase: 'R'
    }
  },
  {
    key: 'KeyT',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'е',
      uppercase: 'Е'
    },
    en: {
      lowercase: 't',
      uppercase: 'T'
    }
  },
  {
    key: 'KeyY',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'н',
      uppercase: 'Н'
    },
    en: {
      lowercase: 'y',
      uppercase: 'Y'
    }
  },
  {
    key: 'KeyU',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'г',
      uppercase: 'Г'
    },
    en: {
      lowercase: 'u',
      uppercase: 'U'
    }
  },
  {
    key: 'KeyI',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ш',
      uppercase: 'Ш'
    },
    en: {
      lowercase: 'i',
      uppercase: 'I'
    }
  },
  {
    key: 'KeyO',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'щ',
      uppercase: 'Щ'
    },
    en: {
      lowercase: 'o',
      uppercase: 'O'
    }
  },
  {
    key: 'KeyP',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'з',
      uppercase: 'З'
    },
    en: {
      lowercase: 'p',
      uppercase: 'P'
    }
  },
  {
    key: 'BracketLeft',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'х',
      uppercase: 'Х'
    },
    en: {
      lowercase: '[',
      uppercase: '{'
    }
  },
  {
    key: 'BracketRight',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ъ',
      uppercase: 'Ъ'
    },
    en: {
      lowercase: ']',
      uppercase: '}'
    }
  },
  {
    key: 'Backslash',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '\\',
      uppercase: '|'
    },
    en: {
      lowercase: '\\',
      uppercase: '|'
    }
  },
  {
    key: 'Delete',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Del',
      uppercase: 'Del'
    },
    en: {
      lowercase: 'Del',
      uppercase: 'Del'
    }
  },
  {
    key: 'CapsLock',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'CapsLock',
      uppercase: 'CapsLock'
    },
    en: {
      lowercase: 'CapsLock',
      uppercase: 'CapsLock'
    }
  },
  {
    key: 'KeyA',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ф',
      uppercase: 'Ф'
    },
    en: {
      lowercase: 'a',
      uppercase: 'A'
    }
  },
  {
    key: 'KeyS',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ы',
      uppercase: 'Ы'
    },
    en: {
      lowercase: 's',
      uppercase: 'S'
    }
  },
  {
    key: 'KeyD',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'в',
      uppercase: 'В'
    },
    en: {
      lowercase: 'd',
      uppercase: 'D'
    }
  },
  {
    key: 'KeyF',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'а',
      uppercase: 'А'
    },
    en: {
      lowercase: 'f',
      uppercase: 'F'
    }
  },
  {
    key: 'KeyG',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'п',
      uppercase: 'П'
    },
    en: {
      lowercase: 'g',
      uppercase: 'G'
    }
  },
  {
    key: 'KeyH',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'р',
      uppercase: 'Р'
    },
    en: {
      lowercase: 'h',
      uppercase: 'H'
    }
  },
  {
    key: 'KeyJ',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'о',
      uppercase: 'О'
    },
    en: {
      lowercase: 'j',
      uppercase: 'J'
    }
  },
  {
    key: 'KeyK',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'л',
      uppercase: 'Л'
    },
    en: {
      lowercase: 'j',
      uppercase: 'J'
    }
  },
  {
    key: 'KeyL',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'д',
      uppercase: 'Д'
    },
    en: {
      lowercase: 'l',
      uppercase: 'L'
    }
  },
  {
    key: 'Semicolon',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ж',
      uppercase: 'Ж'
    },
    en: {
      lowercase: ';',
      uppercase: ':'
    }
  },
  {
    key: 'Quote',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'э',
      uppercase: 'Э'
    },
    en: {
      lowercase: "'",
      uppercase: '"'
    }
  },
  {
    key: 'Enter',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Enter',
      uppercase: 'Enter'
    },
    en: {
      lowercase: 'Enter',
      uppercase: 'Enter'
    }
  },
  {
    key: 'ShiftLeft',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: '',
      uppercase: ''
    },
    en: {
      lowercase: '',
      uppercase: ''
    }
  },
  {
    key: 'KeyZ',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'я',
      uppercase: 'Я'
    },
    en: {
      lowercase: 'z',
      uppercase: 'Z'
    }
  },
  {
    key: 'KeyX',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ч',
      uppercase: 'Ч'
    },
    en: {
      lowercase: 'x',
      uppercase: 'X'
    }
  },
  {
    key: 'KeyC',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'с',
      uppercase: 'С'
    },
    en: {
      lowercase: 'c',
      uppercase: 'C'
    }
  },
  {
    key: 'KeyV',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'м',
      uppercase: 'М'
    },
    en: {
      lowercase: 'v',
      uppercase: 'V'
    }
  },
  {
    key: 'KeyB',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'и',
      uppercase: 'И'
    },
    en: {
      lowercase: 'b',
      uppercase: 'B'
    }
  },
  {
    key: 'KeyN',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'т',
      uppercase: 'Т'
    },
    en: {
      lowercase: 'n',
      uppercase: 'N'
    }
  },
  {
    key: 'KeyM',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ь',
      uppercase: 'Ь'
    },
    en: {
      lowercase: 'm',
      uppercase: 'M'
    }
  },
  {
    key: 'Comma',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'б',
      uppercase: 'Б'
    },
    en: {
      lowercase: ',',
      uppercase: '<'
    }
  },
  {
    key: 'Period',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ю',
      uppercase: 'Ю'
    },
    en: {
      lowercase: '.',
      uppercase: '>'
    }
  },
  {
    key: 'Slash',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '.',
      uppercase: ','
    },
    en: {
      lowercase: '/',
      uppercase: '?'
    }
  },
  {
    key: 'ArrowUp',
    event: 'true',
    type: 'nav',
    ru: {
      lowercase: '&#5123;',
      uppercase: '&#5123;'
    },
    en: {
      lowercase: '&#5123;',
      uppercase: '&#5123;'
    }
  },
  {
    key: 'ShiftRight',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: '',
      uppercase: ''
    },
    en: {
      lowercase: '',
      uppercase: ''
    }
  },
  {
    key: 'ControlLeft',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: '',
      uppercase: ''
    },
    en: {
      lowercase: '',
      uppercase: ''
    }
  },
  {
    key: 'MetaLeft',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Win',
      uppercase: 'Win'
    },
    en: {
      lowercase: 'Win',
      uppercase: 'Win'
    }
  },
  {
    key: 'AltLeft',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: '',
      uppercase: ''
    },
    en: {
      lowercase: '',
      uppercase: ''
    }
  },
  {
    key: 'Space',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: ' ',
      uppercase: ' '
    },
    en: {
      lowercase: ' ',
      uppercase: ' '
    }
  },
  {
    key: 'AltRight',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: '',
      uppercase: ''
    },
    en: {
      lowercase: '',
      uppercase: ''
    }
  },
  {
    key: 'ArrowLeft',
    event: 'true',
    type: 'nav',
    ru: {
      lowercase: '&#5130;',
      uppercase: '&#5130;'
    },
    en: {
      lowercase: '&#5130;',
      uppercase: '&#5130;'
    }
  },
  {
    key: 'ArrowDown',
    event: 'true',
    type: 'nav',
    ru: {
      lowercase: '&#5121;',
      uppercase: '&#5121;'
    },
    en: {
      lowercase: '&#5121;',
      uppercase: '&#5121;'
    }
  },
  {
    key: 'ArrowRight',
    event: 'true',
    type: 'nav',
    ru: {
      lowercase: '&#5125;',
      uppercase: '&#5125;'
    },
    en: {
      lowercase: '&#5125;',
      uppercase: '&#5125;'
    }
  },
  {
    key: 'ControlRight',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Ctrl',
      uppercase: 'Ctrl'
    },
    en: {
      lowercase: 'Ctrl',
      uppercase: 'Ctrl'
    }
  }
]

export default keys
