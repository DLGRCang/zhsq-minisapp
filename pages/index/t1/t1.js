// pages/index/t1/t1.js
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
    dataItem:[
      {id:1,image:'../../../images/t1/tb01.png',text:"访客通行",url:'/pages/visitor/visitor'},
      {id:2,image:'../../../images/t1/tb02.png',text:"物业维修",url:''},
      {id:3,image:'../../../images/t1/tb03.png',text:"物业缴费",url:''},
      {id:4,image:'../../../images/t1/tb04.png',text:"生活缴费",url:''},
  
      // {id:5,image:'../../../images/t1/tb05.png',text:"楼栋布局",url:'/pages/floor/floor'},
  

    ],
    dataItem1:[],
    dataItem2:[],
    scrollLeft:'',
    lefthua:'2'
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
 //点击登录
 loginClick(){
  common.checkLogin()
  },
  contentClick(e){
    //console.log(e.currentTarget.dataset.url)
    if(e.currentTarget.dataset.url != ''){
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    }
    
  },
  getleft(e){
    //console.log(e)
    this.setData({
      scrollLeft:e.detail.scrollLeft
    })
  }

  },
 
  /*组件生命周期*/ 
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {
      var dataItem = this.data.dataItem
      
    },
    
    //在组件实例进入页面节点树时执行
    attached() { 
      
    },
    //在组件在视图层布局完成后执行
    ready() {
      var dataItem = this.data.dataItem
      var dataItem1 = []
      var dataItem2 = []
      var times = dataItem.length/2
      if(dataItem.length > 4){
        if(dataItem.length%2==0){
          for(var i=0;i<times;i++){
            dataItem1.push(dataItem[i])
          }
          for(var u=0;u<dataItem.length;u++){
            if(u > times-1){
              dataItem2.push(dataItem[u])
            }
          }
        }else{
  
          for(var i=0;i<times+0.5;i++){
            dataItem1.push(dataItem[i])
          }
          for(var u=0;u<dataItem.length;u++){
          
            if(u > times-0.5){
              dataItem2.push(dataItem[u])
            }
          }
        }
        this.setData({
          dataItem1:dataItem1,
          dataItem2:dataItem2,
          
        })
      }else{
    
        this.setData({
          dataItem1:dataItem
        })
      }
      


      if(dataItem.length == 9||dataItem.length == 10){
        this.setData({
          lefthua:2
        })
      }else if(dataItem.length == 11||dataItem.length == 12){
        this.setData({
          lefthua:4
        })
      }else if(dataItem.length == 13||dataItem.length == 14){
        this.setData({
          lefthua:6
        })
      }
      
      
      
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
