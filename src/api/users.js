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
// 获取用户详情
// 我们当前所请求的api是需要授权的api,所以要根据后台的要求传入用户状态
export const getUserInfo = (id) => {
  return axios({
    // 这个状态需要根据后台的严格要求进行传递
    // 后台要求使用：Authorization做为键,token做为值
    // headers: {
    //   Authorization: localStorage.getItem('heima_40_token')
    // },
    method: 'get',
    url: `/user/${id}`
  })
}
