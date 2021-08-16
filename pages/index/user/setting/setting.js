// pages/index/setting/setting.js
import verif from '../../../../utils/verification'
import http from '../../../../utils/api'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    myList:[],
    roleList:[]
  },
   //收货地址-跳转
   addressClick:function(){
    // wx.navigateTo({
    //   url: '/pages/index/user/setting_address/setting_address'
    // })
    

    if(wx.getStorageSync('village') == false){
      verif.tips('您不是小区人员')
    }else{
      wx.navigateTo({
        url: '/pages/index/user/myPerfect/myPerfect'
      })
    }
    
  },

  qhjiaose(){
    if(verif.checkLogin()){
      wx.navigateTo({
        url: '/pages/index/UserSelection/UserSelection'
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      myList:wx.getStorageSync('xzvillage').houseList[0],
      roleList:wx.getStorageSync('xzvillage').roleList
    })

  },

  messageList(){
    http.messageApi({
      data:{
        userId:wx.getStorageSync('wxUser').id
      },
      success:res=>{
        console.log(res)
        for(var i in res){
          if(i == wx.getStorageSync('xzvillage').village.villageId){
            wx.setStorageSync('xzvillage', res[i])
            this.setData({
              myList:res[i][0]
            })
          }
        }
          
      },
      fail:err=>{
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