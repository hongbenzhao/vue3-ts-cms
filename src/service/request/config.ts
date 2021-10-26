// 1 使用环境变量 process.env.NODE_ENV
let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  // 测试 http://123.207.32.32:8000/
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'www.baidu.com'
}
export { BASE_URL }
