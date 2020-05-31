import { EventEmitter, Injectable } from '@angular/core';

import { FilterModal } from './../models/filter-modal.module';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalSearch = new EventEmitter<boolean>();
  filterProfile = new EventEmitter<FilterModal>();

  constructor() {}
      
  openModalSearch = (value: boolean) => this.modalSearch.emit(value);

  filterProfiles = (profiles: FilterModal) => this.filterProfile.emit(profiles);

}
