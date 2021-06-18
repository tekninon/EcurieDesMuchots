import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Installation } from '../installation';
import { InstallationService } from '../installation.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-installations',
  templateUrl: './installations-list.component.html',
  styleUrls: ['./installations-list.component.css']
})
export class InstallationsListComponent implements OnInit {
  

  installations$!: Observable<Installation[]>;

  constructor(
    private service: InstallationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.installations$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.service.getInstallations();
      })
    );    
  }





}

