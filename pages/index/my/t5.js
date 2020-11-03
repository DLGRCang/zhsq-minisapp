// pages/index/t5/t5.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    t5state:[
      {id:1,img:'../../../images/t5/state1.png',text:'我的发布'},
      {id:2,img:'../../../images/t5/state2.png',text:'我的收藏'},
      {id:3,img:'../../../images/t5/state3.png',text:'我的点赞'},
      {id:4,img:'../../../images/t5/state4.png',text:'我的评论'}
    ],
    rightHui:'../../../images/t5/right-hui.png'
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
    console.log(this.data.t5state)
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