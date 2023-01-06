import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription, tap } from 'rxjs'

// NgRx
import { Store } from '@ngrx/store'
import { ProjectState } from '../../../../data/NgRx/controller/project/projectReducer'
import { selectProjectData } from '../../../../data/NgRx/controller/project/projectSelector'

// Models
import { Project } from '../../../../data/NgRx/models/project'

@Component({
  selector: 'app-port-folio',
  template: ` <section class="portFolio">port-folio works!</section> `,
  styleUrls: ['./port-folio.component.scss'],
})
export class PortFolioComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined

  project: Project[] = []

  getProjects() {
    this.subscription = this.store
      .select(selectProjectData)
      .pipe(
        tap((project) => {
          this.project = project
        })
      )
      .subscribe()
  }

  constructor(private store: Store<{ project: ProjectState }>) {}

  ngOnInit() {
    this.getProjects()
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
