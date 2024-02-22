import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { AuthComponent } from './auth/auth.component';
import { HeroComponent } from './home-container/hero/hero.component';
import { SuccessComponent } from './home-container/success/success.component';
import { CloudComponent } from './home-container/cloud/cloud.component';
import { WhatIsComponent } from './home-container/what-is/what-is.component';
import { ToolsComponent } from './home-container/tools/tools.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeContainerComponent,
    AuthComponent,
    HeroComponent,
    SuccessComponent,
    CloudComponent,
    WhatIsComponent,
    ToolsComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
