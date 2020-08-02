export const storeJsonData = (data, key = "notes-db") => localStorage.setItem(key, JSON.stringify(data));

export const isValidArray = (value) => Array.isArray(value);

export const isValidValue = (value) => value !== null && value !== undefined;

export const getJsonData = (key = "notes-db") => {

    const data = localStorage.getItem(key);

    if(isValidValue(data) !== true){
        return null;
    }

    return JSON.parse(data);
};