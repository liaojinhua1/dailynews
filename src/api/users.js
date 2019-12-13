// 这个文件专门用于处理与users表相关的业务
// 引入axios
import axios from '@/utils/axios.js'

// 实现登录验证
export const userLogin = (data) => {
  // axios({})返回是一个promise对象
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
