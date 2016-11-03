import * as Constants from '../../constants'

export default class UsersProductsService {
  constructor() {
    this.ownerships = require('../../data/ownerships.json');
    this.requesters = require('../../data/testRequests.json');
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
    let owners = this.getUsersOfProduct(Constants.OWNERSHIPS_MODE, product);
    let requesters = this.getUsersOfProduct(Constants.REQUESTERS_MODE, product);
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
