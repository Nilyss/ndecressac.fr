import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

// NgRx
import { Store } from '@ngrx/store'
import { SkillState } from '../../../../data/NgRx/controller/skill/skillReducer'
import { selectSkillData } from '../../../../data/NgRx/controller/skill/skillSelector'

// Models
import { Skill } from '../../../../data/NgRx/models/skill'

@Component({
  selector: 'app-skills',
  template: `
    <section id="skills" class="skills">
      <div class="skills__titleWrapper" data-aos="slide-right">
        <h2 class="skills__titleWrapper__title">
          My <span class="skills__titleWrapper__title--altColor">skills</span>
        </h2>
      </div>
      <div class="skills__body" data-aos="flip-down">
        <ul class="skills__body__listWrapper">
          <li
            *ngFor="let skill of skills"
            class="skills__body__listWrapper__list"
            [ngClass]="{
              firstBorderLeftColor: skill._id === '5c9b5b5b5b5b5b5b5b5b5b5b',
              secondBorderLeftColor: skill._id === '5c9b5b5b5b5b5b5b5b5b5b5c',
              thirdBorderLeftColor: skill._id === '5c9b5b5b5b5b5b5b5b5b5b5d'
            }"
          >
            <h3 class="skills__body__listWrapper__list__listTitle">
              {{ skill.title }}
            </h3>
            <p class="skills__body__listWrapper__list__listMessage">
              {{ skill.message }}
            </p>
          </li>
        </ul>
      </div>
    </section>
  `,
  styleUrls: ['skills.component.scss'],
})
export class SkillsComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined

  skills: Skill[]
  getSkills() {
    this.subscription = this.store
      .select(selectSkillData)
      .subscribe((res: Skill[]) => (this.skills = res))
  }

  constructor(private store: Store<{ skill: SkillState }>) {}

  ngOnInit() {
    this.getSkills()
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
