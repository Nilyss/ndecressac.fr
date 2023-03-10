import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription, tap } from 'rxjs'
import AOS from 'aos' // https://github.com/michalsnik/aos/tree/v2

// NgRx
import { Store } from '@ngrx/store'
import * as ExternalLinksActions from '../../data/NgRx/controller/externalLink/externalLinkAction'
import * as StackActions from '../../data/NgRx/controller/stack/stackAction'
import * as ExperienceActions from '../../data/NgRx/controller/experience/experienceAction'
import * as SkillActions from '../../data/NgRx/controller/skill/skillAction'
import * as ProjectActions from '../../data/NgRx/controller/project/projectAction'

// Models
import { ExternalLink } from '../../data/NgRx/models/externalLink'
import { Experience } from '../../data/NgRx/models/experience'
import { Stack } from '../../data/NgRx/models/stack'
import { Skill } from '../../data/NgRx/models/skill'
import { Project } from '../../data/NgRx/models/project'

// Services & State
import { ExternalLinkService } from '../../data/services/externalLink.service'
import { ExternalLinkState } from '../../data/NgRx/controller/externalLink/externalLinkReducer'
import { StackService } from '../../data/services/stack.service'
import { StackState } from '../../data/NgRx/controller/stack/stackReducer'
import { ExperienceService } from '../../data/services/experience.service'
import { ExperienceState } from '../../data/NgRx/controller/experience/experienceReducer'
import { SkillService } from '../../data/services/skill.service'
import { SkillState } from '../../data/NgRx/controller/skill/skillReducer'
import { ProjectService } from '../../data/services/project.service'
import { ProjectState } from '../../data/NgRx/controller/project/projectReducer'

@Component({
  selector: 'app-home',
  template: `
    <body class="body">
      <app-header></app-header>
      <main class="main">
        <app-landing></app-landing>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-port-folio></app-port-folio>
      </main>
      <app-footer></app-footer>
      <app-back-to-top></app-back-to-top>
    </body>
  `,
  styles: ['.body {overflow-x: hidden;}'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined

  getExternalLinks() {
    this.subscription = this.externalLinkService
      .getAllExternalLink()
      .pipe(
        tap((externalLink: ExternalLink[]) =>
          this.store.dispatch(
            ExternalLinksActions.getExternalLink({ externalLink })
          )
        )
      )
      .subscribe()
  }

  getStack() {
    this.subscription = this.stackService
      .getAllStack()
      .pipe(
        tap((stack: Stack[]) =>
          this.store.dispatch(StackActions.getStack({ stack }))
        )
      )
      .subscribe()
  }

  getExperiences() {
    this.subscription = this.experienceService
      .getExperiences()
      .pipe(
        tap((res: Experience[]) => {
          this.store.dispatch(
            ExperienceActions.getEducationExperiences({
              educationExperiences: res['educations'],
            })
          )
          this.store.dispatch(
            ExperienceActions.getProfessionalExperience({
              professionalExperiences: res['professionalExperiences'],
            })
          )
        })
      )
      .subscribe()
  }

  getSkills() {
    this.subscription = this.skillService
      .getSkills()
      .pipe(
        tap((res: Skill[]) => {
          this.store.dispatch(SkillActions.getSkills({ skill: res }))
        })
      )
      .subscribe()
  }

  getProjects() {
    this.subscription = this.projectService
      .getProjects()
      .pipe(
        tap((res: Project[]) => {
          this.store.dispatch(ProjectActions.getProjects({ project: res }))
        })
      )
      .subscribe()
  }

  initAoS() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refreshHard()
    AOS.refresh()
  }
  constructor(
    private store: Store<{
      externalLink: ExternalLinkState
      stack: StackState
      experience: ExperienceState
      skill: SkillState
      project: ProjectState
    }>,
    private externalLinkService: ExternalLinkService,
    private stackService: StackService,
    private experienceService: ExperienceService,
    private skillService: SkillService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.getExternalLinks()
    this.getStack()
    this.getExperiences()
    this.getSkills()
    this.getProjects()
    this.initAoS()
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
