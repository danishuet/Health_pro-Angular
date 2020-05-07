import { Component, OnInit, ViewChild, TemplateRef, ElementRef,Renderer2,Input } from '@angular/core';
import {UserDataService} from '../dataservice/dataservice.component';
import {ApiService} from '../dataservice/apiservice.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Configuration } from '../dataservice/app.constant.component';
import { NgProgress } from 'ngx-progressbar';
import 'rxjs/add/observable/interval';
import {Subscription} from "rxjs";
import {DataService} from '../dataservice/utility.dataservice.component';

import {Observable} from 'rxjs/Observable';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
declare var google;

export class item
{
  url:string;
  name:string;
  city:string;
  constructor(url:string,name:string,city:string)
  {
    this.url=url;
    this.name=name;
    this.city=city;
  }
}
export class category
{
  filter:boolean;
  name:string;
  cssClass:string;
  constructor(filter:boolean, name:string, cssClass:string)
  {
    this.filter=filter;
    this.name=name;
    this.cssClass=cssClass;
  }
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor() {

   }

  ngOnInit() {
  }



}
