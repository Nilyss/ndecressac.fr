import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

// NgRx
import { Store } from '@ngrx/store'
import { ExternalLinkState } from '../../../../data/NgRx/controller/externalLink/externalLinkReducer'
import { selectExternalLinkData } from '../../../../data/NgRx/controller/externalLink/externalLinkSelector'

// Models
import { ExternalLink } from '../../../../data/NgRx/models/externalLink'

// ************ ICONS ************
import * as BrandIcons from '@fortawesome/free-brands-svg-icons'

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
          <nav class="about__firstArticle__leftContent__linksWrapper">
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
          <p class="about__firstArticle__leftContent__subMessage">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul class="about__firstArticle__leftContent__listStackWrapper">
            <li
              *ngFor="let stack of stacks"
              class="about__firstArticle__leftContent__listStackWrapper__stack"
            >
              {{ stack.techno }}
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

  stacks = [
    {
      techno: 'HTML5',
    },
    {
      techno: 'CSS3',
    },
    {
      techno: 'JavaScript',
    },
    {
      techno: 'TypeScript',
    },
    {
      techno: 'Angular 2+',
    },
    {
      techno: 'React.js',
    },
    {
      techno: 'React-native',
    },
    {
      techno: 'NgRx',
    },
    {
      techno: 'Redux-toolkit',
    },
    {
      techno: 'Node.js',
    },
  ]

  educations = [
    {
      school: 'OpenClassrooms',
      degree: 'Bac +2 Web Developer',
      date: '2022',
    },
    {
      school: 'Lycée Andrée Malraux',
      degree:
        "Baccalauréat (Bachelor's degree) in Graphic Arts and Industries (Obtained with distinction)",
      date: '2006 — 2008',
    },
    {
      school: 'Lycée Andrée Malraux',
      degree:
        'Professional Studies Certificate (BEP) in Communication and Graphic Industries',
      date: '2004 — 2006',
    },
  ]

  professionalExperiences = [
    {
      company: 'SITEL',
      position: 'Customer Service Representative',
      date: '2021 — 2022',
    },
    {
      company: 'CARL ZEISS MEDITEC',
      position: 'Turn-Mill Technician',
      date: '2016 — 2018',
    },
    {
      company: 'Self-employed entrepreneur',
      position: 'Repair and Computer Training',
      date: '2015',
    },
    {
      company: 'SITEL',
      position: 'ADSL Technician',
      date: '2013 — 2014',
    },
  ]

  subscription: Subscription | undefined

  externalLinks: ExternalLink[]

  getExternalLink() {
    this.subscription = this.store
      .select(selectExternalLinkData)
      .subscribe((res: ExternalLink[]) => (this.externalLinks = res))
  }
  constructor(private store: Store<{ externalLink: ExternalLinkState }>) {}

  ngOnInit() {
    this.getExternalLink()
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
