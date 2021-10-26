class LocalCache {
  setCatch(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }
  getCatch(key: string) {
    const value = window.sessionStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleCache(key: string) {
    window.sessionStorage.removeItem(key)
  }
  clearCache() {
    window.sessionStorage.clear()
  }
}
export default new LocalCache()
