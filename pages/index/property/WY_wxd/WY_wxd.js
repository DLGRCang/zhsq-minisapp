// pages/index/WY_wxd/WY_wxd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2018年12月',
    shows: false,
     // tab 切换
     tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    }, 
  },
// 结果记录显示 隐藏
  Jgjlshow:function(){
    // console.log(2);
      var that = this;
      var sh = that.data.shows;
      that.setData({
        shows: !sh
      })
  },

  // tab切换
  tab: function (e) {
    //var dataId = e.currentTarget.dataset.id;
    var dataId = e.currentTarget.id;
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr: obj
    })
    //console.log(e);
  },  
  DateChange(e) {
    let datemonth = e.detail.value
    this.setData({
      date: datemonth.replace("-","年")+"月"
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