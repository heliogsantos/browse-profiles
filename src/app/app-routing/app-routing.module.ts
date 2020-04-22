import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { ProfileModule } from './../profile/profile.module';
import { CardsComponent } from './../list-cards/cards/cards.component';
import { ProfileComponent } from './../profile/profile/profile.component';

export const routes: Routes = [
  { path: '', component:  CardsComponent},
  { path: 'profile', component:  ProfileComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ProfileModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
