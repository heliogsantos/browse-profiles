import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

   @Input() profile: any;

  skillSize = (skills: string) => skills.slice(0, 3);

  moreSkill = (profile: any, skillSize: String[]) => profile.length - skillSize.length;

  descreaseTextAbout = (str: string) => str.length >= 100 ? str.slice(0, 50) : str;

  ngOnInit() {}
}
