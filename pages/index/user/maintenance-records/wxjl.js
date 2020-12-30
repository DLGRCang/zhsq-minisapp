// pages/my/my.js
import http from '../../../../utils/api'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rows:[],
    windowHeight:app.globalData.windowHeight,
    tabHeight:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.wxjlArr()
  },
  getAddInfo(){
    this.onLoad()
  },
  wxjlArr(){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.listrepairApi({
      data:{
        unifiedUserId:wx.getStorageSync('user').userId
      },
      success:res=>{
        //console.log(res)
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        this.setData({
          rows:res.data.repairDTOList
        })
      },
      fail:err=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").trueClick()
          },
        })
        console.log(err)
      }
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
    var that = this
    var query = wx.createSelectorQuery()
    query.select('#tab').boundingClientRect(function (res) {
      // console.log(res);
      that.setData({
        tabHeight:res.height
       })
    }).exec();
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