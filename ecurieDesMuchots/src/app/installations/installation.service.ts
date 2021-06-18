import { Observable, of } from "rxjs";
import { Installation } from "./installation";
import { INSTALLATIONS } from "./mock-installations";

export class InstallationService {
    constructor(){}


    getInstallations(): Observable<Installation[]> {
        return of(INSTALLATIONS);
      }

}