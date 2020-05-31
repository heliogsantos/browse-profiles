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
  modal= new FilterMock();
  selectprofiles = this.modal.selectProfiles();
  filters = this.modal.listButtons();
  listFilter: string[] = [];
  select: string;

  constructor(private modalService: ModalService) { }

  active = (event: HTMLElement, value: string) => {
    event.classList.toggle("active-filter");
    const index = this.listFilter.indexOf(value);
    this.remove(index, value);
    this.listFilter.push(value); 
    this.remove(index, value);
  };

  remove(index: number, value: string) {
    for(let list of this.listFilter) {
      if(this.listFilter[index] === list) {
        this.listFilter.splice(this.listFilter.indexOf(value), 1);
      }
    }
  }

  filterProfiles = () => {
    this.renderModal = false;
    const filterProfiles = {
      list: this.listFilter,
      skill: this.select
    };
    return filterProfiles;
  }
  
  validateModal = () => !this.select || !this.listFilter.length;


  close = () => this.renderModal = false;

  stopPropagations = event => event.stopPropagation();

  ngOnInit() {
    this.modalService.modalSearch.subscribe((render: boolean) => this.renderModal = render);
  }
}
