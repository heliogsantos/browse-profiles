import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [RouterModule, CommonModule],
  exports: [ProfileComponent]
})
export class ProfileModule { }
