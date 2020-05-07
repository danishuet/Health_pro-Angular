import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
     // public Server = 'http://124.109.50.82:3041/'; // ---- UAT
     // public Server = 'http://offey.ae:4545/'; // ---- Production Build
        public Server = 'http://localhost:20863/'; // ---- Local
    public ApiUrl = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
