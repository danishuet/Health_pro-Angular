import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RatingModule, CarouselModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import {CountDown} from 'ng2-date-countdown';
import { AuthguardComponent } from './authguard/authguard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ApiService, CustomInterceptor} from './dataservice/apiservice.component';
import {UserDataService} from './dataservice/dataservice.component';
import {Configuration} from './dataservice/app.constant.component';
import {DataService} from './dataservice/utility.dataservice.component';
import { NgProgressModule } from 'ngx-progressbar';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { NgxLoadingModule } from 'ngx-loading';
import { NotifierModule } from 'angular-notifier';

import {PipeModule} from './custom-pipe/pipe.module';
import {UtilityServicePipe} from './dataservice/utility.service.component';


import { HttpModule } from '@angular/http';
import { FileDropModule } from 'ngx-file-drop/lib/ngx-drop';
import { ImageUploadModule } from 'angular2-image-upload';



import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AgmCoreModule, CircleManager, GoogleMapsAPIWrapper } from '@agm/core';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { CommonUtilityComponent } from './common-utility/common-utility.component';
import { ProfessionalProfileComponent } from './professional-profile/professional-profile.component';
import { LayoutHeaderFooterComponent } from './layout-header-footer/layout-header-footer.component';
import { SiteLayoutHeadfootComponent } from './site-layout-headfoot/site-layout-headfoot.component';


export function authInterceptorFactory(router: Router, dataService: DataService) {
  return new CustomInterceptor(router, dataService);
}


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomePageComponent,
    CountDown,
    SiteLayoutComponent,
    LoginLayoutComponent,
    RegisterUserComponent,
    FooterComponentComponent,
    ProfessionalProfileComponent,
    LayoutHeaderFooterComponent,
    SiteLayoutHeadfootComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    NotifierModule,
    RatingModule.forRoot(),
    StarRatingModule.forRoot(),
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKB-LybyzdQ_0cxBS0WHefVUW1o7Bd2u4'
    }),
    FormsModule,
    HttpModule,
    FileDropModule,
    ImageUploadModule.forRoot(),
    HttpClientModule,
    InfiniteScrollModule,
    PipeModule.forRoot(),
    NgProgressModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    PaginationModule.forRoot()

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: authInterceptorFactory,
      multi: true,
      deps: [Router, DataService]
    }
    , AuthguardComponent
    , ApiService
    , Configuration
    , CustomInterceptor
    , UserDataService
    , UtilityServicePipe
    , DataService
    , CircleManager
    , CommonUtilityComponent
    , GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
