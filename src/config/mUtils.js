import Vue from 'vue'
// localStorage
// 存储
export const setLocalStorage = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
// 获取
export const getLocalStorage = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}
// 删除
export const delLocalStorage = name => {
  if (!name) return
  return window.localStorage.removeItem(name)
}
// 手机号校验
export const phoneCheck = phone => {
  let exp = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/gi.test(phone)
  return exp
}
// 邮箱校验
export const mailboxCkeck = email => {
  let exp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email)
  return exp
}

Vue.prototype.$confim = (icontype, msg) => {
  Vue.prototype.$message({
    message: msg,
    type: 'error',
    iconClass: 'icon_message_' + icontype,
    customClass: 'modal_' + icontype,
    showClass: true,
    duration: 2000
  })
}
