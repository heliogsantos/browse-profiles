import { Component, OnInit } from '@angular/core';

import { NetworksMock } from './../../../shared/mocks/networks.mock';
import { ProfileService } from './../../../shared/services/profile.service';

@Component({
  selector: 'app',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  readonly image = "/assets/images/avatar.jpg";
  networks = new NetworksMock().getNetworks;
  visible = false;
  copy = false;

  constructor(
    private profileService: ProfileService
  ) { }

  displayTooltip = () => this.visible = true;
 
  hideTooltip = () => {
    this.visible = false;
    this.copy = false;
    console.log("Ok 1")
  }

  copyEmail = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    email.select();
    document.execCommand("copy");
    this.copy = true;
  }

  ngOnInit() {
    console.log("Ok")
    this.profileService.readById('1').subscribe((profile) => {
      console.log(profile)
    })
  }
}
