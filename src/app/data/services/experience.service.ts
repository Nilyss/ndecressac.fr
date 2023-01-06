import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as Utils from '../Utils'

// Models
import { Experience } from '../NgRx/models/experience'

// RxJs
import { catchError, Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  getExperiences(): Observable<Experience[]> {
    return this.http
      .get<Experience[]>(this.datasUrl, Utils.httpOptions)
      .pipe(catchError((error) => Utils.handleError(error, null)))
  }
  private datasUrl: string =
    'https://nilyss.github.io/ndecressac.fr/assets/experiences.json'
  constructor(private http: HttpClient) {}
}
