import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as Utils from '../../utils/Utils'

// Models
import { Stack } from '../NgRx/models/stack'

// RxJs
import { catchError, Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class StackService {
  getAllStack(): Observable<Stack[]> {
    return this.http
      .get<Stack[]>(Utils.stackEndpoints, Utils.httpOptions)
      .pipe(catchError((error) => Utils.handleError(error, null)))
  }

  constructor(private http: HttpClient) {}
}
