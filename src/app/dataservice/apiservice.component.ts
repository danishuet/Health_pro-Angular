import 'rxjs/add/operator/map';
import { HttpErrorResponse, HttpClient, HttpEvent,
  HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {DataService} from './utility.dataservice.component';
import {Router} from '@angular/router';
import { Configuration } from './app.constant.component';



@Injectable()
export class ApiService {

  public actionUrl: string;
  public loginUrl: string;

  constructor(private http: HttpClient,
      private _configuration: Configuration, private router: Router) {
      this.actionUrl = _configuration.ServerWithApiUrl;
      this.loginUrl = _configuration.Server + 'api/';
  }

  public loginUser(apiUrl: any, itemName: any): Observable<any> {
    const _body = 'userName=' + itemName.userName + '&password=' + itemName.password + '&grant_type=password';
    const _options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(this.loginUrl + apiUrl, _body, _options);
  }
  public getLocaion<T>(apiUrl: any): Observable<T> {
    return this.http.get<T>(apiUrl);
  }
  public getAll(apiUrl: any): Observable<any> {
    const _options = { headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    )};
      return this.http.get(this.actionUrl + apiUrl, _options);
  }
  public postCall(apiUrl: any, itemName: any): Observable<any> {
    const _options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    )};
    const url = this.actionUrl + apiUrl;
    return this.http.post(url, itemName, _options);
  }
  public getSingle(apiUrl: any, param: any): Observable<any> {
    const _options = { headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    )};
    return this.http.get(this.actionUrl + apiUrl + '/' + param, _options);
  }
  public getMultipleId(apiUrl: any, param: any): Observable<any> {
    const _options = { headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    )};
    return this.http.get(this.actionUrl + apiUrl + '/' + param, _options);
  }
  public update(apiUrl: any, param: any, itemName: any): Observable<any> {
    const _options = { headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    )};
      return this.http
          .put(this.actionUrl + apiUrl + '/' + param, itemName, _options);
  }

  public delete(apiUrl: any, param: any): Observable<any> {
    const _options = { headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    )};
      return this.http.delete(this.actionUrl + apiUrl + '/' + param, _options);
  }


}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private router: Router, private _utilDataservice: DataService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return next.handle(req);
      // .catch(err =>
      //   this.handleError(err)
      //   );
    }


    private handleError(err: HttpErrorResponse): Observable<any> {
      // tslint:disable-next-line: no-debugger
      debugger;
      console.log(err);
      if (err.status === 401) {
          localStorage.clear();
          this.router.navigateByUrl(`/login`);
          return Observable.of(err.message);
      }else if (err.status === 403) {
        this._utilDataservice.setunAuthorizedAttr(true);
      }
      // handle your auth error or rethrow
      return Observable.throw(err);
  }

}
