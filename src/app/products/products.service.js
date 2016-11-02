export default class ProductsService {
    constructor() {
    }

    getProductList() {
      return JSON.parse(localStorage.getItem('products'));
    }

    getProductOwners(product) {
      let owners = JSON.parse(localStorage.getItem('ownerships'));
      return owners.filter(owner =>
        owner.productName === product
      );
    }

    getProductRequesters(product) {
      let requesters = JSON.parse(localStorage.getItem('testRequests'));
      return requesters.filter(requester =>
        requester.productName === product
      );
    }

    addProductRequester(product, user) {
      this.setUserToProduct('testRequests', product, user);
    }

    addProductOwner(product, user) {
      this.setUserToProduct('ownerships', product, user);
    }

    setUserToProduct(mode, product, user) {
      let items = JSON.parse(localStorage.getItem(mode));
      items.push({
        productName: product,
        username: user
      });
      localStorage.setItem(mode, JSON.stringify(items));
    }

    userAlreadyRequestProduct(product, user) {
      let requesters = this.getProductRequesters(product);
      return (requesters.filter(requester =>
        requester.username === user
      ).length === 1);
    }

    userAlreadyHasProduct(product, user) {
      let owners = this.getProductOwners(product);
      return (owners.filter(owner =>
        owner.username === user
      ).length === 1);
    }
}
