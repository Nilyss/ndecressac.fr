// ********** MODULES **********
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms'

// ********** COMPONENTS **********
import { HomeComponent } from './home.component'
import { HeaderComponent } from '../components/header/header.component'
import { StackBannerComponent } from '../components/home/stack-banner/stack-banner.component'
import { LandingComponent } from '../components/home/landing/landing.component'
import { AboutComponent } from '../components/home/about/about.component'
import { SkillsComponent } from '../components/home/skills/skills.component'
import { PortFolioComponent } from '../components/home/port-folio/port-folio.component'
import { FooterComponent } from '../components/footer/footer.component'
import { ContactComponent } from '../components/contact/contact.component'

// ********** ROUTES **********
import { RouterModule, Routes } from '@angular/router'
const homeRoutes: Routes = [{ path: '', component: HomeComponent }]
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LandingComponent,
    AboutComponent,
    StackBannerComponent,
    SkillsComponent,
    PortFolioComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    FontAwesomeModule,
    FormsModule,
  ],
})
export class HomeModule {}
