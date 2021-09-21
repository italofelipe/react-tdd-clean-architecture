import { HttpResponse } from './http.response'

export type HttpPostParams<BodyType> = {
  url: string
  body?: BodyType
}

export interface HttpPostClient<BodyType, Response> {
  post: (params: HttpPostParams<BodyType>) => Promise<HttpResponse<Response>>
}
