// 3个方法 专门用来操作cookie

const key = 'love-wall';
export const setCookie = (cookie) => {
    localStorage.setItem(key, cookie);
};

export const getCookie = () => localStorage.getItem(key);

export const removeCookie = () => {
    localStorage.removeItem(key);
};