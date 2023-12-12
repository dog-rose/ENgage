import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignINComponent } from './signs/sign-in/sign-in.component';
import { SignUPComponent } from './signs/sign-up/sign-up.component';
import { AboutUSComponent } from './navbarLinks/about-us/about-us.component';

const routes: Routes = [
  {path: 'signIN', component: SignINComponent},
  {path: 'signUP', component: SignUPComponent},
  {path: 'aboutUS', component: AboutUSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
