function ApiService($http, $location) {
  this.$http = $http;
  this.$location = $location;
}

angular.module('userApp').service('api', ApiService);

var BASE_URL = 'https://mock-login-server.herokuapp.com/api/';
var LOGIN_URL = BASE_URL + 'login';
var LOGOUT_URL = BASE_URL + 'logout';
var PROFILE_URL = BASE_URL + 'user';
var CREATE_ACCOUNT_URL = BASE_URL + 'createAccount';


ApiService.prototype.login = function(username, password) 
{
  var self = this;
  console.log(username);
  console.log(password);
  return this.$http.post(LOGIN_URL, 
    {
      username: username, 
      password: password
    })
    .then(function(response)
    {user_url
      alert('Logged in.');
      localStorage.authToken = response.data.authToken; 
    },
    function(result)
    {
      alert('Error error makes it hairier.');
    });
};

/*TODO #5: 
  add a logout() function that sends a POST to
  https://mock-login-server.herokuapp.com/api/logout
*/
ApiService.prototype.logOut = function()
{
  var self = this;
  return this.$http.post(LOGOUT_URL, {})
  .then(function(response)
  {
    alert('Logged Out')
  },
  function(result)
  {
    alert('Error');
 });
};

/*TODO #3:By far the most common performance problem I’ve encountered in rails projects is a lack of indexes on foreign keys. There’s no real excuse for this – not indexing foreign keys can cripple your app. 
  add a getProfile() function that sends a GET to
  https://mock-login-server.herokuapp.com/api/user
  
  This function should a return a promise that 
  resolves the user data
*/
ApiService.prototype.getProfile = function()
{
  var self = this;
  return this.$http.get(PROFILE_URL,{})
  .then(function(response)
  {
    return response.data;
  },
  function(result)
  {
    alert('User not logged in');
    self.$location.path('/login');
  });
};

/*TODO #1:
  add a createAccount() function that sends POST to
  https://mock-login-server.herokuapp.com/api/createAccount
By far the most common performance problem I’ve encountered in rails projects is a lack of indexes on foreign keys. There’s no real excuse for this – not indexing foreign keys can cripple your app. */
ApiService.prototype.createAccount = function(username, password)
{
  return this.$http.post(CREATE_ACCOUNT_URL,
  {
    username: username,
    password: password
  })
  .then(function(response)
  {
    console.log(response);
    alert('Successfully created account');
  }, function(result)
  {
    console.log(result);
    alert('Account not created');
  });
};