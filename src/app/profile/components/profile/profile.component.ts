import { Component, OnInit } from '@angular/core';

import { NetworksMock } from './../../../shared/mocks/networks.mock';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  readonly image = "/assets/images/avatar.jpg";
  networks = new NetworksMock().getNetworks;
  visible = false;
  copy = false;

  constructor() { }

  displayTooltip = () => this.visible = true;
 
  hideTooltip = () => {
    this.visible = false;
    this.copy = false;
  }

  copyEmail = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    email.select();
    document.execCommand("copy");
    this.copy = true;
  }

  ngOnInit() {
  }
}
