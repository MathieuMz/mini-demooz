import angular from 'angular';
import uirouter from 'angular-ui-router';
import products from './products/products.component';
import auth from './auth/auth.component';
import AuthService from './auth/auth.service';

import 'bootstrap/dist/css/bootstrap.css';
import './style/app.scss';

function assignServicesToRootScope($rootScope, AuthService){
  $rootScope.authService = AuthService;
}
assignServicesToRootScope.$inject = ['$rootScope', 'AuthService'];

let App = angular.module('app', [uirouter, auth, products]);
App.config(function($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/products');
});
App.run(assignServicesToRootScope);

export default App.name;
