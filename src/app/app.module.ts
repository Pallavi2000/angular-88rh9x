import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule,Routes } from '@angular/router';
import { IplService } from './ipl.service';
const routes:Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"team",
    component:TeamComponent
  }

]

@NgModule({
  imports: [ 
    BrowserModule, FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule ],
  declarations: [ AppComponent,HeaderComponent,HomeComponent,TeamComponent],
  bootstrap:    [ AppComponent ],
  providers: [IplService]
})
export class AppModule {

 }
