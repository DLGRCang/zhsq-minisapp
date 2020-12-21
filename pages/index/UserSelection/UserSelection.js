// pages/index/UserSelection/UserSelection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sfUset:[
      {id:0,user:"社区用户"},
      {id:1,user:"商家"},
      {id:2,user:"物业管理人员"},
      {id:3,user:"物业人员"}
    ],
    sxId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  szsfClick(e){
    //console.log(e.currentTarget.dataset.id)
    this.setData({
      sxId:e.currentTarget.dataset.id
    })
  },
  xybClick(){
    if(this.data.sxId == 0){
      wx.setStorageSync('indexId', 1)
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }else if(this.data.sxId == 1){
      wx.setStorageSync('indexId', 2)
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }else if(this.data.sxId == 2||this.data.sxId == 3){
      wx.setStorageSync('indexId', 3)
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }
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