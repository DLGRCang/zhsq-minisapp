// pages/index/t1/t1.js
import common from '../../../utils/common'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datat1:[
      {id:1,image:'../../../images/t1/tb01.png',text:"访客通行"},
      {id:2,image:'../../../images/t1/tb02.png',text:"物业维修"},
      {id:3,image:'../../../images/t1/tb03.png',text:"物业缴费"},
      {id:4,image:'../../../images/t1/tb04.png',text:"生活缴费"},
      {id:5,image:'../../../images/t1/tb05.png',text:"楼栋布局"},
      {id:6,image:'../../../images/t1/tb06.png',text:"活动设施"},
      {id:7,image:'../../../images/t1/tb07.png',text:"SOS求助"},
      {id:8,image:'../../../images/t1/tb08.png',text:"查看全部"}
    ]
  },
 //点击登录
 loginClick(){
  common.checkLogin()

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