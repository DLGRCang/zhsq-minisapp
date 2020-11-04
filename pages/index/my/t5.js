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
      {id:1,img:'../../../images/t5/state1.png',text:'我的发布'},
      {id:2,img:'../../../images/t5/state2.png',text:'我的收藏'},
      {id:3,img:'../../../images/t5/state3.png',text:'我的点赞'},
      {id:4,img:'../../../images/t5/state4.png',text:'我的评论'}
    ],
    rightHui:'../../../images/t5/right-hui.png',
    loginJs:true,
    myLogin:[]
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
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
