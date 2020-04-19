import { Component, OnInit } from '@angular/core';

import { DataService } from './../../core/services/data-service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private dataService: DataService) { }

  filters = [ 
    {
      name: "Tipo de contrato",
      types: ["CLT", "PJ", "Estágio"],
      active: false
    },{
      name: "Nível de experiência",
      types: ["Júnior", "Pleno", "Sênior"],
      active: true
    },{
      name: "Tamanho da empresa",
      types: ["Startup", "Pequena ou Média empresa", "Grande empresa"],
      active: false
    }
  ]

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

  ngOnInit() {
    this.dataService.modalSearch.subscribe(open => this.openModal = open);
  }
}
