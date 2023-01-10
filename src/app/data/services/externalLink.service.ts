import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as Utils from '../../utils/Utils'

// Models
import { ExternalLink } from '../NgRx/models/externalLink'

// RxJs
import { catchError, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ExternalLinkService {
  getAllExternalLink(): Observable<ExternalLink[]> {
    return this.http
      .get<ExternalLink[]>(Utils.externalLinkEndpoint, Utils.httpOptions)
      .pipe(catchError((error) => Utils.handleError(error, null)))
  }

  constructor(private http: HttpClient) {}
}
