import CryptoJS from 'crypto-js';

export const setToLocalStorage = (key: string, value: string) => {
    const encryptedToken = CryptoJS.AES.encrypt(value, import.meta.env.VITE_TOKEN_SALT_KEY).toString();
    localStorage.setItem(key, encryptedToken);
};

export const getFromLocalStorage = (key: string) => {
    const encryptedToken = localStorage.getItem(key);

    if (encryptedToken) {
        const bytes = CryptoJS.AES.decrypt(encryptedToken, import.meta.env.VITE_TOKEN_SALT_KEY);
        const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);

        return decryptedToken;
    }

    return null;
};
