
const store = require('./store')
const showGoalsTemplate = require('./templates/goal-listing.handlebars')

// SIGN UP
const signUpSuccess = function (data) {
  $('#user-message-signUp').html('You are Sign Up!')
  document.getElementById('form-signUp').reset()
  console.log(data)
}

const signUpFail = function (data) {
  // console.log(data)
  document.getElementById('form-signUp').reset()
  $('#user-message-signUp').html('something went wrong, try again!')
}

// SIGN IN

const signInSuccess = function (response) {
  store.user = response.user
  console.log(response.user)
  document.getElementById('form-signIn').reset()
  $('#user-message-signIn').html('You are sign In!')
  // $('#myModal').modal('hide')
  $('#change-password').show()
  $('#sign-out').show()
  $('#form-createGoal').show()
  $('#get-allGoals').show()
  $('.signup-portal').hide()
  $('#sign-in-button').hide()
  $('.pass-change').show()
  $('#goal-content').show()
  $('#user-message-signOut').html('')
  $('.form-group').hide()
  $('.content').html('')
}

const signInFail = function (error) {
  console.log('signResponse is ', error)
  document.getElementById('form-signIn').reset()
  $('#user-message-signIn').html('something went wrong, try again!')
}

// CHANGE PASSWORD

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

// SIGN OUT

const signOutSuccess = function (data) {
  $('#user-message-signOut').html('You are sign Out!')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#user-message-signIn').html('')
  $('#sign-in-button').show()
  $('.signup-portal').show()
  $('#form-createGoal').hide()
  $('#get-allGoals').hide()
  $('.pass-change').hide()
  $('#goal-content').hide()
  $('.form-group').show()
  document.getElementById('form-createGoal').reset()
  document.getElementById('change-password').reset()
}

const signOutFail = function (data) {
  $('#user-message-signOut').html('Something went wrong')
}

// RESOURCE CREATE BOOK

const createGoalSuccess = function (data) {
  $('#create-goal-message').html('You have Successfully created your Goal').fadeIn().delay(3000).fadeOut()
  document.getElementById('form-createGoal').reset()
}
const createGoalFail = function (data) {
  $('#create-goal-message').html('Your Goal was not successfully created')
}

// SHOW LISTING IF BOOKS

const showGoalsSuccess = (data) => {
  console.log('data is', data)
  if (data.goals.length !== 0) {
    const showGoalsHtml = showGoalsTemplate({ goals: data.goals })
    $('.content').html(showGoalsHtml).fadeIn()
  } else {
    $('.content').html('You dont have any goals yet').fadeIn().delay(1500).fadeOut()
  }
  console.log(data.goals.length)
}

// DELETE ONE GOAL FORM RESOURCE

const showGoalsFail = (error) => {
  console.error(error)
}

// UPDATE ONE GOAL FORM RESOURCE

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail,
  createGoalSuccess,
  createGoalFail,
  showGoalsSuccess,
  showGoalsFail
}
