import uirouter from 'angular-ui-router';
import ProductsService from './products.service';
import ProductsController from './products.controller';
import AuthService from '../auth/auth.service';

export default angular.module('app.products', [uirouter])
	.service('ProductsService', ProductsService)
	.service('AuthService', AuthService)
	.controller('ProductsController', ProductsController)
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
