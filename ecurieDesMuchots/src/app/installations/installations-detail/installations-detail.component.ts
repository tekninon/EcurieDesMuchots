import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-installations-detail',
  templateUrl: './installations-detail.component.html',
  styleUrls: ['./installations-detail.component.css']
})
export class InstallationsDetailComponent implements OnInit {

  @Input() image;
  @Input() title; 
  //@Input() description; 

  constructor() { }

  ngOnInit(): void {
  }

}
