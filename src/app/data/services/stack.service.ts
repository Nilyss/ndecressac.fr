import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as Utils from '../Utils'

// Models
import { Stack } from '../NgRx/models/stack'

// RxJs
import { catchError, Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class StackService {
  getAllStack(): Observable<Stack[]> {
    return this.http
      .get<Stack[]>(this.datasUrl, Utils.httpOptions)
      .pipe(catchError((error) => Utils.handleError(error, null)))
  }

  private datasUrl: string =
    'https://nilyss.github.io/ndecressac.fr/assets/stacks.json'

  constructor(private http: HttpClient) {}
}
