// 3个方法 专门用来操作cookie

// const key = 'love-wall';
export const setCookie = (key, cookie) => {
    localStorage.setItem(key, cookie);
};

export const getCookie = (key) => localStorage.getItem(key);

export const removeCookie = (key) => {
    localStorage.removeItem(key);
};