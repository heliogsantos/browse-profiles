import { Component, OnInit } from '@angular/core';

import { ProfileService } from './../../../shared/services/profile.service';
import { Profile } from './../../../shared/models/profile.model';
import { ModalService } from './../../../shared/services/modal.service';
import { FilterModal } from './../../../shared/models/filter-modal.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profiles: Profile[];
  notProfilesFilter: boolean = false;

  constructor(
    private profileService: ProfileService,
    private modalService: ModalService
  ) { }

  filterAllProfiles = () => {
      this.readProfiles();
      this.notProfilesFilter = false;
  }

  readProfiles = () => {
    this.profileService.read().subscribe((profile) => {
      this.profiles = profile;
    });
  }

  ngOnInit() {
    
    this.modalService.filterProfile.subscribe((filterModal: FilterModal) => {
      this.notProfilesFilter = false;
      this.profileService.read().subscribe((profile) => {

        filterModal.contract.forEach(element => {
          this.profiles = profile.filter(item =>
            item.contract === element && item.area === filterModal.skill ||
            item.level === element && item.area === filterModal.skill
          );
        });

        if(!this.profiles.length) {
          this.notProfilesFilter = true;
        }
      });
    });

    this.readProfiles();
  }
}
