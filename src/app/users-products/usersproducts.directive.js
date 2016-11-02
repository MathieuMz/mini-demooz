import UsersProductsController from './usersproducts.controller';

export default class usersProducts {
    /*@ngInject*/
    constructor() {
        this.templateUrl = 'views/usersproducts.html';
        this.restrict = 'E';
        this.scope = {
          mode: '=',
          product: '='
        };
        this.transclude = true;
        this.controller = UsersProductsController;
        this.controllerAs = "usersproducts";
    }
}
