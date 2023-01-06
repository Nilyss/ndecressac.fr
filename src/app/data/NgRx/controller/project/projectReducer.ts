import { Action, createReducer, on } from '@ngrx/store'

// Models
import { Project } from '../../models/project'

// Actions
import * as ProjectActions from './projectAction'

export interface ProjectState {
  project: Project[]
}

export const initialState = {
  project: [],
}

export const projectReducer = createReducer(
  initialState,
  on(ProjectActions.initApp, (state) => {
    return {
      ...state,
    }
  }),
  on(ProjectActions.getProjects, (state, props) => {
    return {
      ...state,
      project: props.project,
    }
  })
)

export function ProjectReducer(state: ProjectState, action: Action) {
  return projectReducer(state, action)
}
