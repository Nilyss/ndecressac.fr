import { createSelector } from '@ngrx/store'
import { ExperienceState } from './experienceReducer'

export interface AppState {
  experiences: ExperienceState
}

export const selectExperiences = (state: AppState) => state.experiences

export const selectEducationExperiences = createSelector(
  selectExperiences,
  (state: ExperienceState) => state.educationExperiences
)

export const selectProfessionalExperience = createSelector(
  selectExperiences,
  (state: ExperienceState) => state.professionalExperiences
)
