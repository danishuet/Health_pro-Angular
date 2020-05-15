import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../dataservice/apiservice.component';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NgProgress } from 'ngx-progressbar';
import {Configuration} from '../dataservice/app.constant.component';
import {DataService} from '../dataservice/utility.dataservice.component';

import {RegisterUserModel} from '../custom- models/user-models/user-model';
import {CommonUtilityComponent} from '../common-utility/common-utility.component';
import { ProfessionalProfile } from '../custom- models/Professional_profile';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.css']
})
export class ProfessionalProfileComponent implements OnInit {
  showValidationMessage: boolean;

  ProfessionalProfile: FormGroup;
  public strength: number;

  public _ProfessionalProfile: ProfessionalProfile = new ProfessionalProfile();
  public _categoryList : any[];
  public _SubCategoryList: any[];
  public _Cities:any[];
  public _State:any[];
  
  constructor(private _apiService: ApiService, private _dataSerivce: DataService, private _router: Router,
    private _urlService: Configuration, private _progressBar: NgProgress,
     private builder: FormBuilder, private util: CommonUtilityComponent) {

    }


  ngOnInit() {
    this.getAllCategories();
   this.getAllCities();
   this.registerUserValidation();
  }
 
 keyRestrict(e, validchars, casesensitives, onceevery, onceoneof): boolean {
    return this.util.keyRestrict(e, validchars, casesensitives, onceevery, onceoneof);
 }
 registerUserValidation() {
   this.ProfessionalProfile = this.builder.group({
       'Address': [null, Validators.required],
      //  'Company_Name': [null, Validators.required],
        'Address2': [null, Validators.required],
       'Zip_code': [null, Validators.required],
       'State_Id': [null, Validators.required],
       'City': [null, Validators.required],
       'Phone':[null,Validators.required],
        'Mobile':[null,Validators.required],
        'Website':[null,Validators.required],
        'Professional_Category':[null,Validators.required],
        'Professional_SubCategory':[null,Validators.required],
      //  'Membership_subscribed':[null,Validators.required],
      //category
      //subcategory
   });
 }
 getAllCategories()
 {
  
    

    this._apiService.getAll('Utility/GetProfesisonalCategories').subscribe(
      resp => {
        this._categoryList=resp["result"]; 
      console.log(this._categoryList);
      },
     error => { console.log(error); },
      () => { console.log('complete'); }
    );
  } 
  getAllCities()
  {
   
     
 
     this._apiService.getAll('Utility/Cities').subscribe(
       resp => {
         this._Cities=resp["result"]; 
       console.log(this._Cities);
       },
      error => { console.log(error); },
       () => { console.log('complete'); }
     );
   } 
  getAllSubCategories()
  {
     this._apiService.getSingle('Utility/GetProfesisonalSubCategories',this._ProfessionalProfile.Professional_Category).subscribe(
       resp => {
         this._SubCategoryList=resp["result"]; 
       console.log(this._SubCategoryList);
       },
       error => { console.log(error); },
       () => { console.log('complete'); }
     );
   } 
   getAllStates()
   {
      this._apiService.getSingle('Utility/GetStatesOfCities',this._ProfessionalProfile.City).subscribe(
        resp => {
          this._State=resp["result"]; 
        console.log(this._State);
        },
        error => { console.log(error); },
        () => { console.log('complete'); }
      );
    } 

 registerUser() {
  
  if (this.ProfessionalProfile.valid) {
   
    this.showValidationMessage = false;

    this._apiService.postCall('Profile/ProfessionalProfile', this._ProfessionalProfile).subscribe(
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
