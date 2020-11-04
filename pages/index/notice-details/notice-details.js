// pages/notice-details/notice-details.js
import https from '../../../utils/api'
let wxParse = require('../../../wxParse/wxParse')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "data": {
      "CHANNEL_ID": "2970c6f510284465b32071dace908732",
      "SITE_ID": "6e8917477c7f425eb6b26cf5f2046fba",
      "VISITS": 6,
      "filePicList": [],
      "SITE_NAME": "党建工作",
      "CHANNEL_NAME": "支部动态",
      "STATUS": 1,
      "NEWS_ID": "0e0c1a1793cb4f0aa22c8b0d0be71be6",
      "SUMMARY": "",
      "videoList": [],
      "ATTACHMENTS": "878a105c40db47b898de1e15b6136fda",
      "SOURCE": "内蒙古自治区国家保密局",
      "TITLE": "自治区国家保密局科技处党支部组织开展“厉行节约 反对浪费”主题交流活动",
      "CONTENT": "<p style=\"line-height: 2em; text-indent: 0em;\"><span style=\"caret-color: rgb(80, 80, 80); color: rgb(80, 80, 80); font-family: 微软雅黑; font-size: 14px; text-align: center; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">&nbsp;</span></p><p style=\"text-align:center\"><img src=\"http://www.nmgbm.gov.cn/u/cms/www/202010/15193713rk90.jpg\" title=\"1.jpg\" style=\"box-sizing: border-box; border: 0px; max-width: 100%; vertical-align: middle; caret-color: rgb(80, 80, 80); color: rgb(80, 80, 80); font-family: 微软雅黑; font-size: 14px; text-align: center; white-space: normal; text-size-adjust: auto;\"/></p><p style=\"text-indent: 2em; line-height: 2em;\"><span style=\"font-family: 宋体, SimSun;\">“餐饮浪费现象，触目惊心、令人痛心！”近日，习近平总书记对制止餐饮浪费行为作出重要指示，强调要采取有效措施，建立长效机制，坚决制止餐饮浪费行为。</span></p><p style=\"text-align:center\"><img src=\"http://www.nmgbm.gov.cn/u/cms/www/202010/151937138cvl.jpg\" title=\"2.jpg\" style=\"box-sizing: border-box; border: 0px; max-width: 100%; vertical-align: middle; caret-color: rgb(80, 80, 80); color: rgb(80, 80, 80); font-family: 微软雅黑; font-size: 14px; text-align: center; white-space: normal; text-size-adjust: auto;\"/></p><p style=\"text-indent: 2em; line-height: 2em;\"><span style=\"font-family: 宋体, SimSun;\">为贯彻落实习近平总书记指示批示精神，大力弘扬中华民族勤俭节约的优良传统，8月21日，科技处党支部组织开展“厉行节约 反对浪费”主题交流活动。活动邀请自治区国家保密局总工程师高建伟同志到会指导。</span></p><p style=\"text-indent: 2em; line-height: 2em;\"><span style=\"font-family: 宋体, SimSun;\">会议首先由卢山同志领学新华社文章—《习近平对制止餐饮浪费行为作出重要指示》。</span></p><p style=\"text-align:center\"><span style=\"font-family: 宋体, SimSun;\"><img src=\"http://www.nmgbm.gov.cn/u/cms/www/202010/15193713fetc.jpg\" title=\"3.jpg\" style=\"box-sizing: border-box; border: 0px; max-width: 100%; vertical-align: middle; caret-color: rgb(80, 80, 80); color: rgb(80, 80, 80); font-family: 微软雅黑; font-size: 14px; text-align: center; white-space: normal; text-size-adjust: auto;\"/></span></p><p style=\"text-indent: 2em; line-height: 2em;\"><span style=\"font-family: 宋体, SimSun;\">随后，支部党员就如何落实厉行节约、反对浪费进行了交流讨论。</span></p><p style=\"text-align:center\"><img src=\"http://www.nmgbm.gov.cn/u/cms/www/202010/15193713yx76.jpg\" title=\"4.jpg\" style=\"box-sizing: border-box; border: 0px; max-width: 100%; vertical-align: middle; caret-color: rgb(80, 80, 80); color: rgb(80, 80, 80); font-family: 微软雅黑; font-size: 14px; text-align: center; white-space: normal; text-size-adjust: auto;\"/></p><p style=\"text-indent: 2em; line-height: 2em;\"><span style=\"font-family: 宋体, SimSun;\">最后，科技处党支部发出倡议，要求支部党员大力倡导勤俭节约、文明健康的生活方式和消费方式，拒绝“舌尖上的浪费”，做好“厉行节约 反对浪费”的践行者、宣传员、捍卫者，让“克勤克俭”“戒奢以俭”的价值理念真正蔚然成风。</span></p><p style=\"text-indent: 2em; line-height: 2em;\"><span style=\"font-family: 宋体, SimSun;\">高总工带头在倡议书上签字，并对此次党日活动给予了“紧跟时代主题、响应总书记号召、回应社会关切”的高度评价！</span></p><p style=\"text-align:center\"><img src=\"http://www.nmgbm.gov.cn/u/cms/www/202010/15193918tbmc.jpg\" title=\"5.jpg\" style=\"box-sizing: border-box; border: 0px; max-width: 100%; vertical-align: middle; caret-color: rgb(80, 80, 80); color: rgb(80, 80, 80); font-family: 微软雅黑; font-size: 14px; text-align: center; white-space: normal; text-size-adjust: auto;\"/></p><p style=\"text-indent: 2em; line-height: 2em;\"><span style=\"font-family: 宋体, SimSun;\">活动结束后，大家纷纷表示：家无俭不旺，党无俭不立，国无俭不兴，一粥一饭，来之不易，我们要高标准落实习近平总书记的重要指示，开展“光盘行动”，杜绝“舌尖上的浪费”，让“厉行节约、反对浪费”成为新风尚。</span></p><p style=\"text-align: center;\"><img src=\"http://www.nmgbm.gov.cn/u/cms/www/202010/151939189byk.jpg\" title=\"6.jpg\" style=\"box-sizing: border-box; border: 0px; max-width: 100%; vertical-align: middle; caret-color: rgb(80, 80, 80); color: rgb(80, 80, 80); font-family: 微软雅黑; font-size: 14px; text-align: center; white-space: normal; text-size-adjust: auto;\"/></p>",
      "PUBLISH_DATE": "2020-10-15 19:40:20",
      "FILE": "",
      "OLD_NEWS_ID": "b2cc3ff572d94642a8766d9d22d20719",
      "TYPE": 2
  }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
// https.xinwenApi({
//       data:{
//         newsId:"0e0c1a1793cb4f0aa22c8b0d0be71be6"
//       },
//       success:res=>{
//         console.log(res)
//       },
//       fail:err=>{
//         console.log(err)
//       }
//     })
this.htmls()
  },
  htmls(){
    console.log(this.data.data)
    let that=this;
    let shuju = that.data.data.CONTENT
    wxParse.wxParse('dataHtml','html',shuju,that, 5)
  },
  navTui(){
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})