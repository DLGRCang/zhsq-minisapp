// pages/index/setting/setting.js
import verif from '../../../../utils/verification'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
   //收货地址-跳转
   addressClick:function(){
    wx.navigateTo({
      url: '/pages/index/user/setting_address/setting_address'
    })
  },

  qhjiaose(){
    if(verif.checkLogin()){
      wx.navigateTo({
        url: '/pages/index/UserSelection/UserSelection'
      })
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