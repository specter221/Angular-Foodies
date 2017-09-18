import { SearchService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { FavComponent } from './fav/fav.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavComponent,
    FavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
