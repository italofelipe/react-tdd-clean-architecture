import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
  HttpStatusCode
} from '@/data/protocols/http'

export class HttpPostClientSpy<BodyType, Response>
implements HttpPostClient<BodyType, Response> {
  url?: string
  body?: BodyType
  response: HttpResponse<Response> = {
    statusCode: HttpStatusCode.ok
  }

  async post (
    params: HttpPostParams<BodyType>
  ): Promise<HttpResponse<Response>> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
