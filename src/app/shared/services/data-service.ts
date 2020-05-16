import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}
    
  modalSearch = new EventEmitter<boolean>();

  openModalSearch(value: boolean) {
    this.modalSearch.emit(value);
  }
}
