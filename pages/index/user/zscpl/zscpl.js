// pages/index/t4/t4.js
import http from '../../../../utils/api'
const app = getApp();
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
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    isStar: false, // 默认没有收藏
    isShare: true, // 默认有分享
    isShare: false, // 默认没有赞
    forF4:[],
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    }, 
  },
   
  
  /**
   * 组件的方法列表
   */
  methods: {
    // tab切换
  tab: function (e) {
    console.log(e)
    //var dataId = e.currentTarget.dataset.id;
    var dataId = e.currentTarget.id;
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr: obj
    })
    //console.log(e);
  }, 
    lljClick:function(){
      wx.navigateTo({
        url: '/pages/index/user/neighborhood-details/llq_xq'
      })
    },
      // 新闻详情
    newsxq(){
      wx.navigateTo({
        url: '/pages/index/user/notice-details/notice-details'
      })
    }, 
  // 邻里圈列表跳详情
      lljClick:function(){
        wx.navigateTo({
          url: '/pages/index/user/neighborhood-details/llq_xq'
        })
      },
  xinwenArr(){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.xinwenApi({

      success:res=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        this.setData({
          forF4:res.rows
        })
        //console.log(this.data.forF4)
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
  getAddInfo(){
    this.xinwenArr()
  }
  },
 
  /*组件生命周期*/ 
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {
    },
    
    //在组件实例进入页面节点树时执行
    attached() { 
      
    },
    //在组件在视图层布局完成后执行
    ready() {
      this.xinwenArr()
      
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