export class Experience {
  educations: {
    school: string
    degree: string
    date: string
  }

  professionalExperiences: {
    company: string
    position: string
    date: string
  }

  constructor(
    educations: {
      school: string
      degree: string
      date: string
    },

    professionalExperiences: {
      company: string
      position: string
      date: string
    }
  ) {
    this.educations = educations
    this.professionalExperiences = professionalExperiences
  }
}
