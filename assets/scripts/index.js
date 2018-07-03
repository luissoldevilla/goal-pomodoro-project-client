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
    $('#form-createGoal').hide()
    $('#get-allGoals').hide()
    $('#form-updateGoal').hide()
  })
  // AUTH GOES HERE
  $('#form-signUp').on('submit', goalsEvents.onFormSignUp)
  $('#form-signIn').on('submit', goalsEvents.onFormSignIn)
  $('#change-password').on('submit', goalsEvents.onChangePassword)
  $('#sign-out').on('click', goalsEvents.onSignOut)
  // RESOURCE GOES HERE
  $('#form-createGoal').on('submit', goalsEvents.onCreateGoal)
  $('#get-allGoals').on('click', goalsEvents.onShowAllGoals)
  $('#goal-content').on('click', '.remove-button', goalsEvents.onDeleteShownGoals)
  // $('#goal-content').on('click', '.update-button', goalsEvents.openUpdateform)
  // $('#goal-content').on('click', '.update-button', function (event) {
  //   debugger
  //   $('#form-updateGoal').show()
  // })
  $('#goal-content').on('submit', '.form-updateGoal', goalsEvents.onUpdateShownGoals)
})
