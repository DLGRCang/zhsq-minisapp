
import http from '../../../utils/api'
// pages/index/My_Settled/My_Settled.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rows:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.wdrzList()
  },

  wdrzList(){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.wdrzApi({
      data:{
        unifiedUserId:wx.getStorageSync('user').userId
      },
      success:res=>{
        this.setData({
          rows:res.rows
        })
        wx.hideLoading({
          success: (res) => {},
        })
        console.log(res)
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