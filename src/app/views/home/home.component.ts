import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription, tap } from 'rxjs'

// NgRx
import { Store } from '@ngrx/store'
import * as ExternalLinksActions from '../../data/NgRx/controller/externalLink/externalLinkAction'

// Models
import { ExternalLink } from '../../data/NgRx/models/externalLink'

// Services
import { ExternalLinkService } from '../../data/services/externalLink.service'
import { ExternalLinkState } from '../../data/NgRx/controller/externalLink/externalLinkReducer'

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <main class="main">
      <app-landing></app-landing>
      <app-about></app-about>
    </main>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined

  getExternalLinks() {
    this.externalLinkService
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

  constructor(
    private store: Store<{ externalLink: ExternalLinkState }>,
    private externalLinkService: ExternalLinkService
  ) {}

  ngOnInit() {
    this.getExternalLinks()
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
