// pages/czxq/czxq.js
import http from '../../../../utils/api'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
     // tab 切换
     tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    }, 
    rows:[]
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

    var item = JSON.parse(options.id)
    var items = item.residentsName.substring(0,1)
    item.rentName1 = items+'**'
    item.img = item.housePhoto.split(',')
    //console.log(item)
    this.setData({
      rows:item
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