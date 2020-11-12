// pages/index/t5/t5.js
import common from '../../../utils/common'
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    t5state:[
      {id:1,img:'../../../images/t5/state1.png',text:'我的订单'},
      {id:2,img:'../../../images/t5/state2.png',text:'我的发布'},
      {id:3,img:'../../../images/t5/state3.png',text:'我的活动'},
      {id:4,img:'../../../images/t5/state4.png',text:'我的入驻'}
    ],
    rightHui:'../../../images/t5/right-hui.png',
    loginJs:true,
    myLogin:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
        //缴费记录-跳转
  jfjlClick:function(){
    wx.navigateTo({
      // url: '/pages/index/feedback/feedback'
    })
  },
//维修记录-跳转
   wxjlClick:function(){
        wx.navigateTo({
          url: 'pages/index/maintenance-records/wxjl'
        })
      },
    //帮助反馈-跳转
  feedbackClick:function(){
    wx.navigateTo({
      url: '/pages/index/feedback/feedback'
    })
  },
           //关于我们-跳转
   aboutMe:function(){
    wx.navigateTo({
      url: '/pages/index/about/about'
    })
  },
       //设置-跳转
   settingClick:function(){
    wx.navigateTo({
      url: '/pages/index/setting/setting'
    })
  },
 //点击登录
 loginClick(){
  common.checkLogin()
  },

  },
 
  /*组件生命周期*/ 
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {
     // 获取用户信息
    
      
    },
    
    //在组件实例进入页面节点树时执行
    attached() { 
      
    },
    //在组件在视图层布局完成后执行
    ready() {
      wx.getSetting({
        success: res => {
      
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
               this.setData({
                myLogin:res.userInfo
               })
              }
            })
          }else{
            this.setData({
              loginJs:false,
             })
          }
        }
      })
    },
 
    //在组件实例被移动到节点树另一个位置时执行
    moved() {

    },
    //在组件实例被从页面节点树移除时执行
    detached() {
  
    },
    //每当组件方法抛出错误时执行
    error() {

    },
    /*组件所在页面的生命周期 */
    pageLifetimes: {
      show: function () {
        
        // 页面被展示
        
      },
      hide: function () {
        // 页面被隐藏

      },
      resize: function (size) {
        // 页面尺寸变化
   
      }
    }
   
  }
 
})
