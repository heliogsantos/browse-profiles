import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data-service';
import { FilterMock } from '../../mocks/filter.mock';
import { StopPropagation } from '../../services/stop-propagation';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  renderModal = false;
  modalSearch = new FilterMock();
  selectprofiles = this.modalSearch.selectProfiles();
  filters = this.modalSearch.listButtons();

  constructor(
    private dataService: DataService, 
    private stopPropagation: StopPropagation
  ) { }

  filterSearch = (evt: any) => evt.target.classList.add("active-filter");

  closeModalSearch = () => this.renderModal = false;

  stopPropagations = (event: object) => this.stopPropagation.stop(<HTMLTextAreaElement>event);

  ngOnInit() {
    this.dataService.modalSearch.subscribe((render: boolean) => this.renderModal = render);
  }
}
