import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../dataservice/apiservice.component';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NgProgress } from 'ngx-progressbar';
import {Configuration} from '../dataservice/app.constant.component';
import {DataService} from '../dataservice/utility.dataservice.component';

import {RegisterUserModel} from '../custom- models/user-models/user-model';
import {CommonUtilityComponent} from '../common-utility/common-utility.component';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  showValidationMessage: boolean;
  confirmPasswordMessage: boolean;
  registerForm: FormGroup;
  public strength: number;

  public _registerModel: RegisterUserModel = new RegisterUserModel();

  constructor(private _apiService: ApiService, private _dataSerivce: DataService, private _router: Router,
    private _urlService: Configuration, private _progressBar: NgProgress,
     private builder: FormBuilder, private util: CommonUtilityComponent) {

    }

  ngOnInit() {
      this.registerUserValidation();
  }

  PasswordStrength(stringVal) {
     this.strength = this.util.PasswordStrength(stringVal);
  }
  keyRestrict(e, validchars, casesensitives, onceevery, onceoneof): boolean {
     return this.util.keyRestrict(e, validchars, casesensitives, onceevery, onceoneof);
  }
  registerUserValidation() {
    this.registerForm = this.builder.group({
        'UserName': [null, Validators.required],
        'Password': [null, Validators.required],
        'ConfirmPassword': [null, Validators.required],
        'FirstName': [null, Validators.required],
        'LastName': [null, Validators.required],
        'Email': [null, Validators.required]
    });
  }
  registerUser() {
    this.confirmPasswordMessage = false;
    if (this.registerForm.valid) {
      this.confirmPasswordMessage = false;
      this.showValidationMessage = false;
      if (this._registerModel.Password.trim() !== this._registerModel.ConfirmPassword.trim()) {
        this.confirmPasswordMessage = true;
        this._progressBar.done();
        // no `return false;` here
      }
      this._apiService.postCall('Account/Register', this._registerModel).subscribe(
        resp => { console.log(resp); },
        error => { console.log(error); },
        () => { console.log('complete'); }
      );
    } else {
      this.showValidationMessage = true;
      return false;
    }
  }
}
