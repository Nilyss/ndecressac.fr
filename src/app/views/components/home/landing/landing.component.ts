import { Component } from '@angular/core'

// ************ ICONS ************
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-landing',
  template: `
    <div class="landingContainer">
      <section class="landing">
        <!-- ********** LEFT WRAPPER ********** -->

        <article class="landing__contentLeft">
          <p class="landing__contentLeft__subtitle">✋ Hello, my name is</p>
          <h2 class="landing__contentLeft__title">Nicolas.</h2>
          <p class="landing__contentLeft__job">
            Web Developer FullStack JavaScript
          </p>
          <p class="landing__contentLeft__overview">
            I'm a JavaScript developer based in La Rochelle, France. I'm
            passionate about web development and I'm always looking for new
            challenges.
          </p>
          <div class="landing__contentLeft__buttonWrapper">
            <button class="landing__contentLeft__buttonWrapper__button">
              Get in touch
            </button>
          </div>
        </article>

        <!-- ********** RIGHT WRAPPER ********** -->

        <article class="landing__contentRight">
          <figure class="landing__contentRight__pictureWrapper">
            <img
              class="landing__contentRight__pictureWrapper__picture"
              [src]="profilePicture"
              alt="Nicolas"
              title="Nicolas"
            />
          </figure>
        </article>
      </section>

      <!-- ********** STACK BANNER ********** -->

      <section class="stackBanner">
        <div class="stackBanner__content">
          <ul class="stackBanner__content__wrapper">
            <li class="stackBanner__content__wrapper__list">Html5</li>
            <li class="stackBanner__content__wrapper__list">
              <fa-icon [icon]="faAsterisk"></fa-icon>
            </li>
            <li class="stackBanner__content__wrapper__list">Css3</li>
            <li class="stackBanner__content__wrapper__list">
              <fa-icon [icon]="faAsterisk"></fa-icon>
            </li>
            <li class="stackBanner__content__wrapper__list">Javascript</li>
            <li class="stackBanner__content__wrapper__list">
              <fa-icon [icon]="faAsterisk"></fa-icon>
            </li>
            <li class="stackBanner__content__wrapper__list">Typescript</li>
            <li class="stackBanner__content__wrapper__list">
              <fa-icon [icon]="faAsterisk"></fa-icon>
            </li>
            <li class="stackBanner__content__wrapper__list">Angular 2+</li>
            <li class="stackBanner__content__wrapper__list">
              <fa-icon [icon]="faAsterisk"></fa-icon>
            </li>
            <li class="stackBanner__content__wrapper__list">React . js</li>
            <li class="stackBanner__content__wrapper__list">
              <fa-icon [icon]="faAsterisk"></fa-icon>
            </li>
            <li class="stackBanner__content__wrapper__list">React - native</li>
            <li class="stackBanner__content__wrapper__list">
              <fa-icon [icon]="faAsterisk"></fa-icon>
            </li>
            <li class="stackBanner__content__wrapper__list">Node . js</li>
            <li class="stackBanner__content__wrapper__list">
              <fa-icon [icon]="faAsterisk"></fa-icon>
            </li>
            <li class="stackBanner__content__wrapper__list">Front - end</li>
            <li class="stackBanner__content__wrapper__list">
              <fa-icon [icon]="faAsterisk"></fa-icon>
            </li>
            <li class="stackBanner__content__wrapper__list">Back - end</li>
          </ul>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  profilePicture = 'https://imgur.com/HgYTBC9.png'
  faAsterisk = faAsterisk
}
