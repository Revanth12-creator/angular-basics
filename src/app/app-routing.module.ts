import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { CantactComponent } from './cantact/cantact.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UerListComponent } from './uer-list/uer-list.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:CantactComponent},
  {path:'add-user', component:AdduserComponent},
  {path:'user', component:UerListComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
