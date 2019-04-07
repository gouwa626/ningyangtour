import axios from 'axios'
import qs from 'qs'

// post请求
export function axiosPost(url, options, header = {}) {
  return axios.post(url, qs.stringify(options), header)
}
// post请求 上传图片
export function axiosPostUpload(url, options, header = {}) {
  return axios.post(url, options, header)
}
// get请求
export function axiosGet(url, options, header = {}) {
  return axios.get(paramsUrl(url, options), header)
}

// delete请求
export function axiosDelete(url, options, header) {
  return axios.delete(paramsUrl(url, options), header)
}

// 处理get请求参数拼在url后
function paramsUrl(url, options) {
  if (!url) {
    return
  }

  if (!options) {
    return url
  }

  let str = '?'

  for (let k in options) {
    str += `${k}=${options[k]}&`
  }

  str = str.substr(0, str.length - 1)

  return url + str
}
