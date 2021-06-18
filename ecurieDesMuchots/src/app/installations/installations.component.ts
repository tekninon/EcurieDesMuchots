import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.css']
})
export class InstallationsComponent implements OnInit {
  cheminCarriere:any = "../assets/img/carriere1.jpeg";

  constructor() { }

  ngOnInit(): void {
  }

}
