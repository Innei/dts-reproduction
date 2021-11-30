export type RequestProxyResult<
  T,
  R = { data: T; [key: string]: any },
> = Promise<ResponseProxyExtraRaw<T, R>>

export type ResponseProxyExtraRaw<T, R = any> = T & {
  $raw: R
}
