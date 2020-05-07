import { Injectable} from '@angular/core';
import { CanActivate, Router } from "@angular/router";


@Injectable()
export class AuthguardComponent implements CanActivate {

    constructor(protected router: Router) {}

     canActivate() {
        if (localStorage.getItem('access_token')) {
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        //this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}