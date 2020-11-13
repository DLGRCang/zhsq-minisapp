// pages/index/My_appointment/My_appointment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Length:7,    //输入框个数 
    isFocus:true,  //聚焦 
    Value:"",    //输入的内容 
    ispassword:false, //是否密文显示 true为密文， false为明文。
     // tab 切换
     tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    }, 
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

// 场地预约 跳转详情
xiangqing(){
  wx.navigateTo({
    url: '/pages/index/service/cd_fwxq'
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  
  floorTui:function(){
    wx.navigateBack({
      delta: 1
    })
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