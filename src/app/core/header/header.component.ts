import { Component, OnInit } from '@angular/core';

import { ModalService } from './../../shared/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: ModalService) { }
  
  openModaSearch = event => {
    event.stopPropagation();
    this.hideMoidal(true);
  }

  hideMoidal = (param: boolean) => this.modalService.openModalSearch(param);

  stopPropagations = event => event.stopPropagation();

  ngOnInit() {
    document.querySelector('body').addEventListener('click', () =>  this.hideMoidal(false));
  }

}
