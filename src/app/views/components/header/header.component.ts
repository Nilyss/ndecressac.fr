import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

// NgRx
import { Store } from '@ngrx/store'
import { ExternalLinkState } from '../../../data/NgRx/controller/externalLink/externalLinkReducer'
import { selectExternalLinkData } from '../../../data/NgRx/controller/externalLink/externalLinkSelector'

// Models
import { ExternalLink } from '../../../data/NgRx/models/externalLink'

// ************ ICONS ************
import * as BrandIcons from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <div class="header__leftSideWrapper">
        <h1 class="header__leftSideWrapper__title">Nicolas DECRESSAC</h1>
      </div>
      <nav class="header__rightSideWrapper">
        <a
          *ngFor="let externalLink of externalLinks"
          class="header__rightSideWrapper__icon"
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
export class HeaderComponent implements OnInit, OnDestroy {
  github = BrandIcons.faGithub
  twitter = BrandIcons.faTwitterSquare
  linkedin = BrandIcons.faLinkedin

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
