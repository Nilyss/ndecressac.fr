import { Component } from '@angular/core'

// ************ ICONS ************
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <div class="header__leftSideWrapper">
        <h1 class="header__leftSideWrapper__title">Nicolas DECRESSAC</h1>
      </div>
      <nav class="header__rightSideWrapper">
        <a
          class="header__rightSideWrapper__icon"
          href="https://github.com/Nilyss"
          target="GitHub"
          title="GitHub"
        >
          <fa-icon [icon]="faGithub"></fa-icon>
        </a>
        <a
          class="header__rightSideWrapper__icon"
          href="https://twitter.com/@Nilyss_7"
          target="Twitter"
          title="Twitter"
        >
          <fa-icon [icon]="faTwitterSquare"></fa-icon>
        </a>
        <a
          class="header__rightSideWrapper__icon"
          href="https://www.linkedin.com/in/nicolas-decressac-2a59a4234"
          target="LinkedIn"
          title="LinkedIn"
        >
          <fa-icon [icon]="faLinkedin"></fa-icon>
        </a>
        <div class="header__rightSideWrapper__buttonWrapper">
          <button
            class="header__rightSideWrapper__buttonWrapper__button"
            title="Download CV"
          >
            Download CV
          </button>
        </div>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faGithub = faGithub
  faTwitterSquare = faTwitterSquare
  faLinkedin = faLinkedin
}
