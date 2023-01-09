import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-footer',
  template: `
    <footer id="footer" class="footer">
      <p class="footer__message">Lets build your project together</p>
      <div class="footer__buttonWrapper">
        <button (click)="toggleContact()" class="footer__buttonWrapper__button">
          Get in touch
        </button>
      </div>
      <div *ngIf="displayContact" class="footer__contactWrapper">
        <app-contact></app-contact>
      </div>
      <p class="footer__credential">© 2023 by Nicolas Decressac</p>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  displayContact: boolean
  toggleContact() {
    this.displayContact = !this.displayContact
  }

  ngOnInit() {
    this.displayContact = false
  }
}
