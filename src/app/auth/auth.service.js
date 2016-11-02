export default class AuthService {
  constructor() {
    this.currentUser = "Bob";
    this.users = require('../json/users.json');
  }

  getConnectedUser() {
    return this.currentUser;
  }

  logIn(userName) {
    if (this.userExists(userName)) {
      this.currentUser = userName;
      return this.currentUser;
    }
    return false;
  }

  logOut() {
    this.currentUser = null;
  }

  registerUser(userData) {
    if (!this.userExists(userData.username)) {
      this.users.push(userData);
      return userData.username;
    }
    return false;
  }

  userExists(userName) {
    var userExists = this.users.filter((user) => user.username === userName);
    return (userExists.length === 1);
  }

  getUserInfos(userName) {
    let userInfos = this.users.filter((user) => user.username === userName);
    return userInfos[0];
  }

  getUserProp(userName, prop) {
    return this.getUserInfos(userName)[prop];
  }
}
