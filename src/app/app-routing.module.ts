import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignINComponent } from './signs/sign-in/sign-in.component';
import { SignUPComponent } from './signs/sign-up/sign-up.component';
import { AboutUSComponent } from './navbarLinks/about-us/about-us.component';
import { HomeComponent } from './navbarLinks/home/home.component';
import { ProductsComponent } from './navbarLinks/products/products.component';
import { LaptopComponent } from './navbarLinks/laptop/laptop.component';
import { SmartwatchesComponent } from './navbarLinks/smartwatches/smartwatches.component';
import { SmartphonesComponent } from './navbarLinks/smartphones/smartphones.component';
import { HeadphonesComponent } from './navbarLinks/headphones/headphones.component';
import { DashboardComponent } from './navbarLinks/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'signIN', component: SignINComponent},
  {path: 'signUP', component: SignUPComponent},
  {path: 'aboutUS', component: AboutUSComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
    {path: 'laptop', component: LaptopComponent ,outlet:"product"},
    {path: 'smartwatch', component: SmartwatchesComponent ,outlet:"product"},
    {path: 'smartphone', component: SmartphonesComponent,outlet:"product"},
    {path: 'headphone', component: HeadphonesComponent,outlet:"product"},
    {path: 'dashboard', component: DashboardComponent}
  
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
