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
    isStar: false, // 默认没有收藏
    isShare: true, // 默认有分享
    isShare: false, // 默认没有赞
    forF4:[]
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    // 发布
    fabu:function(){
      wx.navigateTo({
        url: '/pages/index/Llq_pub/Llq_pub'
      })
    },

    lljClick:function(){

      wx.navigateTo({
        url: '/pages/index/neighborhood-details/llq_xq'
      })
    },
    // 点击收藏
    toStar () {
      var bol = this.data.isStar; // 获取状态
      this.setData({
        isStar:!bol // 改变状态
      })
      },
    // 点击分享
    toShare () {
      var bol = this.data.isShare; // 获取状态
      this.setData({
        isShare:!bol // 改变状态
      })
      },
    // 点赞/取消点赞
    toZan () {
      var bol = this.data.isZan; // 获取状态
      this.setData({
        isZan:!bol // 改变状态
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