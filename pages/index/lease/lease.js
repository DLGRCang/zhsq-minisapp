// pages/index/lease/lease.js
var dateTimePicker = require('../../../utils/dateTimePicker.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    neirong:true,
    date: '',
    dxData:['只限女生','半年起租','一年起租','租户稳定']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);

    var times1 = obj.dateTimeArray[0][obj.dateTime[0]]
    var times2 = obj.dateTimeArray[1][obj.dateTime[1]]
    var times3 = obj.dateTimeArray[2][obj.dateTime[2]]
    var dataTime = times1+"-"+times2+"-"+times3
    //console.log(dataTime)
    this.setData({
      date:dataTime
    })


  },
  toggle(e) {
   
    var anmiaton = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      neirong:true,
      animation: anmiaton
    })
    setTimeout(function() {
      that.setData({
        animation: ''
      })
    }, 1000)
  },

  //日期选择
  DateChange(e) {

    this.setData({
      date: e.detail.value
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