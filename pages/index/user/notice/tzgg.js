// pages/my/my.js
import http from '../../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tzggList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.xinwenList()
  },

  xinwenList(){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.newsApi({
      data:{
        code:'wytzfbgl',
        cur:'1'
      },
      success:res=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        console.log(res)
        this.setData({
          tzggList:res.rows
        })


        
      },
      fail:err=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").trueClick()
          },
        })
        console.log(err)
      }
    })
  },
  xwDetails(e){
    //console.log(e.currentTarget.dataset.item)
    var item = encodeURIComponent(JSON.stringify(e.currentTarget.dataset.item))
    wx.navigateTo({
      url: '/pages/index/user/notice-details/notice-details?item='+item
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
  xiangqing(){
    wx.navigateTo({
      url: '/pages/index/user/notice-details/notice-details'
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