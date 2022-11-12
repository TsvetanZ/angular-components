import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  //Template specific items
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule  // this includes VommonModule
  ],
  providers: [], // used for DI (dependes injection) 
  bootstrap: [AppComponent]
})
export class AppModule { }
