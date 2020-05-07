import 'rxjs/add/operator/map';
import {ApiService} from './apiservice.component';
import { Injectable} from '@angular/core';
import {DataService} from '../dataservice/utility.dataservice.component';


@Injectable()
export class UserDataService {
public _userInitials: any;
constructor(private _apiService: ApiService, private _dataService: DataService) { }


getinformationUsers() {
    return new Promise((resolve, reject) => {
        this._apiService.getAll('User/UserInformation')
          .subscribe(
                 data => {
                     resolve(data);
              },
                error => {
                     localStorage.clear();
                     this._dataService.setUserStatus(false);
                     reject(error);
                },
            );
      });

}

userLogin(usermodel: any) {
    return new Promise((resolve, reject) => {
        this._apiService
        .loginUser('token', usermodel)
        .subscribe(resp => {
            localStorage.setItem('access_token', resp.access_token);
          resolve(resp);
        },
         error => {
          reject(error);
         });
    });
}

}
