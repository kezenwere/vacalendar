import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class CustomCookieService {

  constructor(private cookieService: CookieService) {
  }

  /**
   * @param name Cookie name
   * @returns check
   */
  check(name: string): boolean {
    return this.cookieService.check(name);
  }

  /**
   * @param name Cookie name
   * @returns get
   */
  get(name: string): string {
    return <string> this.cookieService.get(name);
  }

  getObj(name: string): object {
    const str = this.get(name);
    return str ? JSON.parse(str) : str;
  }

  /**
   * @returns Obj
   */
  getAll(): {} {
    return this.cookieService.getAll();
  }

  /**
   * @param name    Cookie name
   * @param value   Cookie value
   * @param expires Number of days until the cookies expires or an actual `Date`
   * @param path    Cookie path
   * @param domain  Cookie domain
   * @param secure  Secure flag
   */
  set(name: string, value: string, expires?: number | Date, path?: string, domain?: string, secure?: boolean): void {
    this.delete(name, path, domain); // Delete if exist
    return this.cookieService.set(name, value, expires, path, domain, secure);
  }

  setObj(name: string, value: object, expires?: number | Date, path?: string, domain?: string, secure?: boolean): void {
    return this.set(name, JSON.stringify(value), expires, path, domain, secure);
  }

  /**
   * @param name   Cookie name
   * @param path   Cookie path
   * @param domain Cookie domain
   */
  delete(name: string, path?: string, domain?: string): void {
    return this.cookieService.delete(name, path, domain);
  }

  /**
   * @param path   Cookie path
   * @param domain Cookie domain
   */
  deleteAll(path?: string, domain?: string): void {
    return this.cookieService.deleteAll(path, domain);
  }
}
