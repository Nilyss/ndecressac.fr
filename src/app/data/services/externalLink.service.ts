import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as Utils from '../Utils'

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
      .get<ExternalLink[]>(this.datasUrl, Utils.httpOptions)
      .pipe(catchError((error) => Utils.handleError(error, null)))
  }

  private datasUrl: string = 'http://localhost:4200/assets/externalLinks.json'
  constructor(private http: HttpClient) {}
}
