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
      types: ["CLT", "PJ", "Estágio"]
    },{
      name: "Nível de experiência",
      types: ["Júnior", "Pleno", "Sênior"]
    },{
      name: "Tamanho da empresa",
      types: ["Startup", "Pequena ou Média empresa", "Grande empresa"]
    }
  ]

  openModal = false;

  closeModalSearch() {
    this.dataService.openModalSearch(false);
  }

  ngOnInit() {
    this.dataService.modalSearch.subscribe(open => this.openModal = open);
  }
}
