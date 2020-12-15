// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  notTemporarily() {
    wx.navigateBack({
      delta: 1
    })
  },
  bindGetUserInfo(e) {
    //console.log(e)
    if (e.detail.userInfo != undefined){
      wx.getUserInfo({
        success: res => {
          wx.setStorageSync('wxUser',res)
        }
      })
      var user = {
        userId:'100',
        floorId:'c12279b2-1b2a-40e4-a34e-9ab9104279f7',
        unitId:'a1e60cbe-19d0-4755-80cf-67ea43d29136',
        roomId:'461a4ce2-595f-45cc-b0d4-dd2d0add873a'
      }

      wx.setStorageSync('user', user)
      //后台授权
      wx.showToast({
        title: '登录成功',
      })
      
      
      setTimeout(()=>{
        wx.navigateBack({
          delta: 1
        })
      },1000)
    }
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