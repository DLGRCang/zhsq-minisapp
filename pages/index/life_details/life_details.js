// pages/index/life_details/life_details.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      // input默认是1  
      num: 0,  
      // 使用data数据对象设置样式名  
      minusStatus: 'disabled'  ,

    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    load: true,
    isCollect: true, // 默认下箭头
    // 三个导航
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    }, 
  },
    // 搜索页面跳转
    Search:function(){
      wx.navigateTo({
        url: '/pages/index/Search/Search'
      })
    },
    /* 点击减号 */  
    bindMinus: function() {  
      var num = this.data.num;  
      // 如果大于1时，才可以减  
      if (num > 0) {  
          num --;  
      }  
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num <= 0 ? 'disabled' : 'normal';  
      // 将数值与状态写回  
      this.setData({  
          num: num,  
          minusStatus: minusStatus  
      });  
  },  
  /* 点击加号 */  
  bindPlus: function() {  
      var num = this.data.num;  
      // 不作过多考虑自增1  
      num ++;  
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num < 0 ? 'disabled' : 'normal';  
      // 将数值与状态写回  
      this.setData({  
          num: num,  
          minusStatus: minusStatus  
      });  
  },  
  /* 输入框事件 */  
  bindManual: function(e) {  
      var num = e.detail.value;  
      // 将数值与状态写回  
      this.setData({  
          num: num  
      });  
  },
  // 下拉/上拉
toCollect () {
  var bol = this.data.isCollect; // 获取状态
  this.setData({
  isCollect:!bol // 改变状态
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    let list = [{}];
    for (let i = 0; i < 6; i++) {
      list[i] = {};
      list[i].name = String.fromCharCode(65 + i);
      list[i].id = i;
    }
    this.setData({
      list: list,
      listCur: list[0]
    })
  },

  //去结算-跳转到订单
  order:function(){
    wx.navigateTo({
      url: '/pages/index/life_detailsOrder/life_detailsOrder'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
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