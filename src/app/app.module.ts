import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './app.component';
import { PersonListerComponent } from './persons/person-lister.component';
import { PersonViewComponent } from './persons/person-view.component';

@NgModule({
  imports: [
    BrowserModule
  ],  
  declarations: [
    EventsAppComponent,
    PersonListerComponent,
    PersonViewComponent
  ],
  bootstrap: [PersonListerComponent]
})
export class AppModule { }
