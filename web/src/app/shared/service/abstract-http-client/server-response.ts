export class ServerResponse {
  constructor(public data?: any,
              public error?: Error) {
  }
}

export class Error {
  constructor(public status?: number,
              public message?: string) {}
}
