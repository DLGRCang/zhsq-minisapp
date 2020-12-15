// pages/visitor/visitor.js
import verif from '../../../../utils/verification'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Length:7,    //输入框个数 
  isFocus:true,  //聚焦 
  Value:"",    //输入的内容 
  ispassword:false, //是否密文显示 true为密文， false为明文。
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

  floorTui:function(){
    verif.pageBack()
   },
   Focus(e){ 
    var that = this; 
    console.log(e.detail.value);
    var inputValue = e.detail.value; 
    that.setData({ 
     Value:inputValue, 
    }) 
   }, 
   Tap(){ 
    var that = this; 
    that.setData({ 
     isFocus:true, 
    }) 
   }, 

   yuyue(){
    wx.navigateTo({
      url: '/pages/index/user/subscribe/subscribe'
    })
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