import hbRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return hbRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
