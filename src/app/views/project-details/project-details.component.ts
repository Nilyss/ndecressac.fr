import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core'
import { Subscription, tap } from 'rxjs'
import { Router } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser'

// NgRx
import { Store } from '@ngrx/store'
import { ProjectState } from '../../data/NgRx/controller/project/projectReducer'
import { selectProjectData } from '../../data/NgRx/controller/project/projectSelector'

// Models
import { Project } from '../../data/NgRx/models/project'

// Swiper
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Lazy,
  Autoplay,
} from 'swiper'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Lazy])

@Component({
  selector: 'app-project-details',
  template: `
    <body class="body">
      <app-header></app-header>
      <main class="main">
        <section class="projectDetails" data-aos="slide-left">
          <div class="projectDetails__titleWrapper">
            <h2 class="projectDetails__titleWrapper__title">
              <span class="projectDetails__titleWrapper__title--firstColor">
                Project details </span
              ><br />
              {{ project?.name }}
            </h2>
            <p
              *ngIf="project?.url"
              class="projectDetails__titleWrapper__projectLink"
            >
              Consult the deployment of the project :
              <a
                [href]="project?.url"
                class="projectDetails__titleWrapper__projectLink__link"
              >
                {{ project?.url.split('/').pop() }}</a
              >
            </p>
          </div>
          <!-- ********** SWIPER ********** -->
          <div class="projectDetails__swiperWrapper">
            <swiper
              class="projectDetails__swiperWrapper__swiper"
              [slidesPerView]="1"
              [spaceBetween]="200"
              [navigation]="true"
              [pagination]="{ clickable: true }"
              [autoplay]="{ delay: 3000, disableOnInteraction: true }"
              [lazy]="true"
              [loop]="true"
            >
              <ng-template swiperSlide *ngFor="let image of project?.images">
                <figure
                  class="projectDetails__swiperWrapper__swiper__imageContainer"
                >
                  <img
                    class="projectDetails__swiperWrapper__swiper__imageContainer__image"
                    [src]="image"
                    alt="{{ project?.name }}}"
                  />
                </figure>
              </ng-template>
            </swiper>
          </div>

          <!-- ********** OVERVIEW ********** -->

          <div class="projectDetails__overviewWrapper">
            <p class="projectDetails__overviewWrapper__overview">
              {{ project?.overview }}
            </p>
          </div>

          <!-- ********** YOUTUBE INTEGRATION ********** -->

          <div *ngIf="project?.YtUrl" class="projectDetails__youtubeWrapper">
            <iframe
              class="projectDetails__youtubeWrapper__youtube"
              [src]="safeUrl"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </main>
      <app-footer></app-footer>
    </body>
  `,
  styleUrls: ['./project-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined

  queryParamsId: string | null

  project: Project | undefined

  embedId: string | undefined

  safeUrl: Object | undefined

  getRequestProject() {
    this.subscription = this.store
      .select(selectProjectData)
      .pipe(
        tap((projects: Project[]) => {
          this.queryParamsId =
            this.router.routerState.snapshot.root.queryParams['id']
          projects.find((project: Project) => {
            if (project._id === this.queryParamsId) {
              // Save selected project
              this.project = project
              // Get YouTube link in safe URL
              this.embedId = project.YtUrl.split('/').pop()
              const URL = 'https://www.youtube.com/embed/' + this.embedId
              this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL)
            }
          })
        })
      )
      .subscribe()
  }

  constructor(
    private store: Store<{ project: ProjectState }>,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.getRequestProject()
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
