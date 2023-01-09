import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as Utils from '../../utils/Utils'

// Models
import { Project } from '../NgRx/models/project'

// RxJs
import { catchError, Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ProjectService {
  getProjects(): Observable<Project[]> {
    return this.http
      .get<Project[]>(Utils.projectEndpoints, Utils.httpOptions)
      .pipe(catchError((error) => Utils.handleError(error, null)))
  }
  constructor(private http: HttpClient) {}
}
