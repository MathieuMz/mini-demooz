export default class UsersProductsController {
	constructor($scope, $state, UsersProductsService, AuthService) {
		this.$scope = $scope;
		this.$state = $state;
    this.usersproductsService = UsersProductsService;
		this.authService = $scope.authService = AuthService;

		this.product = this.$scope.product.name;
		this.mode = this.$scope.mode;
		this.users = this.usersproductsService.getUsersOfProduct(this.mode, this.product);
		this.title = (this.mode === 'ownerships') ? "Ils l'ont !" : "Ils sont intéressés !";
		this.button = (this.mode === 'ownerships') ? "Moi aussi je l'ai" : "Moi aussi je suis intéressé";

    this.$inject = ['$scope', '$state', 'UsersProductsService', 'AuthService'];
  }

  addUserToProduct() {
		this.users = this.usersproductsService.addUserToProduct(
			this.mode,
			this.product,
			this.authService.getConnectedUser()
		);
    this.$state.reload();
  }

  alreadyOwnerOrRequester() {
    return this.usersproductsService.userAlreadyInProduct(this.product, this.authService.getConnectedUser());
  }
}
