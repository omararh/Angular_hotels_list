import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HotelListComponant } from './hotel-list/hotel-list.componant';
import { StarComponant } from './shared/componant/stars.component';
import { registerLocaleData } from '@angular/common';
import localefr from '@angular/common/locales/fr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HotelDetailsComponent } from './hotel-list/hotel-details/hotel-details.component'
import { RouterModule } from '@angular/router';

registerLocaleData(localefr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponant,
    StarComponant,
    HomeComponent,
    HotelDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'home', component : HomeComponent},
      {path : '', redirectTo : 'home', pathMatch : 'full'},
      {path : 'hotels', component : HotelListComponant},
      {path : 'hotels/:id', component : HotelDetailsComponent},
      {path : '**', redirectTo : 'home', pathMatch : 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent] //Ici on met le main componant du Module
})
export class AppModule { }
