export default class AuthService {
  constructor() {
    this.currentUser = null;
  }

  getConnectedUser() {
    return localStorage.getItem('connectedUser');
  }

  logIn(userName) {
    if (this.userExists(userName)) {
      localStorage.setItem('connectedUser', userName);
      return userName;
    }
    return false;
  }

  logOut() {
    localStorage.removeItem('connectedUser');
  }

  registerUser(userData) {
    if (!this.userExists(userData.username)) {
      let users = JSON.parse(localStorage.getItem('users'));
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));
      return userData.username;
    }
    return false;
  }

  userExists(userName) {
    let users = JSON.parse(localStorage.getItem('users'))
    var userExists = users.filter((user) => user.username === userName);
    return (userExists.length === 1);
  }

  getUserInfos(userName) {
    let users = JSON.parse(localStorage.getItem('users'))
    let userInfos = users.filter((user) => user.username === userName);
    return userInfos[0];
  }

  getUserProp(userName, prop) {
    return this.getUserInfos(userName)[prop];
  }
}
