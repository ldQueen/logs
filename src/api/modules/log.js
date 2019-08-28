import request from '@/api/request'

const queries = ({count,node,serviceName,start,end,endId}) => {
  return request.postForm('/log/queries',{
    count,node,serviceName,start,end,endId
  })
}
const service = () =>{
  return request.get('/service',{
  })
}
const node = (name) =>{
  return request.get('/service/node',{
    name
  })
  
}

export default{
  queries: queries,
  service: service,
  node: node
}
