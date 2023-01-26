import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription, tap } from 'rxjs'
import { Router } from '@angular/router'

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
      <div class="portFolio__titleWrapper" data-aos="fade-down-right">
        <h2 class="portFolio__titleWrapper__title">
          <span class="portFolio__titleWrapper__title--firstColor"
            >Take a look </span
          >at my previous work
        </h2>
      </div>
      <div *ngIf="projects" class="portFolio__body" data-aos="fade-down-left">
        <div class="portFolio__body__firstWrapper">
          <figure class="portFolio__body__firstWrapper__imageWrapper">
            <img
              (click)="goToProjectDetails(projects[6]._id)"
              *ngIf="projects[6]"
              class="portFolio__body__firstWrapper__imageWrapper__image"
              [src]="projects[6].thumbnail"
              [alt]="projects[6].name"
              [title]="projects[6].name"
            />
          </figure>
          <figure class="portFolio__body__firstWrapper__imageWrapper">
            <img
              (click)="goToProjectDetails(projects[0]._id)"
              *ngIf="projects[0]"
              class="portFolio__body__firstWrapper__imageWrapper__image"
              [src]="projects[0].thumbnail"
              [alt]="projects[0].name"
              [title]="projects[0].name"
            />
          </figure>
        </div>
        <div class="portFolio__body__secondWrapper">
          <figure class="portFolio__body__secondWrapper__imageWrapper">
            <img
              (click)="goToProjectDetails(projects[1]._id)"
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
              (click)="goToProjectDetails(projects[2]._id)"
              *ngIf="projects[2]"
              class="portFolio__body__thirdWrapper__imageWrapper__image"
              [src]="projects[2].thumbnail"
              [alt]="projects[2].name"
              [title]="projects[2].name"
            />
          </figure>
          <figure class="portFolio__body__thirdWrapper__imageWrapper">
            <img
              (click)="goToProjectDetails(projects[4]._id)"
              *ngIf="projects[4]"
              class="portFolio__body__thirdWrapper__imageWrapper__image"
              [src]="projects[4].thumbnail"
              [alt]="projects[4].name"
              [title]="projects[4].name"
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

  goToProjectDetails(id: string) {
    return this.router.navigate([`/project`], { queryParams: { id } })
  }

  constructor(
    private store: Store<{ project: ProjectState }>,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProjects()
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
