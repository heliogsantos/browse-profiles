import { NetworksMock } from './../../shared/mocks/networks.mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  image = "/assets/images/avatar.jpg";

  networks = new NetworksMock().getNetworks;

  visible = false;
  copy = false;

  displayTooltip() {
    this.visible = true;
  }
 
  hideTooltip() {
    this.visible = false;
    this.copy = false;
  }

  copyEmail() {
    const email = document.getElementById('email') as HTMLInputElement;
    email.select();
    document.execCommand("copy");
    this.copy = true;
  }

  ngOnInit() {
  }
}
