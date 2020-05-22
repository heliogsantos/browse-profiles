import { Component, OnInit, Input } from '@angular/core';

import { CardProfile, Skills } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

   @Input() profile: CardProfile;

  decreaseSkills = (skills: string) => skills.slice(0, 3);

  moreSkill = (profile: Skills[], skillSize: String[]) => profile.length - skillSize.length;

  descreaseTextAbout = (str: string) => str.length >= 100 ? str.slice(0, 50) : str;

  ngOnInit() {}
}
