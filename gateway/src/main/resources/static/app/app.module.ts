import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, BrowserXhr } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { UserService } from './shared/user.service';
import { HomeModule } from './home/home.module';
import { UserManagementModule } from './user-management/user-management.module';

@Injectable()
export class CorsBrowserXhr extends BrowserXhr {
    constructor() {
        super();
    }

    build(): any {
        let xhr:XMLHttpRequest = super.build();
        xhr.withCredentials = true;
        return <any>(xhr);
    }
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        HomeModule,
        UserManagementModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: BrowserXhr, useClass:CorsBrowserXhr },
        appRoutingProviders,
        UserService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
