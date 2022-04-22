// 在这里面定义所有接口，一个文件管理所有接口，易于维护
import { http } from './http'; // 引入刚刚封装好的http模块，import属于ES6的语法，微信开发者工具必须打开ES6转ES5选项

// 邻里圈列表
function xinwenApi(params) { 
  http('zhsq/app/release/api/neighbor/listneighbor/'+params.data.userId+'/'+params.data.villageId, 'get', params)  // 接口请求的路由地址以及请求方法在此处传递
}
// 邻里圈点赞
function goodnumberApi(params) { 
  http('zhsq/app/release/api/goodnumber/goodOrCancel', 'post', params) 
}
// 邻里圈评论
function savecommentApi(params) { 
  http('zhsq/app/release/api/comment/savecomment', 'post', params) 
}
//邻里圈获取评论列表
function getlistCommentByMessageIdApi(params){
  http('zhsq/app/release/api/comment/listPageFindAllComment/'+params.data.commId+'/'+params.data.goodpeopleId+'/'+params.data.curPage,'get',params)
}
// 邻里圈列删除
function removecommentApi(params) { 
  http('zhsq/app/release/api/neighbor/removeneighbor/'+params.data.ids, 'delete', params)  // 接口请求的路由地址以及请求方法在此处传递
}
// 收藏
function collectionrecordApi(params) { 
  http('zhsq/app/release/api/collectionrecord/savecollectionrecord', 'post', params) 
}

// 邻里圈发布按钮
function llqfbApi(params) { 
  http('zhsq/app/release/api/neighbor/saveneighbor', 'post', params) 
}
// 邻里圈浏览量增加接口
function llqlllzjApi(params) { 
  http('zhsq/app/release/api/neighbor/views', 'post', params) 
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
  http('zhsq/app/release/api/questionnaire/listpagequestionnaire?isRelease=1&type='+params.type,'get',params)
}

//问卷调查详情
// function wjdcApi(params){
//   //console.log(params)
//   http('zhsq/app/release/api/vote/questionnaireList/'+params.data.questionnaireId,'get',params)
// }
function wjdcApi(params){
  //console.log(params)
  http('zhsq/app/release/api/vote/listpagevoteFront/'+params.data.type+'/'+params.data.questionnaireId,'get',params)
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
  http('zhsq/app/release/api/residentsInfo/saveresidentsinfo/1','post',params)
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

//民族
function mzApi(params){
  http('zhsq/app/release/api/dictionaries/codelistofGet/00010001','get',params)
}

//邻里圈标签
function llqbqApi(params){
  http('zhsq/app/release/api/dictionaries/codelistofGet/000100050002','get',params)
}
//邻里圈标签
function llqbqApi1(params){
  http('zhsq/app/release/api/dictionaries/codelistofGet/'+params.data.code,'get',params)
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
  http('zhsq/app/release/api/arrange/listArrangeData','get',params)
}

// //安防巡更
// function listpropertypatrollingplanApi(params){
//   http('zhsq/app/release/api/propertypatrollingplan/listpropertypatrollingplan/'+params.data.curDate,'get',params)
// }
//安防巡更查询打卡记录
// function listpropertypatrollingplanApi(params){
//   http('zhsq/app/release/api/propertypatrollingplan/listpropertypatrollingplan/'+params.data.curDate,'get',params)
// }

//根据巡更id查询计划
function compareRecordApi(params){
  http('zhsq/app/release/api/propertypatrollingrecord/getCompareRecords/'+params.data.propertyPatrollingPlanId,'get',params)
}

//物业管理员查询巡更记录
function listpropertypatrollingplanApi(params){
  http('zhsq/app/release/api/propertypatrollingplan/listpropertypatrollingplan/'+params.data.curDate,'get',params)
}

//物业安保人员查询巡更记录
function selfPlanApi(params){
  http('zhsq/app/release/api/propertypatrollingplan/selfPlan/'+params.data.unifiedUserId+"/"+params.data.curDate,'get',params)
}

//物业安保人员扫码打卡
function updateStateApi(params){
  http('zhsq/app/release/api/propertypatrollingplan/updateState/'+params.data.propertyPatrollingPlanId+"/"+params.data.scanCodeTime,'put',params)
}

//获取物业维修人员列表
function listpropertyApi(params){
  http('zhsq/app/release/api/property/listproperty?jobs=ff4348dc-882e-44ec-9138-7aa134ab840c&state=0','get',params)
}

//物业管理员派单
function updaterepairApi(params){
  http('zhsq/app/release/api/repair/order/'+params.data.repairId,'put',params)
}

//物业管理员拒单
function schedulingApi(params){
  http('zhsq/app/release/api/repair/scheduling/'+params.data.repairId,'put',params)
}

//物业维修人员完成维修
function confirmEndApi(params){
  http('zhsq/app/release/api/repair/confirmEnd/'+params.data.repairId,'put',params)
}

//登录
function loginApi(params){
  http('usercenter/app/sign/checkCodeZHSQrelease','post',params)
}
//初次登录
function saveLoginApi(params){
  http('usercenter/app/sign/saveZhsqWeChatUserrelease','post',params)
}

//新闻
function newsApi(params){
  http('zhsq/app/release/api/news/pubListNews/'+params.data.code+'/'+params.data.cur,'get',params)
}

//个人信息
function messageApi(params){
  http('zhsq/app/release/api/residentsInfo/findByUserId/'+params.data.userId,'get',params)
}

//与户主的关系
function codelistApi(params){
  http('zhsq/app/release/api/dictionaries/codelistofGet/000100050001','get',params)
}

//入住小区生成id
function saveZhsqUserInfoApi(params){
  http('app/sign/saveZhsqUserInfo','post',params)
}

//完善个人信息
function savegoodnumberApi(params){
  http('zhsq/app/release/api/residentsInfo/personalInformation/'+params.data.unifiedUserId+'/'+params.data.findvillageId,'post',params)
}

//商家列表
function listpageshoplisApi(params){
  http('zhsq/app/release/api/shoplist/listPageScreenShopLists/'+params.data.type+'/'+params.data.villageid+'/'+params.data.number,'get',params)
}

//生活页面 顶部导航 顶级列表
function getGoodsCategoryTreeByOneApi(params){
  http('zhsq/app/release/api/commoditytype/getGoodsCategoryTreeByOne/'+params.data.level,'get',params)
}

//上级页面获取2级3级列表
function getTypefindParentIdApi(params){
  http('zhsq/app/release/api/commoditytype/getTypefindParentId/'+params.data.commodityTypeId+'/'+params.data.level+'/'+params.data.shopListId,'get',params)
}

//商品所有列表
function listPageCommodityDetailsWeChatApi(params){
  http('zhsq/app/release/api/shopping/listPageShopByLastTypeId/'+params.data.type+'/'+params.data.shopListId,'get',params)
}

//社区党支部
function listpagepartybranchApi(params){
  http('zhsq/app/release/api/partybranch/listpagepartybranch','get',params)
}
//社区党支部
function listPageBranchPeopleBybranchApi(params){
  http('zhsq/app/release/api/branchpeople/listPageBranchPeopleBybranch/'+params.data.partyBranchId,'get',params)
}

//我的点赞
function findByUserIdAndMessageIdApi(params){
  http('zhsq/app/release/api/goodnumber/findByUserIdAndMessageId/'+params.data.goodPeopleId,'get',params)
}

//我的点收藏
function getMyCollectionRecordApi(params){
  http('zhsq/app/release/api/collectionrecord/getMyCollectionRecord/'+params.data.userId+'/'+params.data.collectionResources,'get',params)
}
//我的评论
function getMyCommentApi(params){
  http('zhsq/app/release/api/comment/getMyComment/'+params.data.userId+'/'+params.data.collectionResources,'get',params)
}

//获取商品指标
function findDetailsByShoppingIdApi(params){
  http('zhsq/app/release/api/commoditydetails/findDetailsByShoppingId/'+params.data.shoppingId,'get',params)
}

//场地预约
function saveconstructionsinfoApi(params){
  http('zhsq/app/release/api/constructionsinfo/saveconstructionsinfo','post',params)
}

//新建地址
function saveUserLocationApi(params){
  http('zhsq/app/order/saveUserLocation','post',params)
}

//地址列表
function getLocationByUserApi(params){
  http('zhsq/app/order/getLocationByUser','get',params)
}

//地址修改
function updateUserLocationApi(params){
  http('zhsq/app/order/updateUserLocation','put',params)
}

//删除地址
function deleteUserLocationApi(params){
  http('zhsq/app/order/deleteUserLocation?id='+params.data.id,'DELETE',params)
}

//订单提交
function saveorderApi(params){
  http('zhsq/app/order/saveorder','post',params)
}

//订单查看
function listpageorderApi(params){
  http('zhsq/app/order/listpageorder?buy_peop_id='+params.data.buy_peop_id,'get',params)
}

//查看个人活动列表
function listconstructionssignupApi(params){
  http('zhsq/app/release/api/constructionssignup/listActivityUser?userId='+params.data.userId,'get',params)
}

//取消个人活动
function cancelActivityUserApi(params){
  http('zhsq/app/release/api/constructionssignup/cancelActivityUser?userId='+params.data.userId+"&&constructionsActivityId="+params.data.constructionsActivityId,'get',params)
}

//个人活动
function updateconstructionsactivityScoreApi(params){
  http('zhsq/app/release/api/constructionsactivity/updateconstructionsactivityScore/'+params.data.constructionsActivityId+"/"+params.data.score,'put',params)
}

//访客预约
function savevisitorpassApi(params){
  http('zhsq/app/release/api/visitorpass/savevisitorpass','post',params)
}

//访客二维码
function generateCodeStringApi(params){
  http('zhsq/app/release/api/visitorpass/generateCodeString/'+params.data.generateCodeNumber+"/"+params.data.visitorPassId,'post',params)
}

//查看个人预约通行码
function listVisitorPassByUnifiedUserIdApi(params){
  http('zhsq/app/release/api/visitorpass/listVisitorPassByUnifiedUserId/'+params.data.unifiedUserId,'get',params)
}

//微信支付
function goPayApi(params){
  http('zhsq/app/wxPay/palceOrder','post',params)
}

//商城微信支付
function mallPayApi(params){
  http('zhsq/app/wxPay/mallPay','post',params)
}

//微信支付成功后
function payOrderStateApi(params){
  http('zhsq/app/wxPay/payOrderState','post',params)
}

//商城微信支付成功后
function mallPayOrderStateApi(params){
  http('zhsq/app/wxPay/mallPayOrderState','post',params)
}

//小鱼token
function videocommunicationApi(params){
  http('zhsq/app/release/api/videocommunication/getToken','get',params)
}

//小鱼关闭
function loginOutApi(params){
  http('zhsq/app/release/api/videocommunication/loginOut/'+params.data.userName,'get',params)
}


//人员查询接口
function queryPersonnelListV2Api(params){
  http('zhsqhik/app/release/hikApi/queryPersonnelListV2','post',params)
}

//访客预约
function appointmentApi(params){
  http('zhsqhik/app/release/hikApi/appointment','post',params)
}

//根据token查询预约情况
function getVisitinfoByUSerApi(params){
  http('zhsqhik/app/release/hikApi/getVisitinfoByUSer','get',params)
}

//个人场地预约
function listconstructionsinfoApi(params){
  http('zhsq/app/release/api/constructionsinfo/listconstructionsinfo?status=&userId='+params.data.userId,'get',params)
}

//访客预约生成二维码
function creatQRcodeApi(params){
  http('zhsqhik/app/release/hikApi/creatQRcode?str='+params.data.str,'get',params)
}

//物业维修完成
function confirmFinishApi(params){
  http('zhsq/app/release/api/repair/confirmFinish/'+params.data.repairId,'put',params)
}

//获取json
function tabbarApi(params){
  http('zhsqminiapp/tabbar.json','get',params)
}

//党建地图
function listpartymapApi(params){
  http('zhsq/app/partymap/listpartymap','get',params)
}


//我的民情直达
function listcomplaintApi(params){
  http('zhsq/app/release/api/complaint/listcomplaint?peopleId='+params.data.peopleId,'get',params)
}

//积分1
function listintegralmanagementApi(params){
  http('zhsq/app/integralmanagement/listintegralmanagement','get',params)
}

//积分2
function saveusersintegralApi(params){
  http('zhsq/app/usersintegral/saveusersintegral','post',params)
}

//视频类别
function codelistofGetApi(params){
  http('zhsq/app/release/api/dictionaries/codelistofGet/00010007','get',params)
}

//视频会议列表
function listvideomeetingApi(params){
  http('zhsq/app/videomeeting/listvideomeeting?mettingTheme='+params.data.mettingTheme,'get',params)
}

//新闻浏览
function listassessmentmanageApi(params){
  http('zhsq/app/assessmentmanage/listassessmentmanage','get',params)
}
export default { // 暴露接口
  mallPayOrderStateApi,
  mallPayApi, 
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
  llqbqApi1,
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
  wdrzhzApi,
  saveZhsqUserInfoApi,
  mzApi,
  savegoodnumberApi,
  goodnumberApi,
  collectionrecordApi,
  savecommentApi,
  getlistCommentByMessageIdApi,
  listpageshoplisApi,
  getGoodsCategoryTreeByOneApi,
  getTypefindParentIdApi,
  listPageCommodityDetailsWeChatApi,
  listpagepartybranchApi,
  listPageBranchPeopleBybranchApi,
  findByUserIdAndMessageIdApi,
  getMyCollectionRecordApi,
  getMyCommentApi,
  findDetailsByShoppingIdApi,
  saveconstructionsinfoApi,
  saveUserLocationApi,
  getLocationByUserApi,
  updateUserLocationApi,
  deleteUserLocationApi,
  saveorderApi,
  listpageorderApi,
  listconstructionssignupApi,
  cancelActivityUserApi,
  updateconstructionsactivityScoreApi,
  savevisitorpassApi,
  generateCodeStringApi,
  listVisitorPassByUnifiedUserIdApi,
  goPayApi,
  videocommunicationApi,
  loginOutApi,
  payOrderStateApi,
  queryPersonnelListV2Api,
  appointmentApi,
  getVisitinfoByUSerApi,
  creatQRcodeApi,
  confirmFinishApi,
  removecommentApi,
  tabbarApi,
  listpropertyApi,
  updaterepairApi,
  schedulingApi,
  confirmEndApi,
  selfPlanApi,
  updateStateApi,
  listpartymapApi,
  listcomplaintApi,
  listintegralmanagementApi,
  saveusersintegralApi,
  codelistofGetApi,
  listvideomeetingApi,
  listassessmentmanageApi,
  listconstructionsinfoApi
}