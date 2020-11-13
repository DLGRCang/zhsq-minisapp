// pages/index/t4/t4.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    isStar: false, // 默认没有收藏
    isShare: true, // 默认有分享
    isShare: false, // 默认没有赞
  },
  // 点击收藏
  toStar () {
    var bol = this.data.isStar; // 获取状态
    this.setData({
      isStar:!bol // 改变状态
    })
    },
  // 点击分享
  toShare () {
    var bol = this.data.isShare; // 获取状态
    this.setData({
      isShare:!bol // 改变状态
    })
    },
  // 点赞/取消点赞
  toZan () {
    var bol = this.data.isZan; // 获取状态
    this.setData({
      isZan:!bol // 改变状态
    })
    },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  pageBack() {
    wx.navigateBack({
      delta: 1
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 发布
  fabu:function(){
    wx.navigateTo({
      url: '/pages/index/Llq_pub/Llq_pub'
    })
  },

  lljClick:function(){

    wx.navigateTo({
      url: '/pages/index/neighborhood-details/llq_xq'
    })
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