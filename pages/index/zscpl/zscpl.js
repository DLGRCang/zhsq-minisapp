// pages/index/t4/t4.js
import http from '../../../utils/api'
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
    forF4:[],
 // tab 切换
  tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    }, 
  },
  // tab切换
      tab: function (e) {
      //var dataId = e.currentTarget.dataset.id;
      var dataId = e.currentTarget.id;
      var obj = {};
      obj.curHdIndex = dataId;
      obj.curBdIndex = dataId;
      this.setData({
        tabArr: obj
      })
      //console.log(e);
      }, 
        // 新闻详情
    newsxq(){
      wx.navigateTo({
        url: '/pages/index/notice-details/notice-details'
      })
    }, 
  // 邻里圈列表跳详情
      lljClick:function(){
        wx.navigateTo({
          url: '/pages/index/neighborhood-details/llq_xq'
        })
      },
  
  /**
   * 组件的方法列表
   */
  methods: {
    lljClick:function(){
      wx.navigateTo({
        url: '/pages/index/neighborhood-details/llq_xq'
      })
    },
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
      http.xinwenApi({
      
        success:res=>{
          
          this.setData({
            forF4:res.rows
          })
          console.log(this.data.forF4)
        },
        fail:err=>{
          console.log(err)
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