const getCaretPos = (obj) => {
  obj.focus()
  if (obj.selectionStart) return obj.selectionStart
  else if (document.selection) {
    const sel = document.selection.createRange()
    const clone = sel.duplicate()
    sel.collapse(true)
    clone.moveToElementText(obj)
    clone.setEndPoint('EndToEnd', sel)
    return clone.text.length
  }
  return 0
}

export default getCaretPos
