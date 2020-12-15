// pages/index/t5/t5.js
import verif from '../../../../utils/verification'
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
      {id:1,img:'https://yiqi.sucstep.com/zhsq/assets/images/applets/state1.png',text:'我的订单',url:'/pages/index/user/Home_myorders/Home_myorders'},
      {id:2,img:'https://yiqi.sucstep.com/zhsq/assets/images/applets/state2.png',text:'我的发布',url:'/pages/index/user/my_publish/my_publish'},
      {id:3,img:'https://yiqi.sucstep.com/zhsq/assets/images/applets/state3.png',text:'我的活动',url:'/pages/index/user/Home_myactivity/Home_myactivity'},
      {id:4,img:'https://yiqi.sucstep.com/zhsq/assets/images/applets/state4.png',text:'我的入驻',url:'/pages/index/user/My_Settled/My_Settled'}
    ],
    rightHui:'https://yiqi.sucstep.com/zhsq/assets/images/applets/right-hui.png',
    ifLogin:true,
    wxUser:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //我的党支部
    dzbuClick(){
      wx.navigateTo({
        url: "/pages/index/user/partyBranch/partyBranch"
      })
    },
    // 我的点赞/评论/收藏跳转
    my_dzClick:function(){
      wx.navigateTo({
        url: "/pages/index/user/zscpl/zscpl"
      })
    },  
    // 我的预约 跳转
    My_appointmentClick:function(){
      wx.navigateTo({
        url: "/pages/index/user/My_appointment/My_appointment"
      })
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
        //缴费记录-跳转
  jfjlClick:function(){
    wx.navigateTo({
      url: '/pages/index/user/Home_jfjl/Home_jfjl'
    })
  },
//维修记录-跳转
   wxjlClick:function(){
        wx.navigateTo({
          url: "/pages/index/user/maintenance-records/wxjl",
        })
      },
    //帮助反馈-跳转
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
    wx.navigateTo({
      url: '/pages/index/user/setting/setting'
    })
  },

  orderClick(e){
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  },

  //清楚缓存
  qcClick(){
    wx.clearStorage()
    verif.tips('清楚缓存成功')
    this.setData({
      ifLogin:true,
      wxUser:[]
    })
  },

  //父组件调用子组件方法
  showClick(){
    if(wx.getStorageSync('wxUser') == ''){
      this.setData({
        ifLogin:true
      })
    }else{
      this.setData({
        ifLogin:false,
        wxUser:wx.getStorageSync('wxUser').userInfo
       })
    }
  },

 //点击登录
 loginClick(){
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
