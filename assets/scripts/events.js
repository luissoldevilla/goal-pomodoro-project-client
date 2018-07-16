
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
  // console.log(data)
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
  // console.log(data)
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

// THIS IS RESOURCE EVENTS

const onCreateGoal = function (event) {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  api.createGoal(data)
    .then(ui.createGoalSuccess)
    .catch(ui.createGoalFail)
  // console.log(data)
}

// THIS IS HANDLEBARS FOR LISTING RESOURCE

const onShowAllGoals = function (event) {
  // console.log('onShowAllGoals')
  event.preventDefault()
  api.showGoals()
    .then(ui.showGoalsSuccess)
    .catch(ui.showGoalsFail)
}

// THIS IS FOR DELETING A GOAL ON RESOURCE

const onDeleteShownGoals = (event) => {
  event.preventDefault()
  // console.log('onDeleteShownGoals')
  const goalId = $(event.target).closest('button').attr('data-id')
  // console.log(goalId)
  api.deleteGoals(goalId)
    .then(() => onShowAllGoals(event))
    .catch(ui.showGoalsFail)
}

// THIS IS FOR UPDATING A GOAL ON RESOURCE

const onUpdateShownGoals = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const goalId = $(event.target).attr('data-id')
  // console.log(goalId)
  api.updateGoals(goalId, data)
    .then(() => onShowAllGoals(event))
    .catch(ui.updateGoalsFail)
}

module.exports = {
  onFormSignUp,
  onFormSignIn,
  onChangePassword,
  onSignOut,
  onCreateGoal,
  onShowAllGoals,
  onDeleteShownGoals,
  onUpdateShownGoals
}
