import { Component, OnInit } from '@angular/core';

import { DataService } from './../../core/services/data-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }
  
  openModaSearch() {
    this.dataService.openModalSearch(true);
  }

  ngOnInit() {
    
  }

}
