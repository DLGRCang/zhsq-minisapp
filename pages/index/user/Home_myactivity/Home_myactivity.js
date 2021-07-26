// pages/index/Home_myactivity/Home_myactivity.js 
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
import util from '../../../../utils/util'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
    listData:[],
    time:''
  },
    // 社区活动跳转详情页
    sqhd_xq(e){
      //console.log(e)
      var id = e.currentTarget.dataset.id
    
      wx.navigateTo({
        url: '/pages/index/user/communityDetails/sq_hdxq?id='+id
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      time : util.formatTime1(new Date())
    })
//wx.getStorageSync('wxUser').id
this.huodong()
  },

  huodong(){
    console.log(wx.getStorageSync('wxUser').id)
    http.listconstructionssignupApi({
      data:{
        userId:wx.getStorageSync('wxUser').id
      },
      success:res=>{
        console.log(res)
        this.setData({
          listData:res
        })
      }
    })
  },


  qxbaoming(e){
    var id = e.currentTarget.dataset.id
    http.cancelActivityUserApi({
      data:{
        userId:wx.getStorageSync('wxUser').id,
        constructionsActivityId:id
      },
      success:res=>{
        console.log(res)
        verif.tips("取消报名成功")
        this.huodong()
      }
    })
  },

  pingjiaClick(e){
    var item = e.currentTarget.dataset.item
    //console.log(item)
    wx.navigateTo({
      url: '/pages/index/user/Home_myactivity/Home_myactivityPJ/Home_myactivityPJ?item='+JSON.stringify(item)
    })
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