// pages/index/user/Home_myactivity/Home_myactivityPJ/Home_myactivityPJ.js
import http from '../../../../../utils/api'
import verif from '../../../../../utils/verification'
import util from '../../../../../utils/util'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
    rowsList:{},
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    }, 
    score:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    this.setData({
      rowsList:JSON.parse(options.item)
    })

  },

  scoreClick(e){

    this.setData({
      score:e.currentTarget.dataset.score
    })
  },

  pingjia(){
    if(this.data.score == 0){
      verif.tips("请先选择您的评分星数")
    }else{
      http.updateconstructionsactivityScoreApi({
        data:{
          constructionsActivityId:this.data.rowsList.constructionsActivityId,
          score:this.data.score
        },
        success:res=>{
         // console.log(res)
          if(res.code == 200){
            verif.tips("评价成功")
            setTimeout(()=>{
              wx.navigateBack({
                delta: 1
              })
            },800)
          }else{
            verif.tips(res.msg)
          }
          
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