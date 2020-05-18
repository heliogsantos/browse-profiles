import { Component, OnInit } from '@angular/core';

import { ProfileService } from './../../../shared/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  
  profiles: any;
  
  ngOnInit() {
   this.profileService.read().subscribe((profile: any) => this.profiles = profile);
  }

}
