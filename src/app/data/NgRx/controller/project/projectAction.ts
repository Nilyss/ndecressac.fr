import { createAction, props } from '@ngrx/store'

// Models
import { Project } from '../../models/project'

export const initApp = createAction('Init Project')

export const getProjects = createAction(
  '[Project] Get Projects',
  props<{ project: Project[] }>()
)
