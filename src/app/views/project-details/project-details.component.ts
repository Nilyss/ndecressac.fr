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
  template: `
    <body class="body">
      <app-header></app-header>
      <main class="main">
        <section class="projectDetails">
          <div class="projectDetails__titleWrapper">
            <h2 class="projectDetails__titleWrapper__title">
              <span class="projectDetails__titleWrapper__title--firstColor">
                Project details </span
              ><br />
              {{ project?.name }}
            </h2>
          </div>
        </section>
      </main>
      <app-footer></app-footer>
    </body>
  `,
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined

  queryParamsId: string | null

  project: Project | undefined

  getRequestProject() {
    this.subscription = this.store
      .select(selectProjectData)
      .pipe(
        tap((projects: Project[]) => {
          this.queryParamsId =
            this.router.routerState.snapshot.root.queryParams['id']
          projects.find((project: Project) => {
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
