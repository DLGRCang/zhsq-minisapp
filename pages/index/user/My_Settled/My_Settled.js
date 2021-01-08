
import http from '../../../../utils/api'
// pages/index/My_Settled/My_Settled.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rows:[],
    xzvillage:[],
    CustomBar: app.globalData.CustomBar,
    windowHeight:app.globalData.windowHeight,
    xzvillageFalse:false,
    xzIndex:null,
    xzjihe:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      xzvillage:wx.getStorageSync('xzvillage')
    })
    if(wx.getStorageSync('xzvillage').length > 1){
      this.setData({
        xzvillageFalse:true
      })
    }else{
      this.setData({
        xzjihe:wx.getStorageSync('xzvillage')[0]
      })
      this.wdrzList()
    }
    //console.log(wx.getStorageSync('xzvillage'))
    
  },
  getAddInfo(){
    this.onLoad()
  },
  xzClick(e){
    //console.log(e)
    this.setData({
      xzIndex:e.currentTarget.dataset.index,
      //xzjihe:this.data.xzvillage[e.currentTarget.dataset.index]
    })
    if(this.data.xzvillage[e.currentTarget.dataset.index].isMaster == 1){
      this.hzList(this.data.xzvillage[e.currentTarget.dataset.index].roomId)
    }else{
      this.nohzList(this.data.xzvillage[e.currentTarget.dataset.index].roomId)
    }
    this.setData({
      xzvillageFalse:false
    })
  },

  wdrzList(){
    
    //console.log(this.data.xzjihe)
    if(this.data.xzjihe.isMaster == 1){
      this.hzList(this.data.xzjihe.roomId)
    }else{
      this.nohzList()
    }
    
    
  },

  gbClick(){
    this.setData({
      xzvillageFalse:false
    })
  },

  hzList(id){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.wdrzhzApi({
      data:{
        unifiedUserIds:id
      },
      success:res=>{
        this.setData({
          rows:res.rows
        })
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        //console.log(res)
      },
      fail:err=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").trueClick()
          },
        })
      }
    })
  },

  nohzList(id){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.wdrzApi({
      data:{
        unifiedUserId:wx.getStorageSync('wxUser').id,
        unifiedUserIds:id
      },
      success:res=>{
        this.setData({
          rows:res.rows
        })
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        //console.log(res)
      },
      fail:err=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").trueClick()
          },
        })
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