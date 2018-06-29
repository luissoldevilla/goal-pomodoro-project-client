
const store = require('./store')

const signUpSuccess = function (data) {
  $('#user-message-signUp').html('You are Sign Up!')
  console.log(data)
}

const signUpFail = function (data) {
  // console.log(data)
  document.getElementById('form-signUp').reset()
  $('#user-message-signUp').html('something went wrong, try again!')
}

const signInSuccess = function (response) {
  store.user = response.user
  console.log(response.user)
  $('#user-message-signIn').html('You are sign In!')
  // $('#myModal').modal('hide')
}

const signInFail = function (error) {
  console.log('signResponse is ', error)
  document.getElementById('form-signIn').reset()
  $('#user-message-signIn').html('something went wrong, try again!')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  document.getElementById('change-password').reset()
  $('#user-message-passwordChange').html('You have changed your password')
}

const changePasswordFail = function (data) {
  console.log(data)
  document.getElementById('change-password').reset()
  $('#user-message-passwordChange').html('Something went wrong, password not changed')
}

const signOutSuccess = function (data) {
  $('#user-message-signOut').html('You are sign Out!')
}

const signOutFail = function (data) {
  $('#user-message-signOut').html('Something went wrong')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
