import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Installation } from "./installation";
import { INSTALLATIONS } from "./mock-installations";

@Injectable({ providedIn: 'root' })
export class InstallationService {
    constructor(){}


    getInstallations(): Observable<Installation[]> {
        return of(INSTALLATIONS);
      }

}