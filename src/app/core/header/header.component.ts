import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/services/data-service';
import { StopPropagation } from './../../shared/models/stop-propagation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService, private stopPropagation: StopPropagation) { }
  
  openModaSearch(event) {
    event.stopPropagation();
    this.hideMoidal(true);
  }

  hideMoidal(param: boolean) {
    this.dataService.openModalSearch(param);
  }

  stopPropagations(event) {
    this.stopPropagation.stop(event);
  }

  ngOnInit() {
    document.querySelector('body').addEventListener('click', () =>  this.hideMoidal(false));
  }

}
