// pages/index/setting_address/setting_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clickId: -1,
    // reason: ['不需要服务了', '买错了', '服务质量不满意', '想购买其他服务项目', '其他原因'],   
  },
  // 点击选中 变色  


     //编辑地址-跳转
     editClick:function(){
      wx.navigateTo({
        url: '/pages/index/user/news_address/news_address'
      })
    },

   //新增收货地址-跳转
   Add_address:function(){
    wx.navigateTo({
      url: '/pages/index/user/news_address/news_address'
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