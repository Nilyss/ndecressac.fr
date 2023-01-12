import { of } from 'rxjs'
import { HttpHeaders } from '@angular/common/http'

const isProduction: boolean = false

// ********** HTTP REQUEST ***********

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
}

// ***** ENDPOINTS *****
const developmentBaseUrl: string = 'http://localhost:4200/assets/'
const productionBaseUrl: string = 'https://ndecressac.fr/assets/'

export const externalLinkEndpoint = isProduction
  ? productionBaseUrl + 'externalLinks.json'
  : developmentBaseUrl + 'externalLinks.json'
export const stackEndpoints = isProduction
  ? productionBaseUrl + 'stacks.json'
  : developmentBaseUrl + 'stacks.json'

export const experienceEndpoints = isProduction
  ? productionBaseUrl + 'experiences.json'
  : developmentBaseUrl + 'experiences.json'

export const skillEndpoints = isProduction
  ? productionBaseUrl + 'skill.json'
  : developmentBaseUrl + 'skill.json'

export const projectEndpoints = isProduction
  ? productionBaseUrl + 'projects.json'
  : developmentBaseUrl + 'projects.json'

export const downloadCvEndpoints = isProduction
  ? productionBaseUrl + 'cv_decressac_nicolas_january23.pdf'
  : developmentBaseUrl + 'cv_decressac_nicolas_january23.pdf'

// ********** LOGS **********
export const handleError = (error: Error, errorValue: any) => {
  console.error(error)
  return of(errorValue)
}

export const log = (res: any, resValue: any) => {
  console.log(`${resValue} =>`, res)
}
