// pages/index/my_publish/my_publish.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:false,

      // tab 切换
      tabArr: {
        curHdIndex: 0,
        curBdIndex: 0
      }, 
      // tab 切换
     tabArr01: {
        curHdIndex: 0,
        curBdIndex: 0
      },  
      StatusBar: app.globalData.StatusBar,
      CustomBar: app.globalData.CustomBar,
      ColorList: app.globalData.ColorList,
      isStar: false, // 默认没有收藏
      isShare: true, // 默认有分享
      isShare: false, // 默认没有赞
},
// 我的发布tab切换
    tab: function (e) {
    //var dataId = e.currentTarget.dataset.id;
    var dataId = e.currentTarget.id;
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr: obj
    })
},  
// 房屋tab切换
tab01: function (e) {
  //var dataId = e.currentTarget.dataset.id;
  var dataId = e.currentTarget.id;
  var obj = {};
  obj.curHdIndex = dataId;
  obj.curBdIndex = dataId;
  this.setData({
    tabArr01: obj
  })
},  
// 房屋发布跳转
fbfy(){
  wx.navigateTo({
    url: '/pages/index/lease/lease'
  })
},
// 房屋详情跳转
xiangqing(){
  wx.navigateTo({
    url: '/pages/index/houseRental-details/czxq'
  })
},
// 邻里圈的发布
fabu:function(){
  wx.navigateTo({
    url: '/pages/index/Llq_pub/Llq_pub'
  })
},
 // 移动巡查发布跳转
 update(){
  wx.navigateTo({
    url: '/pages/index/lease/lease'
  })
},
// 删除按钮
Delete:function(){
    
},
// 邻里圈点击进入详情
lljClick:function(){
  wx.navigateTo({
    url: '/pages/index/neighborhood-details/llq_xq'
  })
},
  // 点击收藏
  toStar () {
    var bol = this.data.isStar; // 获取状态
    this.setData({
      isStar:!bol // 改变状态
    })
    },
  // 点击分享
  toShare () {
    var bol = this.data.isShare; // 获取状态
    this.setData({
      isShare:!bol // 改变状态
    })
    },
  // 点赞/取消点赞
  toZan () {
    var bol = this.data.isZan; // 获取状态
    this.setData({
      isZan:!bol // 改变状态
    })
    },

   //邻里圈-跳转
  //  llqClick:function(){
  //   wx.navigateTo({
  //     url: '/pages/index/neighborhood-details/llq_xq'
  //   })
  // },
     //房屋-跳转
    //  fwClick:function(){
    //   wx.navigateTo({
    //     url: '/pages/index/houseRental-details/czxq'
    //   })
    // },
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