import { NgModule } from '@angular/core';
// import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {SiteLayoutComponent} from './site-layout/site-layout.component';
import {LoginLayoutComponent} from './login-layout/login-layout.component';
import {AuthguardComponent} from './authguard/authguard.component';
import  {SiteLayoutHeadfootComponent } from './site-layout-headfoot/site-layout-headfoot.component'

// Import custom Components
import {HomePageComponent} from './home-page/home-page.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {ProfessionalProfileComponent} from './professional-profile/professional-profile.component';
const routes: Routes =[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {
      path :'', component : SiteLayoutComponent,
        children:[
          {path:'home', component:HomePageComponent},
          {path:'register',component:RegisterUserComponent},
        //  {path:'profile',component:ProfessionalProfileComponent}
        ]
    },
    {
      path :'', component : SiteLayoutHeadfootComponent,
        children:[
         
          {path:'profile',component:ProfessionalProfileComponent}
        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
