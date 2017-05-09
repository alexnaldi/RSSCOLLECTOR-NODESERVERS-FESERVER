import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

import { AppComponent }         from './app.component';
import { SidebarComponent }         from './shared/sidebar/sidebar.component';
import { TopbarComponent }         from './shared/topbar/topbar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }