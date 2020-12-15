// 在这里面定义所有接口，一个文件管理所有接口，易于维护
import { http } from './http'; // 引入刚刚封装好的http模块，import属于ES6的语法，微信开发者工具必须打开ES6转ES5选项

// 邻里圈列表
function xinwenApi(params) { 
  http('neighbor/listpageneighbor', 'get', params)  // 接口请求的路由地址以及请求方法在此处传递
}
// 邻里圈发布按钮
function llqfbApi(params) { 
  http('neighbor/saveneighbor', 'post', params)  // 接口请求的路由地址以及请求方法在此处传递
}
// 邻里圈浏览量增加接口
function llqlllzjApi(params) { 
  http('neighbor/views', 'post', params)  // 接口请求的路由地址以及请求方法在此处传递
}

//社区党建
function partyApi(params){
  http('constructions/listpageconstructions','get', params)
}

//党群服务
function dqfwApi(params){
  http('constructionsactivity/listpageconstructionsactivity/ser','get', params)
}
//党群服务热门
function dqfwrmApi(params){
  http('constructionsactivity/popularListpageconstructionsactivity/ser','get', params)
}
//党群服务评分
function dqfwpfApi(params){
  http('constructionsactivity/scoreListpageconstructionsactivity/ser','get', params)
}

//党群服务详情
function dqDetailsApi(params){
  http('constructionsactivity/getconstructionsactivity/'+params.data.constructionsActivityId,'get', params)
}

//社区活动
function commApi(params){
  http('constructionsactivity/listpageconstructionsactivity/act','get', params)
}
//社区活动热门
function commrmApi(params){
  http('constructionsactivity/popularListpageconstructionsactivity/act','get', params)
}
//社区活动评分
function commpfApi(params){
  http('constructionsactivity/scoreListpageconstructionsactivity/act','get', params)
}

//社区活动详情
function hdDetailsApi(params){
  http('constructionsactivity/getconstructionsactivity/'+params.data.constructionsActivityId,'get', params)
}

//社区活动报名
function bmDetailsApi(params){
  http('constructionssignup/saveconstructionssignup','post', params)
}

//场地列表
function cdApi(params){
  http('constructionsplace/listpageconstructionsplace','get', params)
}
//场地列表热门
function cdrmApi(params){
  http('constructionsplace/remenlistPageConstructionsPlace','get', params)
}
//场地列表评分
function cdpfApi(params){
  http('constructionsplace/pingfenlistPageConstructionsPlace','get', params)
}

//场地列表详情
function cdDetailsApi(params){
  //console.log('constructionsplace/getconstructionsplace/'+params.data.constructionsActivityId)
  http('constructionsplace/getconstructionsplace/'+params.data.constructionsActivityId,'get', params)
}

//小区投票列表
function tpApi(params){
//console.log(params)
  http('vote/listpagevoteFront/0/'+params.data.votePeopleId,'get',params)
}

//小区投票按钮
function tpanApi(params){
  http('voterecord/savevoterecord','post',params)
}

//问卷调查
function wjApi(params){
  http('questionnaire/listpagequestionnaire','get',params)
}

//问卷调查详情
function wjdcApi(params){
  //console.log(params)
  http('vote/questionnaireList/'+params.data.questionnaireId,'get',params)
}

//投票详情列表
function tpxqApi(params){
  //console.log(params)
  http('vote/getvote/'+params.data.voteId,'get',params)
}
//投票详情数量
function tpxqslApi(params){
  //console.log(params)
  http('voterecord/votingStatistics/'+params.data.voteId,'get',params)
}

//房屋出租列表
function fwczApi(params){
  //console.log(params)
  http('rentroom/listrentroom','get',params)
}
// //房屋出租详情列表
// function fwczxqApi(params){
//   //console.log(params)
//   http('rentroom/getrentroom/'+params.data.rentRoomId,'get',params)
// }

//投诉建议
function tsjyApi(params){
  http('complaint/savecomplaint','post',params)
}

//入住小区
function rzxqApi(params){
  http('residentsInfo/saveresidentsinfo','post',params)
}

//我的发布——邻里圈
function wdfbLlqApi(params){
  http('neighbor/listByCreatePeopleId/'+params.data.createPeopleId,'get',params)
}
//我的发布——房屋
function wdfbfwApi(params){
  http('rentroom/getListByResidentsId/'+params.data.residentsId,'get',params)
}

//我的入住
function wdrzApi(params){
  http('residentsInfo/mySettled/'+params.data.unifiedUserId,'get',params)
}

//新增房屋出租
function xzfwczApi(params){
  http('rentroom/saverentroom','post',params)
}
//修改出租房屋
function xgczfwApi(params){
  //console.log(params)
  http('rentroom/updaterentroom/'+params.data.rentRoomIds,'put',params)
}
//删除出租房屋
function scczfwApi(params){
  //console.log(params)
  http('rentroom/appUpdateRentRoom/'+params.data.rentRoomIds,'put',params)
}

//个人缴费列表
function myjfApi(params){
  http('housepay/payMoneyList/'+params.data.unifiedUserId,'get',params)
}

//邻里圈标签
function llqbqApi(params){
  http('dictionaries/codelistofGet/000100050002','get',params)
}


export default { // 暴露接口
  xinwenApi,
  llqfbApi,
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
  cdrmApi,
  cdpfApi,
  cdDetailsApi,
  tpApi,
  tpanApi,
  wjApi,
  wjdcApi,
  tpxqApi,
  fwczApi,
  llqlllzjApi,
  tsjyApi,
  rzxqApi,
  tpxqslApi,
  wdfbLlqApi,
  wdfbfwApi,
  wdrzApi,
  xzfwczApi,
  xgczfwApi,
  scczfwApi,
  myjfApi,
  llqbqApi
}