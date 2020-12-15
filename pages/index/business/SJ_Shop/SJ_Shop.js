// pages/index/SJ_Shop/SJ_Shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
      // 店铺营收跳转
  feedbackClick:function(){
    wx.navigateTo({
      url: '/pages/index/business/Sj_revenue/Sj_revenue'
    })
  },
        // 店铺信息跳转
        dpxx:function(){
          wx.navigateTo({
            url: '/pages/index/business/Sj_dpxx/Sj_dpxx'
          })
        },
  // 店铺认证跳转
  aboutMe:function(){
    wx.navigateTo({
      url: '/pages/index/business/Sj_dprz/Sj_dprz'
    })
  },
  // 切换角色
  qhjiaose(){

      wx.setStorageSync('indexId', 3)
  
    wx.reLaunch({
      url: '/pages/index/index'
    })
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