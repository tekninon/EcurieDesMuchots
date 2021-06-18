import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public slides = [
    { src: "assets/img/carousel1.jpg" },
    { src: "assets/img/carousel2.jpg" },
    { src: "assets/img/carousel3.jpg" },
    { src: "assets/img/carousel4.jpeg" }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
