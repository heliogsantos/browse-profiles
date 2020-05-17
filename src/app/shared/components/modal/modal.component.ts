import { Component, OnInit } from '@angular/core';

import { ModalService } from './../../services/modal.service';
import { FilterMock } from '../../mocks/filter.mock';

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

  constructor(private modalService: ModalService) { }

  filterSearch = (evt: any) => evt.target.classList.add("active-filter");

  closeModalSearch = () => this.renderModal = false;

  stopPropagations = event => event.stopPropagation();

  ngOnInit() {
    this.modalService.modalSearch.subscribe((render: boolean) => this.renderModal = render);
  }
}
