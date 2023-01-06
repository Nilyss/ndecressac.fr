export class Skill {
  _id: string
  title: string
  message: string

  constructor(_id: string, title: string, message: string) {
    this._id = _id
    this.title = title
    this.message = message
  }
}
