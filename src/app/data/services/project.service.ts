import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as Utils from '../Utils'

// Models
import { Project } from '../NgRx/models/project'

// RxJs
import { catchError, Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ProjectService {
  getProjects(): Observable<Project[]> {
    return this.http
      .get<Project[]>(this.datasUrl, Utils.httpOptions)
      .pipe(catchError((error) => Utils.handleError(error, null)))
  }
  private datasUrl: string = 'http://localhost:4200/assets/projects.json'
  constructor(private http: HttpClient) {}
}
