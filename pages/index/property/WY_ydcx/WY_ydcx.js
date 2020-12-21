// pages/index/WY_ydcx/WY_ydcx.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    CustomBar:String
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    date: '2018年12月',
    // tab 切换
    tabArr: {
     curHdIndex: 0,
     curBdIndex: 0
   }, 
  },

  /**
   * 组件的方法列表
   */
  methods: {

    fabu(){
      wx.navigateTo({
        url: '/pages/index/property/MY_ydxcCreate/MY_ydxcCreate'
      })
    },
     // tab切换
     tab: function (e) {
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
     DateChange(e) {
       let datemonth = e.detail.value
       this.setData({
         date: datemonth.replace("-","年")+"月"
       })
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
