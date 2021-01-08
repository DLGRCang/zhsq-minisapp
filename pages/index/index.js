//index.js
//获取应用实例
import https from '../../utils/api'
// import apidata from '../../utils/dataApi'
// import common from '../../utils/common'
import verif from '../../utils/verification'
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    windowHeight:app.globalData.windowHeight,
    wHeight:app.globalData.wHeight,
    motto: 'Hi 开发者！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    login:0,
    PageCur: '',
    topNum:0,
    t5If:0,
    tab1Height:0,
    tab2Height:0,
    tab3Height:0,
    village:[],
    xzvillage:[],
    xzwys:"wys",
    xzyys:"yys",
    xuanzexiaoqu:false
  },

  

  xuzneXq(e){
    //console.log(e)
    this.setData({
      xzvillage:e.currentTarget.dataset.item
    })
  },
  qrxzxqClick(){
    wx.setStorageSync('xzvillage', this.data.xzvillage)
    
    this.setData({
      xuanzexiaoqu:false
    })
  },
  gbtchaung(){
    this.setData({
      xzvillage:[],
      xuanzexiaoqu:false
    })
  },
  xunzexq(){

    if(this.data.village.length > 1){
      this.setData({
        xuanzexiaoqu:true
      })
    }
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  NavChange(e) {

    wx.setStorageSync('clackTabBar', e.currentTarget.dataset.cur)
    this.setData({
      topNum:0,
      PageCur: e.currentTarget.dataset.cur
    })
    if(e.currentTarget.dataset.cur == 't5'){
      this.selectComponent("#tip5").showClick()
    }
    
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },

 

  onLoad: function () {
    //console.log(wx.getStorageSync('village'))
    
    var village = []
    for(var i in wx.getStorageSync('village')){
      village.push(wx.getStorageSync('village')[i])
    }
    
    if(village.length == 1){
      var xzvillage = []
      for(var i in village[0]){
        xzvillage.push(village[0][i])
      }
      //console.log(xzvillage)
      this.setData({
        village:village,
        xzvillage:xzvillage
      })
      wx.setStorageSync('xzvillage', xzvillage)
    }else{
      this.setData({
        village:village,
        xzvillage:wx.getStorageSync('xzvillage')
      })
    }
    //console.log(this.data.xzvillage)
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
  sxLogin(){
    this.selectComponent("#dlFalse").loginClick()
  },
  appid(){

    if(wx.getStorageSync('indexId') == ''){
      wx.setStorageSync('indexId', 1)
    }
    var  indexId = wx.getStorageSync('indexId')
    //console.log(indexId)
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
    }else if(indexId == 3){
      this.setData({ 
        login:3,
        PageCur:'t13'
      })
      

    }
    //console.log(this.data.login)
   
  },
  getUserInfo: function(e) {
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  wyhdBot(){
    if(this.data.PageCur == 't10'){
    this.selectComponent("#bot10").botClick()
    }
  },
  
  

  //监听页面显示
  onShow:function(){
    
    var that = this
    var query = wx.createSelectorQuery()
    var  indexId = wx.getStorageSync('indexId')
    if(indexId == 1){
      query.select('#footer1').boundingClientRect(function (res) { 
        // console.log(res);

        that.setData({
          tab1Height:res.height
         })
      }).exec();
    }else if(indexId == 2){
      query.select('#footer2').boundingClientRect(function (res) {
        //console.log(res);
       that.setData({
         tab2Height:res.height
        })
     }).exec();
    }else if(indexId == 3){
      query.select('#footer3').boundingClientRect(function (res) {
        // console.log(res);
        that.setData({
          tab3Height:res.height
         })
      }).exec();
    }
    
    wx.getStorage({
      key: 'llqfb',
      success: function(res){
        //console.log(res)
        if(res.data){
          if(that.data.PageCur == 't4'){
            that.selectComponent("#tip4").llqList()
          }
          //console.log('aaaaaaaaaaaaa')
        }
      }
    })
    //console.log('111')
    //console.log(this.data.login)
    if(this.data.login != 0){
      setTimeout(()=>{
        wx.hideLoading()
      },1000)
    }

    if(this.data.PageCur == 't5'){
      this.selectComponent("#tip5").showClick()
    }
    
  },
  scry(e){
   //console.log(e.detail.scrollTop) 
    if(this.data.PageCur == 't5'){

      if(e.detail.scrollTop >= 30){
        this.setData({
          t5If:1
        })
      }else{
        this.setData({
          t5If:0
        })
      }

    }   
  }
})
