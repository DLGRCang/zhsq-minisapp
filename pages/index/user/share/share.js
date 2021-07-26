// pages/index/user/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pullup:'#1BB1FD',
    textCon:null
  },


    fhHome(){
      wx.reLaunch({
        url: '/pages/index/index'
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.data)
    this.setData({
      textCon:options.data
    })
    setInterval(() => {
      if(this.data.pullup == '#1BB1FD'){
        this.setData({
          pullup:'#0586F8'
        })
      }else{
        this.setData({
          pullup:'#1BB1FD'
        })
      }
    }, 700);
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      
      return {
        title: "通行码",
        path: '/pages/index/user/sharePage/sharePage?comId=' + this.data.textCon
      }
    }
    
  }
})