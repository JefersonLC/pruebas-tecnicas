export class FetchError extends Error {
  status: number
  name: string

  constructor(message: string, status: number) {
    super(message)
    this.name = 'FetchError'
    this.status = status
    this.message = message
  }
}