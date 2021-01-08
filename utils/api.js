// 在这里面定义所有接口，一个文件管理所有接口，易于维护
import { http } from './http'; // 引入刚刚封装好的http模块，import属于ES6的语法，微信开发者工具必须打开ES6转ES5选项

// 邻里圈列表
function xinwenApi(params) { 
  http('zhsq/app/release/api/neighbor/listpageneighbor', 'get', params)  // 接口请求的路由地址以及请求方法在此处传递
}
// 邻里圈发布按钮
function llqfbApi(params) { 
  http('zhsq/app/release/api/neighbor/saveneighbor', 'post', params)  // 接口请求的路由地址以及请求方法在此处传递
}
// 邻里圈浏览量增加接口
function llqlllzjApi(params) { 
  http('zhsq/app/release/api/neighbor/views', 'post', params)  // 接口请求的路由地址以及请求方法在此处传递
}

//社区党建
function partyApi(params){
  http('zhsq/app/release/api/constructions/listpageconstructions','get', params)
}

//党群服务
function dqfwApi(params){
  http('zhsq/app/release/api/constructionsactivity/listpageconstructionsactivity/ser','get', params)
}
//党群服务热门
function dqfwrmApi(params){
  http('zhsq/app/release/api/constructionsactivity/popularListpageconstructionsactivity/ser','get', params)
}
//党群服务评分
function dqfwpfApi(params){
  http('zhsq/app/release/api/constructionsactivity/scoreListpageconstructionsactivity/ser','get', params)
}

//党群服务详情
function dqDetailsApi(params){
  http('zhsq/app/release/api/constructionsactivity/getconstructionsactivity/'+params.data.constructionsActivityId,'get', params)
}

//社区活动
function commApi(params){
  http('zhsq/app/release/api/constructionsactivity/listpageconstructionsactivity/act','get', params)
}
//社区活动热门
function commrmApi(params){
  http('zhsq/app/release/api/constructionsactivity/popularListpageconstructionsactivity/act','get', params)
}
//社区活动评分
function commpfApi(params){
  http('zhsq/app/release/api/constructionsactivity/scoreListpageconstructionsactivity/act','get', params)
}

//社区活动详情
function hdDetailsApi(params){
  http('zhsq/app/release/api/constructionsactivity/getconstructionsactivity/'+params.data.constructionsActivityId,'get', params)
}

//社区活动报名
function bmDetailsApi(params){
  http('zhsq/app/release/api/constructionssignup/saveconstructionssignup','post', params)
}

//场地列表
function cdApi(params){
  http('zhsq/app/release/api/constructionsplace/listpageconstructionsplace','get', params)
}
//场地列表热门
function cdrmApi(params){
  http('zhsq/app/release/api/constructionsplace/remenlistPageConstructionsPlace','get', params)
}
//场地列表评分
function cdpfApi(params){
  http('zhsq/app/release/api/constructionsplace/pingfenlistPageConstructionsPlace','get', params)
}

//场地列表详情
function cdDetailsApi(params){
  //console.log('constructionsplace/getconstructionsplace/'+params.data.constructionsActivityId)
  http('zhsq/app/release/api/constructionsplace/getconstructionsplace/'+params.data.constructionsActivityId,'get', params)
}

//小区投票列表
function tpApi(params){
//console.log(params)
  http('zhsq/app/release/api/vote/listpagevoteFront/0/'+params.data.votePeopleId,'get',params)
}

//小区投票按钮
function tpanApi(params){
  http('zhsq/app/release/api/voterecord/savevoterecord','post',params)
}

//问卷调查
function wjApi(params){
  http('zhsq/app/release/api/questionnaire/listpagequestionnaire','get',params)
}

//问卷调查详情
function wjdcApi(params){
  //console.log(params)
  http('zhsq/app/release/api/vote/questionnaireList/'+params.data.questionnaireId,'get',params)
}

//投票详情列表
function tpxqApi(params){
  //console.log(params)
  http('zhsq/app/release/api/vote/getvote/'+params.data.voteId,'get',params)
}
//投票详情数量
function tpxqslApi(params){
  //console.log(params)
  http('zhsq/app/release/api/voterecord/votingStatistics/'+params.data.voteId,'get',params)
}

//房屋出租列表
function fwczApi(params){
  //console.log(params)
  http('zhsq/app/release/api/rentroom/listrentroom','get',params)
}
// //房屋出租详情列表
// function fwczxqApi(params){
//   //console.log(params)
//   http('rentroom/getrentroom/'+params.data.rentRoomId,'get',params)
// }

//投诉建议
function tsjyApi(params){
  http('zhsq/app/release/api/complaint/savecomplaint','post',params)
}

//入住小区
function rzxqApi(params){
  http('zhsq/app/release/api/residentsInfo/saveresidentsinfo','post',params)
}

//我的发布——邻里圈
function wdfbLlqApi(params){
  http('zhsq/app/release/api/neighbor/listByCreatePeopleId/'+params.data.createPeopleId,'get',params)
}
//我的发布——房屋
function wdfbfwApi(params){
  http('zhsq/app/release/api/rentroom/getListByResidentsId/'+params.data.residentsId,'get',params)
}

//我的入住
function wdrzApi(params){
  http('zhsq/app/release/api/residentsInfo/mySettled/'+params.data.unifiedUserId+'/'+params.data.unifiedUserIds,'get',params)
}
//我的入住（户主）
function wdrzhzApi(params){
  http('zhsq/app/release/api/residentsInfo/masterFindByRoomId/'+params.data.unifiedUserIds,'get',params)
}

//新增房屋出租
function xzfwczApi(params){
  http('zhsq/app/release/api/rentroom/saverentroom','post',params)
}
//修改出租房屋
function xgczfwApi(params){
  //console.log(params)
  http('zhsq/app/release/api/rentroom/updaterentroom/'+params.data.rentRoomIds,'put',params)
}
//删除出租房屋
function scczfwApi(params){
  //console.log(params)
  http('zhsq/app/release/api/rentroom/appUpdateRentRoom/'+params.data.rentRoomIds,'put',params)
}

//个人缴费列表
function myjfApi(params){
  http('zhsq/app/release/api/housepay/payMoneyList/'+params.data.unifiedUserId,'get',params)
}

//邻里圈标签
function llqbqApi(params){
  http('zhsq/app/release/api/dictionaries/codelistofGet/000100050002','get',params)
}

//维修单申请提交
function saverepairApi(params){
  http('zhsq/app/release/api/repair/saverepair/'+params.data.unifiedUserId,'post',params)
}
//维修申请人查询的维修记录
function listrepairApi(params){
    http('zhsq/app/release/api/repair/listrepair/'+params.data.unifiedUserId,'get',params)
}

//物业管理人员查询维修列表
function listpagerepairApi(params){
    http('zhsq/app/release/api/repair/listpagerepair','get',params)
}

//技术人员查询自己维修记录
function selfListApi(params){
  http('zhsq/app/release/api/repair/selfList/'+params.data.userId,'put',params)
}

//社区党建
function pubListNewsApi(params){
  http('zhsq/app/release/api/news/listpagenews/'+params.data.channelCode+'/'+params.data.curPage,'get',params)
}

//物业排版
function listArrangeDataApi(params){
  http('zhsq/app/release/api/arrange/listArrangeData/'+params.data.page,'post',params)
}


//安防巡更
function listpropertypatrollingplanApi(params){
  http('zhsq/app/release/api/propertypatrollingplan/listpropertypatrollingplan/'+params.data.curDate,'get',params)
}
//安防巡更查询打卡记录
function listpropertypatrollingplanApi(params){
  http('zhsq/app/release/api/propertypatrollingplan/listpropertypatrollingplan/'+params.data.curDate,'get',params)
}

//根据巡更id查询计划
function compareRecordApi(params){
  http('zhsq/app/release/api/propertypatrollingrecord/getCompareRecords/'+params.data.propertyPatrollingPlanId,'get',params)
}

//登录
function loginApi(params){
  http('app/sign/checkCodeZHSQrelease','post',params)
}
//初次登录
function saveLoginApi(params){
  http('app/sign/saveZhsqWeChatUserrelease','post',params)
}

//新闻
function newsApi(params){
  http('zhsq/api/news/pubListNews/'+params.data.code+'/'+params.data.cur,'get',params)
}

//个人信息
function messageApi(params){
  http('zhsq/app/release/api/residentsInfo/findByUserId/'+params.data.userId,'get',params)
}

//与户主的关系
function codelistApi(params){
  http('zhsq/app/release/api/dictionaries/codelistofGet/000100050001','get',params)
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
  llqbqApi,
  saverepairApi,
  listrepairApi,
  selfListApi,
  pubListNewsApi,
  listpagerepairApi,
  listArrangeDataApi,
  listpropertypatrollingplanApi,
  compareRecordApi,
  loginApi,
  saveLoginApi,
  newsApi,
  messageApi,
  codelistApi,
  wdrzhzApi
}