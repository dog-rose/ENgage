import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './navbarLinks/home/home.component';
import { ProductsComponent } from './navbarLinks/products/products.component';
import { AboutUSComponent } from './navbarLinks/about-us/about-us.component';
import { LaptopComponent } from './navbarLinks/laptop/laptop.component';
import { SmartwatchesComponent } from './navbarLinks/smartwatches/smartwatches.component';
import { SmartphonesComponent } from './navbarLinks/smartphones/smartphones.component';
import { HeadphonesComponent } from './navbarLinks/headphones/headphones.component';
import { DashboardComponent } from './navbarLinks/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    AboutUSComponent,
    LaptopComponent,
    SmartwatchesComponent,
    SmartphonesComponent,
    HeadphonesComponent,
    DashboardComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
