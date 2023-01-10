import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription, tap } from 'rxjs'
import { Router } from '@angular/router'

// NgRx
import { Store } from '@ngrx/store'
import { ProjectState } from '../../data/NgRx/controller/project/projectReducer'
import { selectProjectData } from '../../data/NgRx/controller/project/projectSelector'

// Models
import { Project } from '../../data/NgRx/models/project'

@Component({
  selector: 'app-project-details',
  template: ` <p>project-details works!</p> `,
  styles: [],
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined

  queryParamsId: string | null

  project: Project | undefined

  getRequestProject() {
    this.subscription = this.store
      .select(selectProjectData)
      .pipe(
        tap((project: Project[]) => {
          this.queryParamsId =
            this.router.routerState.snapshot.root.queryParams['id']
          project.find((project: Project) => {
            if (project._id === this.queryParamsId) {
              this.project = project
            }
          })
        })
      )
      .subscribe()
  }
  constructor(
    private store: Store<{ project: ProjectState }>,
    private router: Router
  ) {}
  ngOnInit() {
    this.getRequestProject()
    console.log('this.queryParamsId =>', this.queryParamsId)
    console.log('this.project =>', this.project)
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
