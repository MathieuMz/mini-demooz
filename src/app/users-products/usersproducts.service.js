export default class UsersProductsService {
  constructor() {
    this.ownerships = require('../json/ownerships.json');
    this.requesters = require('../json/testRequests.json');
  }

  initProducts(productList) {
    return productList.forEach(product => {
      product.owners = this.getProductOwners(product.name);
      product.requesters = this.getProductRequesters(product.name);
    });
  }

  getUsersOfProduct(mode, product) {
    return this[mode].filter(user =>
      user.productName === product
    );
  }

  addUserToProduct(mode, product, user) {
    return this[mode].push({
      productName: product,
      username: user
    });
  }

  userAlreadyInProduct(product, user) {
    let owners = this.getUsersOfProduct("ownerships", product);
    let requesters = this.getUsersOfProduct("requesters", product);
    return ((
      requesters.filter(requester =>
        requester.username === user
      ).length === 1) ||
      (owners.filter(owner =>
        owner.username === user
      ).length === 1)
    );
  }
}
