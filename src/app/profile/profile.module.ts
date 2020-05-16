import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
  {path: '', component: ProfileComponent}
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProfileComponent,
    RouterModule
  ]
})
export class ProfileModule { }
