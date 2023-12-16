import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { ElementComponent } from './list/element/element.component';
import { SearchComponent } from './list/search/search.component';
import { AddComponent } from './list/add/add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG, APP_SERVICE_CONF } from './AppConfig/appconfig.serve';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    ElementComponent,
    SearchComponent,
    AddComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: APP_SERVICE_CONF,
      useValue: APP_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
