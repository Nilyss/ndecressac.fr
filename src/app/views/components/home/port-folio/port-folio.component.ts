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
  template: `
    <section id="portFolio" class="portFolio">
      <div class="portFolio__titleWrapper" data-aos="zoom-in-down">
        <h2 class="portFolio__titleWrapper__title">
          <span class="portFolio__titleWrapper__title--firstColor"
            >Take a look </span
          >at my previous work
        </h2>
      </div>
      <div *ngIf="projects" class="portFolio__body" data-aos="zoom-in-up">
        <div class="portFolio__body__firstWrapper">
          <figure class="portFolio__body__firstWrapper__imageWrapper">
            <img
              *ngIf="projects[0]"
              class="portFolio__body__firstWrapper__imageWrapper__image"
              [src]="projects[0].thumbnail"
              [alt]="projects[0].name"
              [title]="projects[0].name"
            />
          </figure>
          <figure class="portFolio__body__firstWrapper__imageWrapper">
            <img
              *ngIf="projects[2]"
              class="portFolio__body__firstWrapper__imageWrapper__image"
              [src]="projects[2].thumbnail"
              [alt]="projects[2].name"
              [title]="projects[2].name"
            />
          </figure>
        </div>
        <div class="portFolio__body__secondWrapper">
          <figure class="portFolio__body__secondWrapper__imageWrapper">
            <img
              *ngIf="projects[1]"
              class="portFolio__body__secondWrapper__imageWrapper__image"
              [src]="projects[1].thumbnail"
              [alt]="projects[1].name"
              [title]="projects[1].name"
            />
          </figure>
        </div>
        <div class="portFolio__body__thirdWrapper">
          <figure class="portFolio__body__thirdWrapper__imageWrapper">
            <img
              *ngIf="projects[4]"
              class="portFolio__body__thirdWrapper__imageWrapper__image"
              [src]="projects[4].thumbnail"
              [alt]="projects[4].name"
              [title]="projects[4].name"
            />
          </figure>
          <figure class="portFolio__body__thirdWrapper__imageWrapper">
            <img
              *ngIf="projects[5]"
              class="portFolio__body__thirdWrapper__imageWrapper__image"
              [src]="projects[5].thumbnail"
              [alt]="projects[5].name"
              [title]="projects[5].name"
            />
          </figure>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./port-folio.component.scss'],
})
export class PortFolioComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined

  projects: Project[] = []

  getProjects() {
    this.subscription = this.store
      .select(selectProjectData)
      .pipe(tap((project: Project[]) => (this.projects = project)))
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
