import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as Utils from '../Utils'

// Models
import { Skill } from '../NgRx/models/skill'

// RxJs
import { catchError, Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class SkillService {
  getSkills(): Observable<Skill[]> {
    return this.http
      .get<Skill[]>(this.datasUrl, Utils.httpOptions)
      .pipe(catchError((error) => Utils.handleError(error, null)))
  }
  private datasUrl: string = 'http://localhost:4200/assets/skill.json'
  constructor(private http: HttpClient) {}
}
