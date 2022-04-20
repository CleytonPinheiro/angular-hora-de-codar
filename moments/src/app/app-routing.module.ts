import { AboutComponent } from './componets/pages/about/about.component';
import { HomeComponent } from './componets/pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: '', component: HomeComponent},
 { path: 'about', component: AboutComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
