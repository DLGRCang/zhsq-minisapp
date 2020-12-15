// pages/index/MY_ydxcCreate/MY_ydxcCreate.js// pages/index/lease/lease.js
var dateTimePicker = require('../../../../utils/dateTimePicker.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    neirong:true,
    picker: ['巡查中', '正在巡查', '巡查完毕'],
    date: '',
    imgList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },


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
// 创建成功跳转
Create:function(){
  wx.navigateTo({
    url: '/pages/index/user/WY_ydcx/WY_ydcx'
  })
},
  //日期选择
  DateChange(e) {

    this.setData({
      date: e.detail.value
    })
  },


  ChooseImage() {
    wx.chooseImage({
      count: 9, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '删除照片',
      content: '确定要删除这张照片吗？',
      cancelText: '取消',
      confirmText: '删除',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
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
  onShareAppMessage: function () {

  }
})