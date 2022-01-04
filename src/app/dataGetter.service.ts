import {Injectable, NgModule} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class HttpService {

  constructor(public http: HttpClient) {
  }

  getData (count: number) {
    return this.http.get(`https://random-data-api.com/api/company/random_company?size=${count}`)
  }
}
