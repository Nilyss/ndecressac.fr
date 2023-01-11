import { Injectable } from '@angular/core'
import { Observable, tap } from 'rxjs'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router'

// NgRx
import { Store } from '@ngrx/store'
import { ProjectState } from '../../data/NgRx/controller/project/projectReducer'

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailsGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store
      .select(
        (state: { project: ProjectState }) => state.project.isHomePageVisited
      )
      .pipe(
        tap((isHomePageVisited: boolean) => {
          if (!isHomePageVisited) {
            return this.router.navigate(['/'])
          }
          return isHomePageVisited
        })
      )
  }
  constructor(
    private store: Store<{ project: ProjectState }>,
    private router: Router
  ) {}
}
