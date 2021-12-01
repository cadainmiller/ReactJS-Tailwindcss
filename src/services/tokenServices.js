// var jwt = require("jsonwebtoken");

const dummyToken = {
  role: "Admin",
  id: "60f532903ded77001064ae92",
};

const TokenService = {
  createDummyToken: () => {
    var token = JSON.stringify(dummyToken);
    localStorage.setItem("token", token);
    return token;
  },

  createToken: (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    return userToken;
  },

  getToken: () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  },

  isAdmin: () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    if (userToken?.role === "Admin") {
      return true;
    }
    return false;
  },

  removeToken: () => {
    localStorage.removeItem("token");
  },
};

export default TokenService;
