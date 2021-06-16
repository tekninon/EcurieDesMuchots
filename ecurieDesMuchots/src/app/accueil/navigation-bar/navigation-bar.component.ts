import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  cheminLogo:any = "../assets/img/logo.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
