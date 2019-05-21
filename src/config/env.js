/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = ''
const routerMode = ''
let baseImgPath

if (process.env.NODE_ENV === 'development') {
  baseUrl = '/api'
  baseImgPath = ''
} else {
  baseUrl = ''
  baseImgPath = ''
}

export { baseUrl, routerMode, baseImgPath }
