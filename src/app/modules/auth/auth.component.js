import uirouter from 'angular-ui-router';
import AuthController from './auth.controller';
import AuthService from './auth.service';

export default angular.module('app.auth', [uirouter])
	.controller('AuthController', AuthController)
	.service('AuthService', AuthService)
	.config(function($stateProvider) {
	  $stateProvider
		.state('login', {
	    url: '/login',
			controller: AuthController,
			controllerAs: '$ctrl',
	    templateUrl: 'views/login.html',
	  })

	  .state('register', {
	    url: '/register',
			controller: AuthController,
			controllerAs: '$ctrl',
	    templateUrl: 'views/register.html',
	  });
	})
	.name;
