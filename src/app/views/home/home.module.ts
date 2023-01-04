// ********** MODULES **********
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// ********** COMPONENTS **********
import { HomeComponent } from './home.component'
import { HeaderComponent } from '../components/header/header.component'
import { StackBannerComponent } from '../components/home/stack-banner/stack-banner.component'
import { LandingComponent } from '../components/home/landing/landing.component'
import { AboutComponent } from '../components/home/about/about.component'
import { FooterComponent } from '../components/footer/footer.component'

// ********** ROUTES **********
import { RouterModule, Routes } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
const homeRoutes: Routes = [{ path: '', component: HomeComponent }]
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LandingComponent,
    AboutComponent,
    StackBannerComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(homeRoutes), FontAwesomeModule],
})
export class HomeModule {}
