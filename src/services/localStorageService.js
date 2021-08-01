import { LOCAL_STORAGE_APP } from "constants/localStorage";

class LocalStorageService {
    constructor() {
        this.init = this.init.bind(this);
        this.getItem = this.getItem.bind(this);
        this.setItem = this.setItem.bind(this);
    }

    init() {
        return this.getItem(LOCAL_STORAGE_APP);
    }

    getItem(key) {
        return JSON.parse(localStorage.getItem(key) || "{}");
    }

    setItem(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }

    insertObjectField(key, fields) {
        return this.setItem(key, { ...this.getItem(key), ...fields });
    }
}

export const localStorageService = new LocalStorageService();
