export default class AuthController {
	constructor($state, $window, AuthService) {
		this.$state = $state
		this.authService = AuthService;
		this.$window = $window;
		this.errorRegister = this.errorLogin = null;
    this.$inject = ['$state', '$window', 'AuthService'];
  }

	submitRegister () {
		let userRegister = this.authService.registerUser(this.formData);
		if (userRegister) {
			if (this.authService.logIn(userRegister)) {
				this.$state.go('products');
			}
		} else {
			this.errorRegister = "Ce nom est déjà utilisé, try again !"
		}
	}

	submitLogin() {
		let userLogged = this.authService.logIn(this.formData.username);
		if (userLogged) {
			this.$state.go('products');
		} else {
			this.errorLogin = "Trompé de nom d'utilisateur ?"
		}
	}

}
