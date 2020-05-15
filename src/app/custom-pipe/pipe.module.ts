import { NgModule }      from '@angular/core';
import { TrimPipe,RoundFigurePipe,GetFirstLetterPipe,UtilityServicePipe,GetHoursPipe,SafePipe,SearchPipe } from '../dataservice/utility.service.component';


 @NgModule({
     imports:        [],
     declarations:   [TrimPipe,RoundFigurePipe,GetFirstLetterPipe,UtilityServicePipe,GetHoursPipe,SafePipe,SearchPipe],
     exports:        [TrimPipe,RoundFigurePipe,GetFirstLetterPipe,UtilityServicePipe,GetHoursPipe,SafePipe,SearchPipe],
 })

 export class PipeModule {

   static forRoot(): ModuleWithProviders<PipeModule> {
    return {
        ngModule: PipeModule,
        providers: [],
    };
}
 } 