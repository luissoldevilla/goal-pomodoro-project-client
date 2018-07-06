
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
}

const signOutFail = function (data) {
  $('#user-message-signOut').html('Something went wrong')
}

// RESOURCE CREATE BOOK

const createGoalSuccess = function (data) {
  $('#create-goal-message').html('You have Successfully created your Goal')
  // document.getElementById('timer').innerHTML = 1 + ":" + '';
  // startTimer();
  //
  // function startTimer() {
  //   var presentTime = document.getElementById('timer').innerHTML;
  //   var timeArray = presentTime.split(/[:]+/);
  //   var m = timeArray[0];
  //   var s = checkSecond((timeArray[1] - 1));
  //   if(s==59){m=m-1}
  //   if(m<0){alert('timer completed')}
  //
  //   document.getElementById('timer').innerHTML =
  //     m + ":" + s;
  //   setTimeout(startTimer, 1000)
  // }
  //
  // function checkSecond(sec) {
  //   if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  //   if (sec < 0) {sec = "59"};
  //   return sec;
  // }
}
const createGoalFail = function (data) {
  $('#create-goal-message').html('Your Goal was not successfully created')
}

// SHOW LISTING IF BOOKS

const showGoalsSuccess = (data) => {
  console.log('data is', data)
  const showGoalsHtml = showGoalsTemplate({ goals: data.goals })
  $('.content').html(showGoalsHtml)
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
