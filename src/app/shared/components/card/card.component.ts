import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

   @Input() profile: any;

   firstName(name) {
    return name.split(" ")[0];
  }

  skillSize(skills) {
    return skills.slice(0, 3);
  }

  moreSkill(profile, skillSize) {
    return profile.length - skillSize.length;
  }

  ngOnInit() {
    
  }
}
