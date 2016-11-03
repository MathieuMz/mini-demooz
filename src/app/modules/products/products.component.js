import uirouter from 'angular-ui-router';

import ProductsController from './products.controller';
import UsersProductsService from '../users-products/usersproducts.service';
import UsersProductsDirective from '../users-products/usersproducts.directive';
import AuthService from '../auth/auth.service';

import * as Constants from '../../constants'

export default angular.module('app.products', [uirouter])
	.service('UsersProductsService', UsersProductsService)
	.service('AuthService', AuthService)
	.controller('ProductsController', ProductsController)
	.directive('usersProducts', () => new UsersProductsDirective)
	.config(function($stateProvider) {
	  $stateProvider.state('products', {
      url: '/' + Constants.PRODUCTS_URL,
      views: {
        '@': {
          controller: ProductsController,
          controllerAs: 'products',
          templateUrl: 'views/products.html',
      	}
			}
    });
	})
	.name;
