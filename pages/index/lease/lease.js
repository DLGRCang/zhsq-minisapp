// pages/index/lease/lease.js
var dateTimePicker = require('../../../utils/dateTimePicker.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    neirong:true,
    date: '',
    dxData:['只限女生','半年起租','一年起租','租户稳定'],
    zhengzu:'background: #1082FF;border: 1rpx solid #1082FF;color: #fff;',
    hezu:'background: #fff;border: 1rpx solid #ccc;color: #000;',
    zxns:'background: #fff;border: 1rpx solid #ccc;color: #000;',
    bnqz:'background: #fff;border: 1rpx solid #ccc;color: #000;',
    ynqz:'background: #fff;border: 1rpx solid #ccc;color: #000;',
    zhwd:'background: #fff;border: 1rpx solid #ccc;color: #000;',
    imgList: [],
    hezufang:false,
    index:null,
    picker: ['其他', '主卧', '次卧'],
    index1:null,
    picker1: ['东','南','西','北','东南','东北','西南','西北','南北','东西'],
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
  PickerChange1(e) {
    console.log(e);
    this.setData({
      index1: e.detail.value
    })
  },
  zzf(){
    this.setData({
      zhengzu:'background: #1082FF;border: 1rpx solid #1082FF;color: #fff;',
      hezu:'background: #fff;border: 1rpx solid #ccc;color: #000;',
      hezufang:false
    })
  },
  hzf(){
    this.setData({
      hezu:'background: #1082FF;border: 1rpx solid #1082FF;color: #fff;',
      zhengzu:'background: #fff;border: 1rpx solid #ccc;color: #000;',
      hezufang:true
    })
  },
  zxns(){
    if(this.data.zxns == 'background: #fff;border: 1rpx solid #ccc;color: #000;'){
      this.setData({
        zxns:'background: #1082FF;border: 1rpx solid #1082FF;color: #fff;'
      })
    }else{
      this.setData({
        zxns:'background: #fff;border: 1rpx solid #ccc;color: #000;'
      })
    }
  },
  bnqz(){
    if(this.data.bnqz == 'background: #fff;border: 1rpx solid #ccc;color: #000;'){
      this.setData({
        bnqz:'background: #1082FF;border: 1rpx solid #1082FF;color: #fff;'
      })
    }else{
      this.setData({
        bnqz:'background: #fff;border: 1rpx solid #ccc;color: #000;'
      })
    }
  },
  ynqz(){
    if(this.data.ynqz == 'background: #fff;border: 1rpx solid #ccc;color: #000;'){
      this.setData({
        ynqz:'background: #1082FF;border: 1rpx solid #1082FF;color: #fff;'
      })
    }else{
      this.setData({
        ynqz:'background: #fff;border: 1rpx solid #ccc;color: #000;'
      })
    }
  },
  zhwd(){
    if(this.data.zhwd == 'background: #fff;border: 1rpx solid #ccc;color: #000;'){
      this.setData({
        zhwd:'background: #1082FF;border: 1rpx solid #1082FF;color: #fff;'
      })
    }else{
      this.setData({
        zhwd:'background: #fff;border: 1rpx solid #ccc;color: #000;'
      })
    }
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

  //日期选择
  DateChange(e) {

    this.setData({
      date: e.detail.value
    })
  },


  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
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
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
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