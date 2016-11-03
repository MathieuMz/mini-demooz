import angular from 'angular';
import uirouter from 'angular-ui-router';
import products from './modules/products/products.component';
import auth from './modules/auth/auth.component';
import AuthService from './modules/auth/auth.service';

import 'bootstrap/dist/css/bootstrap.css';
import './style/app.scss';

let App = angular.module('app', [uirouter, auth, products]);

App.config(function($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/products');
});

function assignServicesToRootScope($rootScope, AuthService){
  $rootScope.authService = AuthService;
}
assignServicesToRootScope.$inject = ['$rootScope', 'AuthService'];

App.run(assignServicesToRootScope);

export default App.name;
