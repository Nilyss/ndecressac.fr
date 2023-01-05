import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

// NgRx => Different states & selectors
import { Store } from '@ngrx/store'
import { ExternalLinkState } from '../../../../data/NgRx/controller/externalLink/externalLinkReducer'
import { selectExternalLinkData } from '../../../../data/NgRx/controller/externalLink/externalLinkSelector'
import { StackState } from '../../../../data/NgRx/controller/stack/stackReducer'
import { selectStackData } from '../../../../data/NgRx/controller/stack/stackSelector'
import { ExperienceState } from '../../../../data/NgRx/controller/experience/experienceReducer'
import * as SelectExperiences from '../../../../data/NgRx/controller/experience/experienceSelector'

// Models
import { ExternalLink } from '../../../../data/NgRx/models/externalLink'
import { Stack } from '../../../../data/NgRx/models/stack'

// ************ ICONS ************
import * as BrandIcons from '@fortawesome/free-brands-svg-icons'
import { Experience } from '../../../../data/NgRx/models/experience'

@Component({
  selector: 'app-about',
  template: `
    <section class="about">
      <!-- ********** FIRST ARTICLE ********** -->

      <article class="about__firstArticle">
        <!-- ********** FIRST ARTICLE - LEFT SIDE ********** -->

        <div class="about__firstArticle__leftContent">
          <h2 class="about__firstArticle__leftContent__title">
            <span class="about__firstArticle__leftContent__title--altColor"
              >About </span
            >Nicolas
          </h2>
          <p class="about__firstArticle__leftContent__overview">
            As a fullstack JavaScript developer, I am skilled in building web
            applications using Angular 2+ and React.js on the front-end and
            Node.js on the back-end. <br />
            <br />
            I am dedicated to creating dynamic and interactive user interfaces
            that integrate seamlessly with the server-side functionality of the
            application. <br />
            <br />I strive to continually improve my skills and stay current
            with the latest web development trends and best practices. <br />
            <br />I look forward to learning and growing as a developer, and I
            am eager to tackle new challenges and opportunities in the field.
          </p>
          <nav
            *ngIf="externalLinks"
            class="about__firstArticle__leftContent__linksWrapper"
          >
            <a
              *ngFor="let externalLink of externalLinks"
              class="about__firstArticle__leftContent__linksWrapper__link"
              [href]="externalLink.url"
              [target]="externalLink.name"
              [title]="externalLink.name"
            >
              <fa-icon
                *ngIf="externalLink.name === 'GitHub'"
                [icon]="github"
              ></fa-icon>
              <fa-icon
                *ngIf="externalLink.name === 'Twitter'"
                [icon]="twitter"
              ></fa-icon>
              <fa-icon
                *ngIf="externalLink.name === 'LinkedIn'"
                [icon]="linkedin"
              ></fa-icon>
            </a>
          </nav>
          <p
            *ngIf="stacks"
            class="about__firstArticle__leftContent__subMessage"
          >
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul class="about__firstArticle__leftContent__listStackWrapper">
            <li
              *ngFor="let stack of stacks"
              class="about__firstArticle__leftContent__listStackWrapper__stack"
            >
              {{ stack.name }}
            </li>
          </ul>
        </div>

        <!-- ********** FIRST ARTICLE - RIGHT SIDE ********** -->

        <div class="about__firstArticle__rightContent">
          <figure class="about__firstArticle__rightContent__pictureWrapper">
            <img
              class="about__firstArticle__rightContent__pictureWrapper__picture"
              [src]="desktopPicture"
              alt="Desktop"
              title="Desktop"
            />
          </figure>
        </div>
      </article>

      <!-- ********** SECOND ARTICLE ********** -->

      <article class="about__secondArticle">
        <!-- ********** SECOND ARTICLE - LEFT SIDE ********** -->

        <div class="about__secondArticle__leftContent">
          <div class="articleHeaderLeft">
            <p class="about__secondArticle__leftContent__emoji emoji">🎓</p>
            <h2
              class="about__secondArticle__leftContent__title secondArticleTitle"
            >
              Education
            </h2>
          </div>
          <ul
            class="about__secondArticle__leftContent__listItemWrapper listItemWrapper"
          >
            <li
              *ngFor="let education of educations"
              class="about__secondArticle__leftContent__listItemWrapper__list list"
            >
              <h3
                class="about__secondArticle__leftContent__listItemWrapper__list__item list__item"
              >
                {{ education.school }}
              </h3>
              <div
                class="about__secondArticle__leftContent__listItemWrapper__list__item__infoWrapper infoWrapper"
              >
                <p
                  class="about__secondArticle__leftContent__listItemWrapper__list__item__infoWrapper__info info"
                >
                  {{ education.degree }}
                </p>
                <p
                  class="about__secondArticle__leftContent__listItemWrapper__list__item__infoWrapper__date date"
                >
                  {{ education.date }}
                </p>
              </div>
            </li>
            <li
              class="about__secondArticle__leftContent__listItemWrapper__list list"
            >
              <h3
                class="about__secondArticle__leftContent__listItemWrapper__list__item list__item"
              >
                French
              </h3>
              <div
                class="about__secondArticle__leftContent__listItemWrapper__list__item__infoWrapper infoWrapper"
              >
                <p
                  class="about__secondArticle__leftContent__listItemWrapper__list__item__infoWrapper__info info"
                >
                  Native speaker
                </p>
              </div>
            </li>
            <li
              class="about__secondArticle__leftContent__listItemWrapper__list list"
            >
              <h3
                class="about__secondArticle__leftContent__listItemWrapper__list__item list__item"
              >
                English
              </h3>
              <div
                class="about__secondArticle__leftContent__listItemWrapper__list__item__infoWrapper infoWrapper"
              >
                <p
                  class="about__secondArticle__leftContent__listItemWrapper__list__item__infoWrapper__info info"
                >
                  B2
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- ********** SECOND ARTICLE - RIGHT SIDE ********** -->

        <div class="about__secondArticle__rightContent">
          <div class="articleHeaderRight">
            <p class="about__secondArticle__rightContent__emoji emoji">💼</p>
            <h2
              class="about__secondArticle__rightContent__title secondArticleTitle"
            >
              Professional Experience
            </h2>
          </div>
          <ul
            class="about__secondArticle__rightContent__listItemWrapper listItemWrapper"
          >
            <li
              *ngFor="let professionalExperience of professionalExperiences"
              class="about__secondArticle__rightContent__listItemWrapper__list list"
            >
              <h3
                class="about__secondArticle__rightContent__listItemWrapper__list__item list__item"
              >
                {{ professionalExperience.company }}
              </h3>
              <div
                class="about__secondArticle__rightContent__listItemWrapper__list__item__infoWrapper infoWrapper"
              >
                <p
                  class="about__secondArticle__rightContent__listItemWrapper__list__item__infoWrapper__info info"
                >
                  {{ professionalExperience.position }}
                </p>
                <p
                  class="about__secondArticle__rightContent__listItemWrapper__list__item__infoWrapper__date date"
                >
                  {{ professionalExperience.date }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  `,
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  github = BrandIcons.faGithub
  twitter = BrandIcons.faTwitterSquare
  linkedin = BrandIcons.faLinkedin
  desktopPicture: string = 'https://i.imgur.com/s2pns4Z.jpg'

  stacks: Stack[]

  subscription: Subscription | undefined

  externalLinks: ExternalLink[]

  educations: Experience['educations'][]
  professionalExperiences: Experience['professionalExperiences'][]

  getExternalLink() {
    this.subscription = this.store
      .select(selectExternalLinkData)
      .subscribe((res: ExternalLink[]) => (this.externalLinks = res))
  }

  getStack() {
    this.subscription = this.store
      .select(selectStackData)
      .subscribe((res: Stack[]) => (this.stacks = res))
  }

  getExperiences() {
    this.subscription = this.store
      .select(SelectExperiences.selectEducationExperiences)
      .subscribe((res: Experience['educations'][]) => (this.educations = res))
    this.subscription = this.store
      .select(SelectExperiences.selectProfessionalExperience)
      .subscribe(
        (res: Experience['professionalExperiences'][]) =>
          (this.professionalExperiences = res)
      )
  }
  constructor(
    private store: Store<{
      externalLink: ExternalLinkState
      stack: StackState
      experiences: ExperienceState
    }>
  ) {}

  ngOnInit() {
    this.getExternalLink()
    this.getStack()
    this.getExperiences()
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
