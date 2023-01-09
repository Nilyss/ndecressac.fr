import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as Utils from '../../utils/Utils'

// Models
import { Skill } from '../NgRx/models/skill'

// RxJs
import { catchError, Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class SkillService {
  getSkills(): Observable<Skill[]> {
    return this.http
      .get<Skill[]>(Utils.skillEndpoints, Utils.httpOptions)
      .pipe(catchError((error) => Utils.handleError(error, null)))
  }
  constructor(private http: HttpClient) {}
}
