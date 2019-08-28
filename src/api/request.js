import Axios from 'axios'
import qs from 'qs'
import config from '@/config'

const instance = Axios.create({
  baseURL: config.baseUrl
});
//定义格式
instance.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

const get = (url,params)=>{
  return instance.get(url,{
    params
  })
}

const post = (url,params) =>{
  return instance.post(url,{
    ...params
  })
}

const postForm = (url,form)=>{
  return instance.post(url,qs.stringify(form))
}

export default{
  get,post,postForm
}