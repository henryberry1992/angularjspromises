var app = angular.module('userApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'LoginCtrl as ctrl'
    })
    .when('/profile', {
      templateUrl: 'profile.html',
      controller: 'ProfileCtrl as ctrl',
      /*TODO #3: Add a "resolve" that loads the user
      profile before the profile page loads. If there
      is an error loa
      ding the profile then redirect
      the user to the login page.*/
      resolve:
      {
        UserStuff:function(api)
        {
          return api.getProfile();
        }
      }

    })
    .otherwise({
      redirectTo: '/login'
    });


  $httpProvider.interceptors.push(function() {
    return {
      'request': function(config) {
        config.headers = config.headers || {};
        if (localStorage.authToken) {
          config.headers.Authorization = localStorage.authToken;
        }
        return config;
      }
    };
  });
}); 