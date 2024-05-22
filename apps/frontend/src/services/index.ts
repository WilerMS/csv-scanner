import { delay } from '@/utils/delay'

export interface ErrorResponse { error: true, name: string, status: number, message: string }
interface SuccessResponse { error: undefined, message: string, data?: any[] }

type PostServiceResponse = ErrorResponse | SuccessResponse
type PostServiceReturnType = [ErrorResponse?, SuccessResponse?]

export const postService = async (url: string, req: RequestInit): Promise<PostServiceReturnType> => {
  try {
    await delay(3000)
    const res = await fetch(url, { method: 'post', ...req })

    const data = await res.json() as PostServiceResponse

    return (data.error) ? [data, undefined] : [undefined, data]
  } catch (err) {
    console.log(err)
    return [{
      status: 500,
      error: true,
      name: 'InternalError',
      message: 'Algo salió mal, vuelve a intentarlo más tarde.'
    }]
  }
}

export type FetchserviceResponse = ErrorResponse | any[]
type FetchserviceReturnType = [ErrorResponse?, any[]?]

export const fetchService = async (url: string, req?: RequestInit): Promise<FetchserviceReturnType> => {
  try {
    const res = await fetch(url, { method: 'get', ...req })

    const data = await res.json() as FetchserviceResponse

    return (!res.ok) ? [data as ErrorResponse, undefined] : [undefined, data as any[]]
  } catch (err) {
    console.log(err)
    return [{
      status: 500,
      error: true,
      name: 'InternalError',
      message: 'Algo salió mal, vuelve a intentarlo más tarde.'
    }]
  }
}
