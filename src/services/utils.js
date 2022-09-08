const AUTH = 'GCUSER';

export const auth = {
  login(authData) {
    localStorage.setItem(AUTH, JSON.stringify(authData));
  },
  logout() {
    localStorage.removeItem(AUTH);
  },
  isAuthenticated() {
    return localStorage.getItem(AUTH) !== null ? true : false;
  },
  getToken() {
    const { token } = JSON.parse(localStorage.getItem(AUTH));
    return token;
  },
  getId() {
    const { userId } = JSON.parse(localStorage.getItem(AUTH));
    return userId;
  },
};
