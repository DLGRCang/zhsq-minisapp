//index.js
//获取应用实例
import https from '../../utils/api'
import apidata from '../../utils/dataApi'
import common from '../../utils/common'
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: 'Hi 开发者！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    login:0,
    PageCur: ''

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  NavChange(e) {
    console.log(e)
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
  onLoad: function () {
    wx.showLoading({
      title: '拼命加载中',
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.appid()
  },
  appid(){
    var indexId = 1
    if(indexId == 1){
      this.setData({
        login:1,
        PageCur:'t1'
      })
    }else if(indexId == 2){
      this.setData({
        login:2,
        PageCur:'t6'
      })
    }
    //console.log(this.data.login)
    // https.baiduImgApi({
    //   data:{
    //   },
    //   success:res=>{
    //     console.log(res)
    //   },
    //   fail:err=>{
    //     console.log(err)
    //   }
    // })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

 

  //监听页面显示
  onShow:function(){
    //console.log(this.data.login)
    if(this.data.login != 0){
      setTimeout(()=>{
        wx.hideLoading()
      },1000)
    }
  }
})
