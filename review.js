const TOKEN_KEY = "JWT";

export const setToken = (token) => localStorage.setItem(TOKEN_KEY,token);
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
}

export const removeToken = () => {
  return localStorage.removeItem(TOKEN_KEY);
}