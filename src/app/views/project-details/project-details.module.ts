// ********** MODULES **********
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// ********** COMPONENTS **********
import { ProjectDetailsComponent } from './project-details.component'

// ********** ROUTES **********
import { RouterModule, Routes } from '@angular/router'
const detailsRoutes: Routes = [
  { path: 'project', component: ProjectDetailsComponent },
]

@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(detailsRoutes)],
})
export class ProjectDetailsModule {}
