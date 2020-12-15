// pages/index/Studyyd/Studyyd.js
// pages/index/partyBuilding/partyBuilding.js
import http from '../../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataTab:[
      {id:0,content:"党规党章"},
      {id:1,content:"政策法规"},
      {id:2,content:"准则条例"},
      {id:3,content:"办法规定"},
    ],
    TabCur: 0,
    scrollLeft:0,
  panduan:true,
  rowsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.partyArr()
  },
  partyArr(){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.partyApi({
      success:res=>{
        //console.log(res)
        this.setData({
          rowsList:res.rows[0]
        })
        //console.log(this.data.rowsList)
        wx.hideLoading()
      },
      fail:err=>{
        console.log(err)
      }
    })
  } ,
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


  tabSelect(e) {
    console.log(e)
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    if(e.currentTarget.dataset.id == '0'||e.currentTarget.dataset.id == '1'){
      this.setData({
        panduan:true
      })
    }else{
      this.setData({
        panduan:false
      })
    }
  },
  scry(e){
    //console.log(e)
    if(e.detail.scrollTop > "305"){
      this.setData({
        topPos:true
      })
    }else{
      this.setData({
        topPos:false
      })
    }
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