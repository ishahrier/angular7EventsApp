import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMainComponent } from './app.component';
import { PersonListerComponent } from './persons/person-lister.component';
import { PersonViewComponent } from './persons/person-view.component';
import { NavHeaderComponent } from './nav/nav-header.component';

@NgModule({
  imports: [
    BrowserModule
  ],  
  declarations: [
    AppMainComponent,
    PersonListerComponent,
    PersonViewComponent,
    NavHeaderComponent
  ],
  bootstrap: [AppMainComponent]
})
export class AppModule { }
