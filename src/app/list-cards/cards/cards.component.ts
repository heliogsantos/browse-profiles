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
      skills: ["React", "IOS", "React Native", "Android", "CSS"],
      description: "Lorem ipsum dolor in quam iure, odio amet atque.",
      imageURL: "../../../../assets/images/avatar.jpg",
      hour: "R$ 32/hr"
    },{
      id: "2",
      name: "Marcela Rocha",
      area: "Front-End",
      contract: "PJ",
      skills: ["React", "Angular", "JS"],
      description: "Lorem ipsum dolor in quam iure, odio amet atque.",
      imageURL: "../../../../assets/images/marcela.jpg",
      hour: "R$ 24/hr"
    },{
      id: "3",
      name: "Paulo Silva",
      area: "Back-End",
      contract: "CLT",
      skills: ["C#", "Node", "Java", "C#", "Node", "Java"],
      description: "Lorem ipsum dolor in quam iure, odio amet atque.",
      imageURL: "../../../../assets/images/paulo.jpg",
      hour: "R$ 26/hr"
    },{
      id: "4",
      name: "Rodrigo Cezar",
      area: "UI",
      contract: "Freelancer",
      skills: ["PS", "AI", "XD"],
      description: "Lorem ipsum dolor in quam iure, odio amet atque.",
      imageURL: "../../../../assets/images/rodrigo.jpeg",
      hour: "R$ 60/hr"
    },{
      id: "1",
      name: "Luciano Rocha",
      area: "Front-End",
      contract: "PJ",
      skills: ["HTML", "CSS", "React", "Node"],
      description: "Lorem ipsum dolor in quam iure, odio amet atque.",
      imageURL: "../../../../assets/images/luciano.jpg",
      hour: "R$ 32/hr"
    },{
      id: "2",
      name: "Marcela Rocha",
      area: "Front-End",
      contract: "PJ",
      skills: ["React", "Angular", "JS", "React", "Angular", "JS", "React", "Angular", "JS"],
      description: "Lorem ipsum dolor in quam iure, odio amet atque.",
      imageURL: "../../../../assets/images/marcela.jpg",
      hour: "R$ 24/hr"
    },{
      id: "3",
      name: "Paulo Silva",
      area: "Back-End",
      contract: "CLT",
      skills: ["C#", "Node", "Java"],
      description: "Lorem ipsum dolor in quam iure, odio amet atque.",
      imageURL: "../../../../assets/images/paulo.jpg",
      hour: "R$ 26/hr"
    },{
      id: "4",
      name: "Rodrigo Cezar",
      area: "UI",
      contract: "Freelancer",
      skills: ["PS", "AI", "XD"],
      description: "Lorem ipsum dolor in quam iure, odio amet atque.",
      imageURL: "../../../../assets/images/rodrigo.jpeg",
      hour: "R$ 60/hr"
    }
  ]
  
  ngOnInit() {
   
  }

}
