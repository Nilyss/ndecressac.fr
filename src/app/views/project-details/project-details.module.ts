// ********** MODULES **********
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SwiperModule } from 'swiper/angular' // https://swiperjs.com/angular

// ********** COMPONENTS **********
import { ProjectDetailsComponent } from './project-details.component'

// ********** ROUTES **********
import { RouterModule, Routes } from '@angular/router'
import { HomeModule } from '../home/home.module'

// ********** GUARDS **********
import { ProjectDetailsGuard } from '../../utils/routesGuards/project-details-guard'

const detailsRoutes: Routes = [
  {
    path: 'project',
    component: ProjectDetailsComponent,
    canActivate: [ProjectDetailsGuard],
  },
]

@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(detailsRoutes),
    HomeModule,
    SwiperModule,
  ],
})
export class ProjectDetailsModule {}
