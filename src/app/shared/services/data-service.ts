import { EventEmitter } from '@angular/core';

export class DataService {

  constructor() {}
    
  modalSearch = new EventEmitter<boolean>();

  openModalSearch(value: boolean) {
    this.modalSearch.emit(value);
  }
}
