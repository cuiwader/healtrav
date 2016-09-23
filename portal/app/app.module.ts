import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { routing, appRoutingProviders }  from './app.routing';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        HomeModule,
        AboutModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
