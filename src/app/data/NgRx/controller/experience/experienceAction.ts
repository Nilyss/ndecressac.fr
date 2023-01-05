import { createAction, props } from '@ngrx/store'

// Models
import { Experience } from '../../models/experience'
export const initApp = createAction('Init Experiences list')

export const getEducationExperiences = createAction(
  '[Experiences] Get education experiences',
  props<{ educationExperiences: Experience['educations'][] }>()
)

export const getProfessionalExperience = createAction(
  '[Experiences] Get professional experiences',
  props<{ professionalExperiences: Experience['professionalExperiences'][] }>()
)
