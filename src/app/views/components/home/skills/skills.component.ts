import { Component } from '@angular/core'

@Component({
  selector: 'app-skills',
  template: `
    <section class="skills">
      <div class="skills__titleWrapper">
        <h2 class="skills__titleWrapper__title">
          My <span class="skills__titleWrapper__title--altColor">skills</span>
        </h2>
      </div>
      <div class="skills__body">
        <ul class="skills__body__listWrapper">
          <li
            *ngFor="let data of datas"
            class="skills__body__listWrapper__list"
            [ngClass]="{
              firstBorderLeftColor: data._id === '1',
              secondBorderLeftColor: data._id === '2',
              thirdBorderLeftColor: data._id === '3'
            }"
          >
            <h3 class="skills__body__listWrapper__list__listTitle">
              {{ data.title }}
            </h3>
            <p class="skills__body__listWrapper__list__listMessage">
              {{ data.message }}
            </p>
          </li>
        </ul>
      </div>
    </section>
  `,
  styleUrls: ['skills.component.scss'],
})
export class SkillsComponent {
  datas = [
    {
      _id: '1',
      title: 'What can i do for you',
      message:
        'As a web developer, I specialize in utilizing technologies such as Angular 2+, React.js, and React-native to build dynamic and engaging web and mobile applications that cater to your unique needs. Whether you require a custom web development solution, an e-commerce platform, or a native mobile app, I am confident in my ability to bring your vision to life and deliver a product that exceeds your expectations. I am passionate about delivering top-quality results that help you achieve your goals and drive your business forward.',
    },
    {
      _id: '2',
      title: 'Applications I am fluent in',
      message:
        'I am a web developer with experience in technologies such as Angular 2+, React.js, and React-native. I have used these frameworks to build a variety of web and mobile applications, including single-page applications and social media platforms. I am proficient in modern Javascript syntax and have experience using Typescript for type checking. I have also built server-side applications using Node.js and the Express framework. Overall, I am proficient in a range of technologies that allow me to build dynamic and engaging applications.',
    },
    {
      _id: '3',
      title: 'What can you expect',
      message:
        'When you work with me, you can expect clear and regular communication throughout the project. I am a problem-solver at heart and am always ready to adapt to new technologies and challenges. I am committed to delivering high-quality work and meeting deadlines, and will work closely with you to ensure that your needs and expectations are met. As a junior developer, I am constantly learning and striving to improve my skills, and I am eager to take on new projects and opportunities to grow and learn.',
    },
  ]
}
