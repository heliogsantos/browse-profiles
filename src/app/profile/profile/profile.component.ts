import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  image = "/assets/images/avatar.jpg";

  networks = [
    {
      name: "linkedin",
      svg: "/assets/svg/linkedin.svg"
    },{
      name: "facebook",
      svg: "/assets/svg/facebook.svg"
    },{
      name: "twitter",
      svg: "/assets/svg/twitter.svg"
    },{
      name: "github",
      svg: "/assets/svg/github.svg"
    }
  ]

  ngOnInit() {
  }

}
