import { Component, OnInit } from '@angular/core';

import { ProfileService } from './../../../shared/services/profile.service';
import { Profile } from './../../../shared/models/profile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  profiles: Profile[];
  
  ngOnInit() {
   this.profileService.read().subscribe((profile: Profile[]) => this.profiles = profile);
  }

}
