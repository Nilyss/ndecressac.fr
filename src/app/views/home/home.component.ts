import { Component } from '@angular/core'

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
export class HomeComponent {}
