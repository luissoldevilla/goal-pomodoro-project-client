
const store = require('./store')

const config = require('./config.js')

// THIS IS AUTH API
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  console.log('user is ', store.user)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// THIS IS RESOURCES

const createGoal = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/goals',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// THIS IS SHOW RESOURCE HANDLEBARS

const showGoals = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/goals',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteGoals = (goalId) => {
  return $.ajax({
    url: config.apiUrl + '/goals/' + goalId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGoals = (goalId, data) => {
  return $.ajax({
    url: config.apiUrl + '/goals/' + goalId,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGoal,
  showGoals,
  deleteGoals,
  updateGoals
}
