import { Component } from '@angular/core';
import {NotifierService} from 'angular-notifier'

declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private notifierService : NotifierService){
  }

  ngOnInit() {}
  
}
