import { Component } from '@angular/core'

// ************ ICONS ************
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
              class="about__firstArticle__leftContent__linksWrapper__link"
              href="https://github.com/Nilyss"
              target="GitHub"
              title="GitHub"
            >
              <fa-icon [icon]="faGithub"></fa-icon>
            </a>
            <a
              class="about__firstArticle__leftContent__linksWrapper__link"
              href="https://twitter.com/@Nilyss_7"
              target="Twitter"
              title="Twitter"
            >
              <fa-icon [icon]="faTwitterSquare"></fa-icon>
            </a>
            <a
              class="about__firstArticle__leftContent__linksWrapper__link"
              href="https://www.linkedin.com/in/nicolas-decressac-2a59a4234"
              target="LinkedIn"
              title="LinkedIn"
            >
              <fa-icon [icon]="faLinkedin"></fa-icon>
            </a>
          </nav>
          <p class="about__firstArticle__leftContent__subMessage">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul class="about__firstArticle__leftContent__listStackWrapper">
            <li
              class="about__firstArticle__leftContent__listStackWrapper__stack"
            >
              HTML5
            </li>
            <li
              class="about__firstArticle__leftContent__listStackWrapper__stack"
            >
              CSS3
            </li>
            <li
              class="about__firstArticle__leftContent__listStackWrapper__stack"
            >
              JavaScript
            </li>
            <li
              class="about__firstArticle__leftContent__listStackWrapper__stack"
            >
              TypeScript
            </li>
            <li
              class="about__firstArticle__leftContent__listStackWrapper__stack"
            >
              Angular 2+
            </li>
            <li
              class="about__firstArticle__leftContent__listStackWrapper__stack"
            >
              React.js
            </li>
            <li
              class="about__firstArticle__leftContent__listStackWrapper__stack"
            >
              React-native
            </li>
            <li
              class="about__firstArticle__leftContent__listStackWrapper__stack"
            >
              NgRx
            </li>
            <li
              class="about__firstArticle__leftContent__listStackWrapper__stack"
            >
              Redux-toolkit
            </li>
            <li
              class="about__firstArticle__leftContent__listStackWrapper__stack"
            >
              Node.js
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
          <p class="about__secondArticle__leftContent__emoji emoji">🎓</p>
          <h2
            class="about__secondArticle__leftContent__title secondArticleTitle"
          >
            Education
          </h2>
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
          </ul>
        </div>

        <!-- ********** SECOND ARTICLE - RIGHT SIDE ********** -->

        <div class="about__secondArticle__rightContent">
          <p class="about__secondArticle__rightContent__emoji emoji">💼</p>
          <h2
            class="about__secondArticle__rightContent__title secondArticleTitle"
          >
            Professional Experience
          </h2>
        </div>
      </article>
    </section>
  `,
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  faGithub = faGithub
  faTwitterSquare = faTwitterSquare
  faLinkedin = faLinkedin
  desktopPicture = 'https://i.imgur.com/s2pns4Z.jpg'

  educations = [
    {
      school: 'OpenClassrooms',
      degree: 'Bac +2 Web Developer',
      date: '2022',
    },
    {
      school: 'Lycée Andrée Malraux',
      degree: 'Baccalauréat Arts et industries graphiques',
      date: '2006 — 2008',
    },
  ]

  professionalExperiences = [
    {
      company: 'OpenClassrooms',
      position: 'Web Developer',
      date: '2021 — Present',
    },
    {
      company: 'OpenClassrooms',
      position: 'Web Developer',
      date: '2021 — Present',
    },
  ]
}
