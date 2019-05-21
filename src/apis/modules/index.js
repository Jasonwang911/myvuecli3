import service from '../request'
// import qs from 'qs'

export function mineHelpApi() {
  return service({
    url: '/api/index',
    method: 'post'
  })
}
