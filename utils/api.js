// 在这里面定义所有接口，一个文件管理所有接口，易于维护
import { http } from './http'; // 引入刚刚封装好的http模块，import属于ES6的语法，微信开发者工具必须打开ES6转ES5选项
import {https} from './https';

function xinwenApi(params) { // 新闻详情
  http('neighbor/listpageneighbor', 'get', params)  // 接口请求的路由地址以及请求方法在此处传递
}
//社区党建
function partyApi(params){
  https('constructions/listpageconstructions','get', params)
}

//党群服务
function dqfwApi(params){
  https('constructionsactivity/listpageconstructionsactivity/ser','get', params)
}
//党群服务热门
function dqfwrmApi(params){
  https('constructionsactivity/popularListpageconstructionsactivity/ser','get', params)
}
//党群服务评分
function dqfwpfApi(params){
  https('constructionsactivity/scoreListpageconstructionsactivity/ser','get', params)
}

//党群服务详情
function dqDetailsApi(params){
  https('constructionsactivity/getconstructionsactivity/'+params.data.constructionsActivityId,'get', params)
}

//社区活动
function commApi(params){
  https('constructionsactivity/listpageconstructionsactivity/act','get', params)
}
//社区活动热门
function commrmApi(params){
  https('constructionsactivity/popularListpageconstructionsactivity/act','get', params)
}
//社区活动评分
function commpfApi(params){
  https('constructionsactivity/scoreListpageconstructionsactivity/act','get', params)
}

//社区活动详情
function hdDetailsApi(params){
  https('constructionsactivity/getconstructionsactivity/'+params.data.constructionsActivityId,'get', params)
}

//社区活动报名
function bmDetailsApi(params){
  https('constructionssignup/saveconstructionssignup','post', params)
}

//场地列表
function cdApi(params){
  http('constructionsplace/listpageconstructionsplace','get', params)
}

//场地列表详情
function cdDetailsApi(params){
  console.log('constructionsplace/getconstructionsplace/'+params.data.constructionsActivityId)
  http('constructionsplace/getconstructionsplace/'+params.data.constructionsActivityId,'get', params)
}

//小区投票
function tpApi(params){
  http('vote/listvote','get',params)
}



export default { // 暴露接口
  xinwenApi,
  partyApi,
  dqfwApi,
  dqfwrmApi,
  dqfwpfApi,
  dqDetailsApi,
  commApi,
  commrmApi,
  commpfApi,
  hdDetailsApi,
  bmDetailsApi,
  cdApi,
  cdDetailsApi,
  tpApi
}