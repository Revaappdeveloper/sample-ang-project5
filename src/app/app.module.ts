import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import {Routes, RouterModule} from '@angular/router';
  

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'service', component:ServiceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
