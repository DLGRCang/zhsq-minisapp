// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCollect: true, // 默认有点赞
    isStar: false, // 默认没有收藏
  },

  // 点击收藏
toStar () {
  var bol = this.data.isStar; // 获取状态
  this.setData({
    isStar:!bol // 改变状态
  })
  },
// 点赞/取消点赞
toCollect () {
  var bol = this.data.isCollect; // 获取状态
  this.setData({
  isCollect:!bol // 改变状态
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