import hbRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return hbRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return hbRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return hbRequest.post<IDataType>({
    url: url,
    data: newData
  })
}
export function editPageData(url: string, editData: any) {
  return hbRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
