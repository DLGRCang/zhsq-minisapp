// pages/index/UserSelection/UserSelection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sfUset:[
      // {id:0,user:"社区用户"},
      // {id:1,user:"商家"},
      // {id:2,user:"物业管理人员"},
      // {id:3,user:"物业人员"}
    ],
    sxId:0,
    items:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(wx.getStorageSync('xzvillage'))
    this.setData({
      sfUset:wx.getStorageSync('xzvillage').roleList
    })
  },
  szsfClick(e){
    //console.log(e.currentTarget.dataset.item)
    this.setData({
      sxId:e.currentTarget.dataset.item.roleId,
      items:e.currentTarget.dataset.item
    })
  },
  xybClick(){
    //console.log(this.data.sxId)
    if(this.data.sxId == "38b30fb9-8589-4019-a466-e5175fde8978"){
      wx.setStorageSync('indexId', 1)
    }else if(this.data.sxId == "14f29566-0214-4a63-8630-e65e778c8d95"){
      wx.setStorageSync('indexId', 2)
    }else{
      wx.setStorageSync('wyUser', this.data.items)
      wx.setStorageSync('indexId', 3)
    }

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