import { Component } from '@angular/core'

// EmailJs
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser' // https://www.npmjs.com/package/@emailjs/browser
import EmailJsConfig from '../../../utils/emailJs.config'

@Component({
  selector: 'app-contact',
  template: `
    <article class="contact">
      <form
        #sendContactFrom="ngForm"
        (ngSubmit)="sendEmail($event)"
        class="contact__formWrapper"
      >
        <h2 class="contact__formWrapper__title">
          <span class="contact__formWrapper__title--altColor">Contact</span> me
          :
        </h2>
        <div class="contact__formWrapper__inputsWrapper">
          <!-- ********** NAME ********** -->

          <input
            id="contactName"
            pattern=""
            name="contactName"
            [(ngModel)]="contactNameInput"
            #contactName="ngModel"
            required
            type="text"
            class="contact__formWrapper__inputsWrapper__name inputs"
          />
          <label
            for="contactName"
            class="contact__formWrapper__inputsWrapper__nameLabel labels"
            [ngClass]="{
              'contact__formWrapper__inputsWrapper__nameLabel--active':
                contactNameInput.length > 0
            }"
          >
            <span
              class="contact__formWrapper__inputsWrapper__nameLabel--required"
              >*</span
            >
            Full Name (First and Last) :
          </label>

          <!-- ********** PHONE ********** -->

          <input
            id="contactPhone"
            pattern=""
            name="contactPhone"
            [(ngModel)]="contactPhoneInput"
            #contactPhone="ngModel"
            type="tel"
            class="contact__formWrapper__inputsWrapper__phone inputs"
          />
          <label
            for="contactPhone"
            class="contact__formWrapper__inputsWrapper__phoneLabel labels"
            [ngClass]="{
              'contact__formWrapper__inputsWrapper__phoneLabel--active':
                contactPhoneInput.length > 0
            }"
            >Phone number :
          </label>

          <!-- ********** EMAIL ********** -->

          <input
            id="contactEmail"
            pattern=""
            name="contactEmail"
            [(ngModel)]="contactEmailInput"
            #contactEmail="ngModel"
            required
            type="email"
            class="contact__formWrapper__inputsWrapper__email inputs"
          />
          <label
            for="contactEmail"
            class="contact__formWrapper__inputsWrapper__emailLabel labels"
            [ngClass]="{
              'contact__formWrapper__inputsWrapper__emailLabel--active':
                contactEmailInput.length > 0
            }"
          >
            <span
              class="contact__formWrapper__inputsWrapper__nameLabel--required"
              >*</span
            >
            eMail address :
          </label>

          <!-- ********** MESSAGE ********** -->

          <textarea
            id="contactMessage"
            pattern=""
            name="contactMessage"
            [(ngModel)]="contactMessageInput"
            #contactMessage="ngModel"
            required
            class="contact__formWrapper__inputsWrapper__message inputs textArea"
          >
          </textarea>
          <label
            for="contactMessage"
            class="contact__formWrapper__inputsWrapper__messageLabel labels"
            [ngClass]="{
              'contact__formWrapper__inputsWrapper__messageLabel--active':
                contactMessageInput.length > 0
            }"
          >
            <span
              class="contact__formWrapper__inputsWrapper__nameLabel--required"
              >*</span
            >
            Message :
          </label>
        </div>
        <p class="contact__formWrapper__inputsWrapper__isRequired">
          <span class="contact__formWrapper__inputsWrapper__nameLabel--required"
            >*
          </span>
          input is required.
        </p>

        <!-- ********** SUBMIT BUTTON ********** -->

        <div class="contact__formWrapper__inputsWrapper__submitButtonWrapper">
          <button
            type="submit"
            [disabled]="!sendContactFrom.form.valid"
            class="contact__formWrapper__inputsWrapper__submitButtonWrapper__button"
          >
            Send message
          </button>
        </div>
        <p class="contact__formWrapper__inputsWrapper__submitResponseMessage">
          {{ submitResponseMessage }}
        </p>
      </form>
    </article>
  `,
  styleUrls: ['contact.component.scss'],
})
export class ContactComponent {
  contactNameInput: string = ''
  contactPhoneInput: string = ''
  contactEmailInput: string = ''
  contactMessageInput: string = ''
  submitResponseMessage: string = ''
  sendEmail(event: Event) {
    emailjs
      .sendForm(
        EmailJsConfig.serviceID,
        EmailJsConfig.templateID,
        event.target as HTMLFormElement,
        EmailJsConfig.publicKey
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text)
          this.contactNameInput = ''
          this.contactPhoneInput = ''
          this.contactEmailInput = ''
          this.contactMessageInput = ''
          this.submitResponseMessage = 'Message sent successfully!'
        },
        (error) => {
          this.submitResponseMessage =
            'Message not sent, please try again later.'
          console.log(error.text)
        }
      )
  }
}
