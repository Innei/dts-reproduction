import { RequestProxyResult } from '~/interfaces/request'

export const foo = (): RequestProxyResult<{}> => {
  // not care this, just force asserting a type
  return {} as any
}
