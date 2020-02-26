import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent}
  ])
   ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
