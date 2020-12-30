import http from '../../../../utils/api'

// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCollect: true, // 默认有点赞
    isStar: false, // 默认没有收藏
    rows:[]
  },


  // 点击收藏
toStar () {
  var bol = this.data.isStar; // 获取状态
  this.setData({
    isStar:!bol // 改变状态
  })
  },
// 点赞/取消点赞
toCollect () {
  var bol = this.data.isCollect; // 获取状态
  this.setData({
  isCollect:!bol // 改变状态
  })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //console.log(options)
      this.setData({
        rows:JSON.parse(options.rows)
      })
      this.lllList()
      console.log(this.data.rows)
  },
  getAddInfo(){
    this.onLoad()
  },
  lllList(){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.llqlllzjApi({
      data:{
        neighborId:this.data.rows.neighborId,
        createPeopleId:this.data.rows.createPeopleId,
        loginId:this.data.rows.loginId
      },
      success:res=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        console.log(res)
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