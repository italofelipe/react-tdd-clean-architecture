import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http.response'

export class HttpPostClientSpy<BodyType, Response> implements HttpPostClient<BodyType, Response> {
  url?: string
  body?: BodyType
  response: HttpResponse<Response> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams<BodyType>): Promise<HttpResponse<Response>> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
