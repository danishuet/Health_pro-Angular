//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, TemplateRef,Input  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {UserDataService} from '../dataservice/dataservice.component';
import {UtilityServicePipe} from '../dataservice/utility.service.component';
import { Router } from "@angular/router";
import {DataService} from '../dataservice/utility.dataservice.component';
import { Validators,FormGroup,FormBuilder } from '@angular/forms';
import {ApiService} from '../dataservice/apiservice.component';
import { NgProgress } from 'ngx-progressbar';
import {Subscription} from "rxjs";
import {Observable} from 'rxjs/Observable';
import { FileDropModule, UploadFile, UploadEvent } from 'ngx-file-drop/lib/ngx-drop';
import {Configuration} from '../dataservice/app.constant.component';
import { debug } from 'util';

@Component({
  selector: 'app-layout-header-footer',
  templateUrl: './layout-header-footer.component.html',
  styleUrls: ['./layout-header-footer.component.css']
})
export class LayoutHeaderFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
