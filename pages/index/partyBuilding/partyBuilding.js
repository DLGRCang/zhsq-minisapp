// pages/index/partyBuilding/partyBuilding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataTab:[
      {id:0,content:"支委会成员"},
      {id:1,content:"支部党员"},
      {id:2,content:"组织生活会"},
      {id:3,content:"支部党课"},
      {id:4,content:"主题党日"}
    ],
    TabCur: 0,
    scrollLeft:0,
  panduan:true,
  },

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
  shequhd(){
    wx.navigateTo({
      url: '/pages/index/community/community'
    })
    
  },
  changdifw(){
    wx.navigateTo({
      url: '/pages/index/field/cdfw'
    })
  },
  dangqunfw(){
    wx.navigateTo({
      url: '/pages/index/partyMasses/dqfw'
    })
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