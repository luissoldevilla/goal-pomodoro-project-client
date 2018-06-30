'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const goalsEvents = require('./events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $(document).ready(function () {
    $('#change-password').hide()
    $('#sign-out').hide()
  })
  // AUTH GOES HERE
  $('#form-signUp').on('submit', goalsEvents.onFormSignUp)
  $('#form-signIn').on('submit', goalsEvents.onFormSignIn)
  $('#change-password').on('submit', goalsEvents.onChangePassword)
  $('#sign-out').on('click', goalsEvents.onSignOut)
})
