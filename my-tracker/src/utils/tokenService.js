function setToken(token) {
  //  setItem is a method of storage that will add key to storage object as in "token" and updates this key's value if it already exists.
  localStorage.setItem("token", token);
}

//  getItem is a method of storage that will return value of the key already stored

function getToken() {
  let token = localStorage.getItem("token");
  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1]));

    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      token = null;
    }
  }
  return token;
}

function getUserFromToken() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

function removeToken() {
  localStorage.removeItem("token");
}
export default {
  setToken,
  getToken,
  getUserFromToken,
  removeToken,
};
