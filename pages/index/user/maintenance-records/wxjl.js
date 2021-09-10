// pages/my/my.js
import http from '../../../../utils/api'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rows:[],
    windowHeight:app.globalData.windowHeight,
    tabHeight:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.wxjlArr()
  },
  getAddInfo(){
    this.onLoad()
  },
  wxjlArr(){

    http.listrepairApi({
      data:{
        unifiedUserId:wx.getStorageSync('wxUser').id
      },
      success:res=>{
        console.log(res)
  
        this.setData({
          rows:res.data.repairDTOList
        })
      },
      fail:err=>{
 
        console.log(err)
      }
    })
  },

  wcCclick(e){
    //console.log(e.currentTarget.dataset.id)
    var rows = this.data.rows
    http.confirmFinishApi({
      data:{
        repairId:e.currentTarget.dataset.id
      },
      success:res=>{
        console.log(res)
        if(res.code == 200){
          rows[e.currentTarget.dataset.i].state = 5
          this.setData({
            rows:rows
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
    // var that = this
    // var query = wx.createSelectorQuery()
    // query.select('#tab').boundingClientRect(function (res) {
    //   // console.log(res);
    //   that.setData({
    //     tabHeight:res.height
    //    })
    // }).exec();
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