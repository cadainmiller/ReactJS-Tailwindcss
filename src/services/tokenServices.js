const TokenService = {
  createToken: (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    return userToken;
  },
  getToken: () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    console.log(userToken?.token);
    return userToken?.token;
  },
  removeToken: () => {
    localStorage.removeItem("token");
  },
};

export default TokenService;
