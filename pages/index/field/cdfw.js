// pages/index/community/community.js
import http from '../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0,
     
    }, 
    rowsList:[],
    rowsList1:[],
    rowsList2:[],
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
  if(dataId == '1'){
    this.cdArr1()
  }else if(dataId == '2'){
    this.cdArr2()
  }
  //console.log(e);
},  


xiangqing(e){
  //console.log(e)
  var id = e.currentTarget.dataset.id
  wx.navigateTo({
    url: '/pages/index/service/cd_fwxq?id='+id
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.cdArr()
  },
  cdArr(){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.cdApi({
      success:res=>{
        //console.log(res)
        this.setData({
          rowsList:res.rows
        })
        wx.hideLoading()
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  cdArr1(){
    if(this.data.rowsList1.length == 0){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.cdrmApi({
      success:res=>{
        //console.log(res)
        this.setData({
          rowsList1:res.rows
        })
        wx.hideLoading()
      },
      fail:err=>{
        console.log(err)
      }
    })
  }
  },
  cdArr2(){
    if(this.data.rowsList2.length == 0){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.cdpfApi({
      success:res=>{
        console.log(res)
        this.setData({
          rowsList2:res.rows
        })
        wx.hideLoading()
      },
      fail:err=>{
        console.log(err)
      }
    })
  }
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