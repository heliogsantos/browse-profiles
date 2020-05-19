import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NetworksMock } from './../../../shared/mocks/networks.mock';
import { ProfileService } from './../../../shared/services/profile.service';
import { Profile, ProfileNetworks } from './../../../shared/models/profile.model';

@Component({
  selector: 'app',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  readonly image = "/assets/images/avatar.jpg";
  networksMock = new NetworksMock().getNetworks;
  visible = false;
  copy = false;
  profile: Profile;
  id = this.activeRouter.snapshot.paramMap.get('id');

  profilesNetworks = [];

  constructor(
    private profileService: ProfileService,
    private activeRouter: ActivatedRoute
  ) { }

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

  createNetworks = (profilesNetworks, iconNetwork: object) => {

    this.profilesNetworks.push(
      {
        icon: Object.values(iconNetwork[0])[0],
        link: profilesNetworks,
      }
    )
  }

  addUrlForNetwork = (networks: ProfileNetworks) => {
    if(networks.facebookUrl) {
      this.createNetworks(networks.facebookUrl, this.networksMock.filter(item => item.facebook));
    }
    if(networks.linkeDInUrl) {
      this.createNetworks(networks.linkeDInUrl, this.networksMock.filter(item => item.linkedin));
    }
    if(networks.twitterUrl) {
      this.createNetworks(networks.twitterUrl, this.networksMock.filter(item => item.twitter));
    }
    if(networks.githubUrl) {
      this.createNetworks(networks.githubUrl, this.networksMock.filter(item => item.github));
    }
  }

  ngOnInit() {
    this.profileService.readById(this.id).subscribe((profile: Profile) => {
      this.profile = profile;
      this.addUrlForNetwork(this.profile.networks)
    });
  }
}
