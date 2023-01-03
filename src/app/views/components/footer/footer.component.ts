import { Component } from '@angular/core'

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <p class="footer__message">Lets build your project together</p>
      <div class="footer__buttonWrapper">
        <button class="footer__buttonWrapper__button">Get in touch</button>
      </div>
      <p class="footer__credential">© 2023 by Nicolas Decressac</p>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
