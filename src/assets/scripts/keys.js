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
      uppercase: 'Ё',
      capsLower: 'Ё',
      capsUpper: 'ё'
    },
    en: {
      lowercase: '`',
      uppercase: '~',
      capsLower: '`',
      capsUpper: '~'
    }
  },
  {
    key: 'Digit1',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '1',
      uppercase: '!',
      capsLower: '1',
      capsUpper: '!'
    },
    en: {
      lowercase: '1',
      uppercase: '!',
      capsLower: '1',
      capsUpper: '!'
    }
  },
  {
    key: 'Digit2',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '2',
      uppercase: '"',
      capsLower: '2',
      capsUpper: '"'
    },
    en: {
      lowercase: '2',
      uppercase: '@',
      capsLower: '2',
      capsUpper: '@'
    }
  },
  {
    key: 'Digit3',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '3',
      uppercase: '№',
      capsLower: '3',
      capsUpper: '№'
    },
    en: {
      lowercase: '3',
      uppercase: '#',
      capsLower: '3',
      capsUpper: '#'
    }
  },
  {
    key: 'Digit4',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '4',
      uppercase: ';',
      capsLower: '4',
      capsUpper: ';'
    },
    en: {
      lowercase: '4',
      uppercase: '$',
      capsLower: '4',
      capsUpper: '$'
    }
  },
  {
    key: 'Digit5',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '5',
      uppercase: '%',
      capsLower: '5',
      capsUpper: '%'
    },
    en: {
      lowercase: '5',
      uppercase: '%',
      capsLower: '5',
      capsUpper: '%'
    }
  },
  {
    key: 'Digit6',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '6',
      uppercase: ':',
      capsLower: '6',
      capsUpper: ':'
    },
    en: {
      lowercase: '6',
      uppercase: '^',
      capsLower: '6',
      capsUpper: '^'
    }
  },
  {
    key: 'Digit7',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '7',
      uppercase: '?',
      capsLower: '7',
      capsUpper: '?'
    },
    en: {
      lowercase: '7',
      uppercase: '&',
      capsLower: '7',
      capsUpper: '&'
    }
  },
  {
    key: 'Digit8',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '8',
      uppercase: '*',
      capsLower: '8',
      capsUpper: '*'
    },
    en: {
      lowercase: '8',
      uppercase: '*',
      capsLower: '8',
      capsUpper: '*'
    }
  },
  {
    key: 'Digit9',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '9',
      uppercase: '(',
      capsLower: '9',
      capsUpper: '('
    },
    en: {
      lowercase: '9',
      uppercase: '(',
      capsLower: '9',
      capsUpper: '('
    }
  },
  {
    key: 'Digit0',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '0',
      uppercase: ')',
      capsLower: '0',
      capsUpper: ')'
    },
    en: {
      lowercase: '0',
      uppercase: ')',
      capsLower: '0',
      capsUpper: ')'
    }
  },
  {
    key: 'NumpadSubtract',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '-',
      uppercase: '_',
      capsLower: '-',
      capsUpper: '_'
    },
    en: {
      lowercase: '-',
      uppercase: '_',
      capsLower: '-',
      capsUpper: '_'
    }
  },
  {
    key: 'Equal',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '=',
      uppercase: '+',
      capsLower: '=',
      capsUpper: '+'
    },
    en: {
      lowercase: '=',
      uppercase: '+',
      capsLower: '=',
      capsUpper: '+'
    }
  },
  {
    key: 'Backspace',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: '',
      uppercase: '',
      capsLower: '',
      capsUpper: ''
    },
    en: {
      lowercase: '',
      uppercase: '',
      capsLower: '',
      capsUpper: ''
    }
  },
  {
    key: 'Tab',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Tab',
      uppercase: 'Tab',
      capsLower: 'Tab',
      capsUpper: 'Tab'
    },
    en: {
      lowercase: 'Tab',
      uppercase: 'Tab',
      capsLower: 'Tab',
      capsUpper: 'Tab'
    }
  },
  {
    key: 'KeyQ',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'й',
      uppercase: 'Й',
      capsLower: 'Й',
      capsUpper: 'й'
    },
    en: {
      lowercase: 'q',
      uppercase: 'Q',
      capsLower: 'Q',
      capsUpper: 'q'
    }
  },
  {
    key: 'KeyW',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ц',
      uppercase: 'Ц',
      capsLower: 'Ц',
      capsUpper: 'ц'
    },
    en: {
      lowercase: 'w',
      uppercase: 'W',
      capsLower: 'W',
      capsUpper: 'w'
    }
  },
  {
    key: 'KeyE',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'у',
      uppercase: 'У',
      capsLower: 'У',
      capsUpper: 'у'
    },
    en: {
      lowercase: 'e',
      uppercase: 'E',
      capsLower: 'E',
      capsUpper: 'e'
    }
  },
  {
    key: 'KeyR',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'к',
      uppercase: 'К',
      capsLower: 'К',
      capsUpper: 'к'
    },
    en: {
      lowercase: 'r',
      uppercase: 'R',
      capsLower: 'R',
      capsUpper: 'r'
    }
  },
  {
    key: 'KeyT',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'е',
      uppercase: 'Е',
      capsLower: 'Е',
      capsUpper: 'е'
    },
    en: {
      lowercase: 't',
      uppercase: 'T',
      capsLower: 'T',
      capsUpper: 't'
    }
  },
  {
    key: 'KeyY',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'н',
      uppercase: 'Н',
      capsLower: 'Н',
      capsUpper: 'н'
    },
    en: {
      lowercase: 'y',
      uppercase: 'Y',
      capsLower: 'Y',
      capsUpper: 'y'
    }
  },
  {
    key: 'KeyU',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'г',
      uppercase: 'Г',
      capsLower: 'Г',
      capsUpper: 'г'
    },
    en: {
      lowercase: 'u',
      uppercase: 'U',
      capsLower: 'U',
      capsUpper: 'u'
    }
  },
  {
    key: 'KeyI',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ш',
      uppercase: 'Ш',
      capsLower: 'Ш',
      capsUpper: 'ш'
    },
    en: {
      lowercase: 'i',
      uppercase: 'I',
      capsLower: 'I',
      capsUpper: 'i'
    }
  },
  {
    key: 'KeyO',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'щ',
      uppercase: 'Щ',
      capsLower: 'Щ',
      capsUpper: 'щ'
    },
    en: {
      lowercase: 'o',
      uppercase: 'O',
      capsLower: 'O',
      capsUpper: 'o'
    }
  },
  {
    key: 'KeyP',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'з',
      uppercase: 'З',
      capsLower: 'З',
      capsUpper: 'з'
    },
    en: {
      lowercase: 'p',
      uppercase: 'P',
      capsLower: 'P',
      capsUpper: 'p'
    }
  },
  {
    key: 'BracketLeft',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'х',
      uppercase: 'Х',
      capsLower: 'Х',
      capsUpper: 'х'
    },
    en: {
      lowercase: '[',
      uppercase: '{',
      capsLower: '[',
      capsUpper: '{'
    }
  },
  {
    key: 'BracketRight',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ъ',
      uppercase: 'Ъ',
      capsLower: 'Ъ',
      capsUpper: 'ъ'
    },
    en: {
      lowercase: ']',
      uppercase: '}',
      capsLower: ']',
      capsUpper: '}'
    }
  },
  {
    key: 'Backslash',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '\\',
      uppercase: '|',
      capsLower: '\\',
      capsUpper: '|'
    },
    en: {
      lowercase: '\\',
      uppercase: '|',
      capsLower: '\\',
      capsUpper: '|'
    }
  },
  {
    key: 'Delete',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Del',
      uppercase: 'Del',
      capsLower: 'Del',
      capsUpper: 'Del'
    },
    en: {
      lowercase: 'Del',
      uppercase: 'Del',
      capsLower: 'Del',
      capsUpper: 'Del'
    }
  },
  {
    key: 'CapsLock',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'CapsLock',
      uppercase: 'CapsLock',
      capsLower: 'CapsLock',
      capsUpper: 'CapsLock'
    },
    en: {
      lowercase: 'CapsLock',
      uppercase: 'CapsLock',
      capsLower: 'CapsLock',
      capsUpper: 'CapsLock'
    }
  },
  {
    key: 'KeyA',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ф',
      uppercase: 'Ф',
      capsLower: 'Ф',
      capsUpper: 'ф'
    },
    en: {
      lowercase: 'a',
      uppercase: 'A',
      capsLower: 'A',
      capsUpper: 'a'
    }
  },
  {
    key: 'KeyS',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ы',
      uppercase: 'Ы',
      capsLower: 'Ы',
      capsUpper: 'ы'
    },
    en: {
      lowercase: 's',
      uppercase: 'S',
      capsLower: 'S',
      capsUpper: 's'
    }
  },
  {
    key: 'KeyD',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'в',
      uppercase: 'В',
      capsLower: 'В',
      capsUpper: 'в'
    },
    en: {
      lowercase: 'd',
      uppercase: 'D',
      capsLower: 'D',
      capsUpper: 'd'
    }
  },
  {
    key: 'KeyF',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'а',
      uppercase: 'А',
      capsLower: 'А',
      capsUpper: 'а'
    },
    en: {
      lowercase: 'f',
      uppercase: 'F',
      capsLower: 'F',
      capsUpper: 'f'
    }
  },
  {
    key: 'KeyG',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'п',
      uppercase: 'П',
      capsLower: 'П',
      capsUpper: 'п'
    },
    en: {
      lowercase: 'g',
      uppercase: 'G',
      capsLower: 'G',
      capsUpper: 'g'
    }
  },
  {
    key: 'KeyH',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'р',
      uppercase: 'Р',
      capsLower: 'Р',
      capsUpper: 'р'
    },
    en: {
      lowercase: 'h',
      uppercase: 'H',
      capsLower: 'H',
      capsUpper: 'h'
    }
  },
  {
    key: 'KeyJ',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'о',
      uppercase: 'О',
      capsLower: 'О',
      capsUpper: 'о'
    },
    en: {
      lowercase: 'j',
      uppercase: 'J',
      capsLower: 'J',
      capsUpper: 'j'
    }
  },
  {
    key: 'KeyK',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'л',
      uppercase: 'Л',
      capsLower: 'Л',
      capsUpper: 'л'
    },
    en: {
      lowercase: 'j',
      uppercase: 'J',
      capsLower: 'J',
      capsUpper: 'j'
    }
  },
  {
    key: 'KeyL',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'д',
      uppercase: 'Д',
      capsLower: 'Д',
      capsUpper: 'д'
    },
    en: {
      lowercase: 'l',
      uppercase: 'L',
      capsLower: 'L',
      capsUpper: 'l'
    }
  },
  {
    key: 'Semicolon',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ж',
      uppercase: 'Ж',
      capsLower: 'Ж',
      capsUpper: 'ж'
    },
    en: {
      lowercase: ';',
      uppercase: ':',
      capsLower: ';',
      capsUpper: ':'
    }
  },
  {
    key: 'Quote',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'э',
      uppercase: 'Э',
      capsLower: 'Э',
      capsUpper: 'э'
    },
    en: {
      lowercase: "'",
      uppercase: '"',
      capsLower: "'",
      capsUpper: '"'
    }
  },
  {
    key: 'Enter',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Enter',
      uppercase: 'Enter',
      capsLower: 'Enter',
      capsUpper: 'Enter'
    },
    en: {
      lowercase: 'Enter',
      uppercase: 'Enter',
      capsLower: 'Enter',
      capsUpper: 'Enter'
    }
  },
  {
    key: 'ShiftLeft',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Shift',
      uppercase: 'Shift',
      capsLower: 'Shift',
      capsUpper: 'Shift'
    },
    en: {
      lowercase: 'Shift',
      uppercase: 'Shift',
      capsLower: 'Shift',
      capsUpper: 'Shift'
    }
  },
  {
    key: 'KeyZ',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'я',
      uppercase: 'Я',
      capsLower: 'Я',
      capsUpper: 'я'
    },
    en: {
      lowercase: 'z',
      uppercase: 'Z',
      capsLower: 'Z',
      capsUpper: 'z'
    }
  },
  {
    key: 'KeyX',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ч',
      uppercase: 'Ч',
      capsLower: 'Ч',
      capsUpper: 'ч'
    },
    en: {
      lowercase: 'x',
      uppercase: 'X',
      capsLower: 'X',
      capsUpper: 'x'
    }
  },
  {
    key: 'KeyС',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'с',
      uppercase: 'С',
      capsLower: 'С',
      capsUpper: 'с'
    },
    en: {
      lowercase: 'c',
      uppercase: 'C',
      capsLower: 'C',
      capsUpper: 'c'
    }
  },
  {
    key: 'KeyV',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'м',
      uppercase: 'М',
      capsLower: 'М',
      capsUpper: 'м'
    },
    en: {
      lowercase: 'v',
      uppercase: 'V',
      capsLower: 'V',
      capsUpper: 'v'
    }
  },
  {
    key: 'KeyB',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'и',
      uppercase: 'И',
      capsLower: 'И',
      capsUpper: 'и'
    },
    en: {
      lowercase: 'b',
      uppercase: 'B',
      capsLower: 'B',
      capsUpper: 'b'
    }
  },
  {
    key: 'KeyN',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'т',
      uppercase: 'Т',
      capsLower: 'Т',
      capsUpper: 'т'
    },
    en: {
      lowercase: 'n',
      uppercase: 'N',
      capsLower: 'N',
      capsUpper: 'n'
    }
  },
  {
    key: 'KeyM',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ь',
      uppercase: 'Ь',
      capsLower: 'Ь',
      capsUpper: 'ь'
    },
    en: {
      lowercase: 'm',
      uppercase: 'M',
      capsLower: 'M',
      capsUpper: 'm'
    }
  },
  {
    key: 'NumpadDecimal',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'б',
      uppercase: 'Б',
      capsLower: 'Б',
      capsUpper: 'б'
    },
    en: {
      lowercase: ',',
      uppercase: '<',
      capsLower: ',',
      capsUpper: '<'
    }
  },
  {
    key: 'Period',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: 'ю',
      uppercase: 'Ю',
      capsLower: 'Ю',
      capsUpper: 'ю'
    },
    en: {
      lowercase: '.',
      uppercase: '>',
      capsLower: '.',
      capsUpper: '>'
    }
  },
  {
    key: 'Slash',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: '.',
      uppercase: ',',
      capsLower: '.',
      capsUpper: ','
    },
    en: {
      lowercase: '/',
      uppercase: '?',
      capsLower: '/',
      capsUpper: '?'
    }
  },
  {
    key: 'ArrowUp',
    event: 'true',
    type: 'nav',
    ru: {
      lowercase: '',
      uppercase: '',
      capsLower: '',
      capsUpper: ''
    },
    en: {
      lowercase: '',
      uppercase: '',
      capsLower: '',
      capsUpper: ''
    }
  },
  {
    key: 'ShiftRight',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Shift',
      uppercase: 'Shift',
      capsLower: 'Shift',
      capsUpper: 'Shift'
    },
    en: {
      lowercase: 'Shift',
      uppercase: 'Shift',
      capsLower: 'Shift',
      capsUpper: 'Shift'
    }
  },
  {
    key: 'ControlLeft',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Ctrl',
      uppercase: 'Ctrl',
      capsLower: 'Ctrl',
      capsUpper: 'Ctrl'
    },
    en: {
      lowercase: 'Ctrl',
      uppercase: 'Ctrl',
      capsLower: 'Ctrl',
      capsUpper: 'Ctrl'
    }
  },
  {
    key: 'MetaLeft',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Win',
      uppercase: 'Win',
      capsLower: 'Win',
      capsUpper: 'Win'
    },
    en: {
      lowercase: 'Win',
      uppercase: 'Win',
      capsLower: 'Win',
      capsUpper: 'Win'
    }
  },
  {
    key: 'AltLeft',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Alt',
      uppercase: 'Alt',
      capsLower: 'Alt',
      capsUpper: 'Alt'
    },
    en: {
      lowercase: 'Alt',
      uppercase: 'Alt',
      capsLower: 'Alt',
      capsUpper: 'Alt'
    }
  },
  {
    key: 'Space',
    event: 'false',
    type: 'input',
    ru: {
      lowercase: ' ',
      uppercase: ' ',
      capsLower: ' ',
      capsUpper: ' '
    },
    en: {
      lowercase: ' ',
      uppercase: ' ',
      capsLower: ' ',
      capsUpper: ' '
    }
  },
  {
    key: 'AltRight',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Alt',
      uppercase: 'Alt',
      capsLower: 'Alt',
      capsUpper: 'Alt'
    },
    en: {
      lowercase: 'Alt',
      uppercase: 'Alt',
      capsLower: 'Alt',
      capsUpper: 'Alt'
    }
  },
  {
    key: 'ArrowLeft',
    event: 'true',
    type: 'nav',
    ru: {
      lowercase: '',
      uppercase: '',
      capsLower: '',
      capsUpper: ''
    },
    en: {
      lowercase: '',
      uppercase: '',
      capsLower: '',
      capsUpper: ''
    }
  },
  {
    key: 'ArrowDown',
    event: 'true',
    type: 'nav',
    ru: {
      lowercase: '',
      uppercase: '',
      capsLower: '',
      capsUpper: ''
    },
    en: {
      lowercase: '',
      uppercase: '',
      capsLower: '',
      capsUpper: ''
    }
  },
  {
    key: 'ArrowRight',
    event: 'true',
    type: 'nav',
    ru: {
      lowercase: '',
      uppercase: '',
      capsLower: '',
      capsUpper: ''
    },
    en: {
      lowercase: '',
      uppercase: '',
      capsLower: '',
      capsUpper: ''
    }
  },
  {
    key: 'ControlRight',
    event: 'true',
    type: 'service',
    ru: {
      lowercase: 'Ctrl',
      uppercase: 'Ctrl',
      capsLower: 'Ctrl',
      capsUpper: 'Ctrl'
    },
    en: {
      lowercase: 'Ctrl',
      uppercase: 'Ctrl',
      capsLower: 'Ctrl',
      capsUpper: 'Ctrl'
    }
  }
]

export default keys
