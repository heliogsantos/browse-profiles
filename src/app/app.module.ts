import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { CoreModule } from './core/core.module';
import { ProfileComponent } from './modules/profile/components/profile/profile.component';
import { HomeComponent } from './modules/home/components/home/home.component';

export const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CoreModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
