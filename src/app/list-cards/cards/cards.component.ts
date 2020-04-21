import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  
  profiles = [
    {
      id: "1",
      name: "Mariana Petrecu",
      area: "Mobile Designer",
      contract: "Freelancer",
      skills: ["React", "IOS", "React Native"],
      description: "Lorem ipsum dolor in quam iure, odio amet atque.",
      imageURL: "../../../../assets/images/avatar.jpg",
      hour: "R$ 32/hr"
    },{
      id: "2",
      name: "Mariana Petrecu",
      area: "Mobile Designer",
      contract: "Freelancer",
      skills: ["React", "IOS", "React Native"],
      description: "Lorem ipsum dolor in quam iure, odio amet atque.",
      imageURL: "../../../../assets/images/avatar.jpg",
      hour: "R$ 30/hr"
    },{
      id: "3",
      name: "Mariana Petrecu",
      area: "Mobile Designer",
      contract: "Freelancer",
      skills: ["React", "IOS", "React Native"],
      description: "Lorem ipsum dolor in quam iure, odio amet atque.",
      imageURL: "../../../../assets/images/avatar.jpg",
      hour: "R$ 26/hr"
    },{
      id: "4",
      name: "Mariana Petrecu",
      area: "Mobile Designer",
      contract: "Freelancer",
      skills: ["React", "IOS", "React Native"],
      description: "Lorem ipsum dolor in quam iure, odio amet atque.",
      imageURL: "../../../../assets/images/avatar.jpg",
      hour: "R$ 60/hr"
    }
  ]

  ngOnInit() {
  }

}
