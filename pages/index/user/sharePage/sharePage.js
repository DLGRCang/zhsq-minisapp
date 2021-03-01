// pages/index/user/sharePage/sharePage.js
import verif from '../../../../utils/verification'
import drawQrcode from '../../../../utils/weapp.qrcode.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    textCon:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.comId);
    this.setData({
      textCon:options.comId
    })
    drawQrcode({
      width: 200,
      height: 200,
      x: 0,
      y: 0,
      canvasId: 'myQrcode',
      // ctx: wx.createCanvasContext('myQrcode'),
      typeNumber: 10,
      text: options.comId,
      // image: {
      //   imageResource: '../../images/icon.png',
      //   dx: 70,
      //   dy: 70,
      //   dWidth: 60,
      //   dHeight: 60
      // },
      callback(e) {
        //console.log('e: ', e)
      }
    })
  },

  fuzhiClick: function (e) {
    var that =  this
    wx.setClipboardData({
      data: that.data.textCon,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },

  fhHome(){
    wx.reLaunch({
      url: '/pages/index/index'
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