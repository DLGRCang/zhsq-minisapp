// pages/my/my.js
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jfList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.jfArr()
  },
  getAddInfo(){
    this.onLoad()
  },
  jfArr(){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.myjfApi({
      data:{
        unifiedUserId:wx.getStorageSync('user').userId
      },
      success:res=>{
        console.log(res)
        if(res.code == 200){
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").falseClick()
            },
          })
          this.setData({
            jfList:res.data.housePayDTOList
          })
        }
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