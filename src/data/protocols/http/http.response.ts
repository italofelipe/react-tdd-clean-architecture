export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 500,
  serverError = 404,
}
export type HttpResponse<BodyType> = {
  statusCode: HttpStatusCode
  body?: BodyType
}