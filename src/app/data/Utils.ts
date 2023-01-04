import { of } from 'rxjs'
import { HttpHeaders } from '@angular/common/http'

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
}
export const handleError = (error: Error, errorValue: any) => {
  console.error(error)
  return of(errorValue)
}

export const log = (res: any, resValue: any) => {
  console.log(`${resValue} =>`, res)
}
