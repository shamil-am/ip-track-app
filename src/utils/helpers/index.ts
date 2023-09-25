import CryptoJS from 'crypto-js';

export const encryptData = (value: string) =>
    CryptoJS.AES.encrypt(value, import.meta.env.VITE_TOKEN_SALT_KEY).toString();

export const decryptData = (value: string) => {
    const bytes = CryptoJS.AES.decrypt(value, import.meta.env.VITE_TOKEN_SALT_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    return decryptedData;
};

export const getTokenExpiredTime = (minutes: number) => {
    const now = new Date();
    return new Date(now.getTime() + minutes * 60000);
};
