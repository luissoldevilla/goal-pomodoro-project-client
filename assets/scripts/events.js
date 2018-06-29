
const api = require('./api')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

// THIS IS AUTH EVENTS

const onFormSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
  console.log(data)
}

const onFormSignIn = function (event) {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

module.exports = {
  onFormSignUp,
  onFormSignIn,
  onChangePassword,
  onSignOut
}
