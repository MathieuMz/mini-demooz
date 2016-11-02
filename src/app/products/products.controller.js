export default class ProductsController {
	constructor($scope, $state, ProductsService, AuthService) {
    this.authService = AuthService;
    this.productsService = ProductsService;
    this.$state = $state;
    this.loadProducts();
    this.$inject = ['$scope', '$state', 'ProductsService', 'AuthService'];
  }

  loadProducts() {
    this.productList = this.productsService.getProductList();
    this.productList.forEach(product => {
      product.owners = this.productsService.getProductOwners(product.name);
      product.requesters = this.productsService.getProductRequesters(product.name);
    });
  }

  requestProduct(product) {
    this.productsService.addProductRequester(product.name, this.authService.getConnectedUser());
    this.$state.reload();
  }

  haveProduct(product) {
    this.productsService.addProductOwner(product.name, this.authService.getConnectedUser());
    this.$state.reload();
  }

  alreadyOwnerOrRequester(product) {
    return (
      this.productsService.userAlreadyRequestProduct(product.name, this.authService.getConnectedUser()) ||
      this.productsService.userAlreadyHasProduct(product.name, this.authService.getConnectedUser())
    );
  }
}
