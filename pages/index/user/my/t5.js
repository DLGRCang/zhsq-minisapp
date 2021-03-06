// pages/index/t5/t5.js
import verif from '../../../../utils/verification'
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    t5If:String,
    CustomBar:String 
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    t5state:[
      {id:1,img:'https://www.yjhlcity.com/zhsq/assets/images/applets/state1.png',text:'我的订单',url:'/pages/index/user/Home_myorders/Home_myorders'},///
      {id:2,img:'https://www.yjhlcity.com/zhsq/assets/images/applets/state2.png',text:'我的发布',url:'/pages/index/user/my_publish/my_publish'},
      {id:3,img:'https://www.yjhlcity.com/zhsq/assets/images/applets/state3.png',text:'我的活动',url:'/pages/index/user/Home_myactivity/Home_myactivity'},
      {id:4,img:'https://www.yjhlcity.com/zhsq/assets/images/applets/state4.png',text:'我的入驻',url:'/pages/index/user/My_Settled/My_Settled'}
    ],
    rightHui:'https://www.yjhlcity.com/zhsq/assets/images/applets/right-hui.png',
    ifLogin:true,
    wxUser:[],
    village:[],
    xzvillage:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

   
    // 我的点赞/评论/收藏跳转
    my_dzClick:function(e){
      if(!wx.getStorageSync('village')||JSON.stringify(wx.getStorageSync('village')) == '{}'){
        verif.tips('您不是小区人员，请联系您所在小区物业')
      }else{
   
      wx.navigateTo({
        url: "/pages/index/user/zscpl/zscpl?tabId="+e.currentTarget.dataset.tabid
      })
    }
    },  
    MyAppointmentClick(e){
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    },
    myClick(e){
      if(!wx.getStorageSync('village')||JSON.stringify(wx.getStorageSync('village')) == '{}'){
        verif.tips('您不是小区人员，请联系您所在小区物业')
      }else{
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
      }
    },
   
       // 我的投票 跳转
       My_toupiaoClick:function(){
        wx.navigateTo({
          url: "/pages/index/user/Home_mytoupiao/Home_mytoupiao"
        })
      },  
  //积分记录-跳转
  Credits_LogClick:function(){
    wx.navigateTo({
      url: "/pages/index/user/Credits_Log/Credits_Log"
    })
  },  
 
  feedbackClick:function(){
    wx.navigateTo({
      url: '/pages/index/user/feedback/feedback'
    })
  },
           //关于我们-跳转
   aboutMe:function(){
    wx.navigateTo({
      url: '/pages/index/user/about/about'
    })
  },
       //设置-跳转
   settingClick:function(){
    if(!wx.getStorageSync('village')||JSON.stringify(wx.getStorageSync('village')) == '{}'){
      verif.tips('您不是小区人员，请联系您所在小区物业')
    }else{
      wx.navigateTo({
        url: '/pages/index/user/setting/setting'
      })
    }
   
  },

  orderClick(e){
    let url = e.currentTarget.dataset.url;
    if(!wx.getStorageSync('village')||JSON.stringify(wx.getStorageSync('village')) == '{}'){
      verif.tips('您不是小区人员，请联系您所在小区物业')
    }else{
      wx.navigateTo({
        url: url
      })
    }
  },

  //清楚缓存
  qcClick(){
    wx.clearStorage()
    verif.tips('清楚缓存成功')
    this.setData({
      ifLogin:true,
      wxUser:[]
    })
    setTimeout(()=>{
      wx.navigateTo({
        url: '/pages/index/index'
      })
    },1000)
    
  },

  //父组件调用子组件方法
  showClick(){
    
    if(wx.getStorageSync('wxUser') == ''){
      this.setData({
        ifLogin:true
      })
    }else{
     // console.log(wx.getStorageSync('wxUser'))
      if(JSON.stringify(wx.getStorageSync('village')) == '{}'){
        var village=false
      }else{
        var village=wx.getStorageSync('village')
      }
      // console.log(wx.getStorageSync('wxUser'))
      // console.log(wx.getStorageSync('xzvillage'))
      this.setData({
        ifLogin:false,
        wxUser:wx.getStorageSync('wxUser'),
        village:village,
        xzvillage:wx.getStorageSync('xzvillage')
       })
    }
  },

 //点击登录
 loginClick(){
   wx.setStorageSync('t5Login', true)
  verif.checkLogin()
  },
  logUser(){
    //console.log(wx.getStorageSync('wxUser'))
  }
  },
 
  /*组件生命周期*/ 
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {
     // 获取用户信息
    this.logUser()

    },
    
    //在组件实例进入页面节点树时执行
    attached() { 
   
    },
    //在组件在视图层布局完成后执行
    ready() {
      
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
