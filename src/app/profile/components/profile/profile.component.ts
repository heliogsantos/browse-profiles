import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NetworksMock } from './../../../shared/mocks/networks.mock';
import { ProfileService } from './../../../shared/services/profile.service';
import { Profile } from './../../../shared/models/profile.model';

@Component({
  selector: 'app',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  readonly image = "/assets/images/avatar.jpg";
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

  networkAssembly = (networks: string, networkName: string) => this.createProfileNetwork(networks, NetworksMock[networkName]);

  createProfileNetwork = (profilesNetwork: string, iconNetwork: string) => {
    if(profilesNetwork) {
      this.profilesNetworks.push(
        {
          icon: iconNetwork,
          link: profilesNetwork
        }
      )
    }
  }

  ngOnInit() {
    this.profileService.readById(this.id).subscribe((profile: Profile) => {
      this.profile = profile;

      this.networkAssembly(this.profile.networks.facebookUrl, 'facebook');
      this.networkAssembly(this.profile.networks.linkeDInUrl, 'linkedin');
      this.networkAssembly(this.profile.networks.twitterUrl, 'twitter');
      this.networkAssembly(this.profile.networks.githubUrl, 'github');

    });

  }
}
