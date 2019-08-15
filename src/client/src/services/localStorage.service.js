export const setData = (key, value) => localStorage.setItem(key, value);

export const getData = (key) => localStorage.getItem(key);

export const isToken = (key) => !!(localStorage.getItem(key) && JSON.parse(localStorage.getItem(key)).token);

export const removeToken = (key) => localStorage.removeItem('user');