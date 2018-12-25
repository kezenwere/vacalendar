import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  setObj(key: string, value: Object) {
    const objStr = JSON.stringify(value);
    this.setStr(key, objStr);
  }

  getObj(key: string): any {
    const objStr = this.getStr(key);
    if (objStr) {
      return JSON.parse(objStr);
    }

    return null;
  }

  setStr(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getStr(key: string): string {
    let str;
    try {
      str = localStorage.getItem(key);
    } catch (err) {
      console.error(err);
    }

    return str;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
