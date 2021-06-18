import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public slides = [
    { src: "assets/img/carousel1.jpg" },
    { src: "assets/img/carousel2.jpg" },
    { src: "assets/img/carousel3.jpg" },
    { src: "assets/img/carousel4.jpeg" }
  ];



}
