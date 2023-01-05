import { Action, createReducer, on } from '@ngrx/store'

// Models
import { Experience } from '../../models/experience'

// Actions
import * as ExperienceActions from './experienceAction'

export interface ExperienceState {
  educationExperiences: Experience['educations'][]
  professionalExperiences: Experience['professionalExperiences'][]
}

export const initialState = {
  educationExperiences: [],
  professionalExperiences: [],
}

export const experienceReducer = createReducer(
  initialState,
  on(ExperienceActions.initApp, (state) => {
    return {
      ...state,
    }
  }),
  on(ExperienceActions.getEducationExperiences, (state, props) => {
    return {
      ...state,
      educationExperiences: props.educationExperiences,
    }
  }),
  on(ExperienceActions.getProfessionalExperience, (state, props) => {
    return {
      ...state,
      professionalExperiences: props.professionalExperiences,
    }
  })
)

export function ExperienceReducer(state: ExperienceState, action: Action) {
  return experienceReducer(state, action)
}
