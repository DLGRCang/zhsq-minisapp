// pages/index/WY_tzfb/WY_tzfb.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shows: false,
    date: '2018年12月',
  },
  DateChange(e) {
    let datemonth = e.detail.value
    this.setData({
      date: datemonth.replace("-","年")+"月"
    })
   
  },

  bjClick:function(){
    // console.log(2);
      var that = this;
      var sh = that.data.shows;
      that.setData({
        shows: !sh
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