import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OlMapComponent } from './ol-map/ol-map.component';
import { OlControlComponent } from './ol-control/ol-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OlMapComponent,
    OlControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
