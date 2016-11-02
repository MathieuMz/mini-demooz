import uirouter from 'angular-ui-router';
import ProductsController from './products.controller';

import UsersProductsService from '../users-products/usersproducts.service';
import usersProducts from '../users-products/usersproducts.directive';

import AuthService from '../auth/auth.service';

export default angular.module('app.products', [uirouter])
	.service('UsersProductsService', UsersProductsService)
	.service('AuthService', AuthService)
	.controller('ProductsController', ProductsController)
	.directive('usersProducts', () => new usersProducts)
	.config(function($stateProvider) {
	  $stateProvider.state('products', {
      url: '/products',
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
