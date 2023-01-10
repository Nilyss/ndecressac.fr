import { Action, createReducer, on } from '@ngrx/store'

// Models
import { Project } from '../../models/project'

// Actions
import * as ProjectActions from './projectAction'

export interface ProjectState {
  isHomePageVisited: boolean
  project: Project[]
}

export const initialState = {
  isHomePageVisited: false,
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
      isHomePageVisited: true,
      project: props.project,
    }
  })
)

export function ProjectReducer(state: ProjectState, action: Action) {
  return projectReducer(state, action)
}
