import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// RxJs
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class DownloadService {
  download(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' })
  }
  constructor(private http: HttpClient) {}
}
