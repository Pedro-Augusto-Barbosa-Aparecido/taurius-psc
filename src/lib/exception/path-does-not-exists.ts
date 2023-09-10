export class PathDoesNotExists extends Error {
  constructor(message: string) {
    super(message)

    this.message = message
    this.name = 'PathDoesNotExists'
  }
}
