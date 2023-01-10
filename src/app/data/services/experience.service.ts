import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as Utils from '../../utils/Utils'

// Models
import { Experience } from '../NgRx/models/experience'

// RxJs
import { catchError, Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  getExperiences(): Observable<Experience[]> {
    return this.http
      .get<Experience[]>(Utils.experienceEndpoints, Utils.httpOptions)
      .pipe(catchError((error) => Utils.handleError(error, null)))
  }
  constructor(private http: HttpClient) {}
}
