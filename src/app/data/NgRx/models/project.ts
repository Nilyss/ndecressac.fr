export class Project {
  _id: string
  name: string
  stack: string
  overview: string
  thumbnail: string
  images: string[]
  url: string
  YtUrl: string

  constructor(
    _id: string,
    name: string,
    stack: string,
    overview: string,
    thumbnail: string,
    images: string[],
    url: string,
    YtUrl: string
  ) {
    this._id = _id
    this.name = name
    this.stack = stack
    this.overview = overview
    this.thumbnail = thumbnail
    this.images = images
    this.url = url
    this.YtUrl = YtUrl
  }
}
