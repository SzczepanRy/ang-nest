import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { ElementComponent } from './list/element/element.component';

@NgModule({
  declarations: [AppComponent, NavComponent, ListComponent, ElementComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
