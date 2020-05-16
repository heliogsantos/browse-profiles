import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data-service';
import { FilterMock } from '../../mocks/filter-search.mock';
import { StopPropagation } from '../../services/stop-propagation';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private dataService: DataService, private stopPropagation: StopPropagation) { }

  modalSearch = new FilterMock();

   selectprofiles = this.modalSearch.selectProfiles();
   filters = this.modalSearch.listButtons();

  openModal = false;

  removeActive() {
    const lists = Array.from(document.querySelectorAll('.box ul li'));
    for(let list of lists) list.classList.remove('active-filter');
  }

  filterSearch(filter, {target} = (event)) {
   this.removeActive();
    (<HTMLTextAreaElement>target).classList.add("active-filter");
  }

  closeModalSearch() {
    this.openModal = false;
  }

  stopPropagations(event) {
    this.stopPropagation.stop(event);
  }

  ngOnInit() {
    this.dataService.modalSearch.subscribe(open => this.openModal = open);
  }
}
