function bindEvent(element, type, handle) {
  if (element.addEventListener) {
    element.addEventListener(type, handle, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, handle);
  }
}