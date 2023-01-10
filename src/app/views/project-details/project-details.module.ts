// ********** MODULES **********
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

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
  imports: [CommonModule, RouterModule.forChild(detailsRoutes), HomeModule],
})
export class ProjectDetailsModule {}
