import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    RouterModule, 
    CommonModule,
    SharedModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
