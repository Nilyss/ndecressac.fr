import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription, tap } from 'rxjs'

// NgRx
import { Store } from '@ngrx/store'
import * as ExternalLinksActions from '../../data/NgRx/controller/externalLink/externalLinkAction'
import * as StackActions from '../../data/NgRx/controller/stack/stackAction'
import * as ExperienceActions from '../../data/NgRx/controller/experience/experienceAction'
import * as SkillActions from '../../data/NgRx/controller/skill/skillAction'

// Models
import { ExternalLink } from '../../data/NgRx/models/externalLink'
import { Experience } from '../../data/NgRx/models/experience'
import { Stack } from '../../data/NgRx/models/stack'
import { Skill } from '../../data/NgRx/models/skill'

// Services & State
import { ExternalLinkService } from '../../data/services/externalLink.service'
import { ExternalLinkState } from '../../data/NgRx/controller/externalLink/externalLinkReducer'
import { StackService } from '../../data/services/stack.service'
import { StackState } from '../../data/NgRx/controller/stack/stackReducer'
import { ExperienceService } from '../../data/services/experience.service'
import { ExperienceState } from '../../data/NgRx/controller/experience/experienceReducer'
import { SkillService } from '../../data/services/skill.service'
import { SkillState } from '../../data/NgRx/controller/skill/skillReducer'

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <main class="main">
      <app-landing></app-landing>
      <app-about></app-about>
      <app-skills></app-skills>
    </main>
    <app-footer></app-footer>
  `,
  styles: [],
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

  constructor(
    private store: Store<{
      externalLink: ExternalLinkState
      stack: StackState
      experience: ExperienceState
      skill: SkillState
    }>,
    private externalLinkService: ExternalLinkService,
    private stackService: StackService,
    private experienceService: ExperienceService,
    private skillService: SkillService
  ) {}

  ngOnInit() {
    this.getExternalLinks()
    this.getStack()
    this.getExperiences()
    this.getSkills()
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
