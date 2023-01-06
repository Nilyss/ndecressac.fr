import { createSelector } from '@ngrx/store'
import { ProjectState } from './projectReducer'

export interface AppState {
  project: ProjectState
}

export const selectProject = (state: AppState) => state.project

export const selectProjectData = createSelector(
  selectProject,
  (state: ProjectState) => state.project
)
