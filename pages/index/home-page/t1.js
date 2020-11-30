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
      {id:1,image:'../../../images/t1/ts1.png',text:"访客通行",url:'/pages/index/visitor/visitor'},
      {id:2,image:'../../../images/t1/ts2.png',text:"物业维修",url:'/pages/index/property-maintenance/wywx'},
      {id:3,image:'../../../images/t1/ts3.png',text:"物业缴费",url:'/pages/index/property-payment/wyjf'},
      {id:4,image:'../../../images/t1/ts4.png',text:"生活缴费",url:'/pages/index/living_payment/shjf'},
      {id:5,image:'../../../images/t1/ts5.png',text:"SOS求助",url:''},
      {id:6,image:'../../../images/t1/ts6.png',text:"房屋出租",url:'/pages/index/houseRental/fwcz'},
      {id:7,image:'../../../images/t1/ts7.png',text:"空中课堂",url:''},
      {id:8,image:'../../../images/t1/ts8.png',text:"视频直播",url:'/pages/index/liveBroadcast/liveBroadcast'},
      {id:9,image:'../../../images/t1/ts9.png',text:"党支部",url:'/pages/index/partyBranch/partyBranch'},
      {id:10,image:'../../../images/t1/ts10.png',text:"社区党建",url:'/pages/index/partyBuilding/partyBuilding'},
      {id:11,image:'../../../images/t1/ts11.png',text:"民情直达",url:'/pages/index/complaint/complaint'},
      {id:12,image:'../../../images/t1/ts12.png',text:"入驻小区",url:'/pages/index/checkIn/checkIn'},
      {id:13,image:'../../../images/t1/ts13.png',text:"楼栋布局",url:'/pages/index/floor/floor'},
      {id:14,image:'../../../images/t1/ts14.png',text:"活动设施",url:''}
    ],
    msgList: [
      { img: '../../../images/t1/index_banner.png' },
      { img: '../../../images/t1/index_banner.png' }
    ],
    jianxianL:[
      {ids:"1"},{ids:"0.9"},{ids:"0.8"},{ids:"0.7"},{ids:"0.6"},{ids:"0.5"},{ids:"0.4"},{ids:"0.3"},{ids:"0.2"},{ids:"0.1"}
    ],
    dataItem1:[],
    dataItem2:[],
    scrollLeft:'',
    lefthua:'2',
    starty: 0, //开始的位置x
    endy: 0, //结束的位置y
    margintop: 0, //滑动下拉距离
 
  },
 

  /**
   * 组件的方法列表
   */

  sqhd_xq(){
    wx.navigateTo({
      url: '../community/community'
    })
  },
  methods: {
 //点击登录
 loginClick(){
  common.checkLogin()
  },
  contentClick(e){
    //console.log(e.currentTarget.dataset.id)
    if(e.currentTarget.dataset.url != ''){
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    }

    if(e.currentTarget.dataset.id == '5'){
      wx.makePhoneCall({
        phoneNumber: '110',
      })
    }
    
  },
  xqvode(){
    wx.navigateTo({
      url:'/pages/index/vote/kaishi_tp' 
    })
  },
  getleft(e){
    //console.log(e)
    this.setData({
      scrollLeft:e.detail.scrollLeft
    })
  },

  tzgg(){
    wx.navigateTo({
      url: '/pages/index/notice/tzgg'
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
        if(dataItem.length == 5||dataItem.length == 6){
          for(var u=0;u<dataItem.length;u++){
            if(u<4){
              dataItem1.push(dataItem[u])
            }else{
              dataItem2.push(dataItem[u])
            }
          }
        }else{
            if(dataItem.length%2==0){
  
            for(var i=0;i<times;i++){
              dataItem1.push(dataItem[i])
            }
            for(var u=0;u<dataItem.length;u++){
              if(u > times-1){
                dataItem2.push(dataItem[u])
              }
            }
            this.setData({
              lefthua:dataItem.length-8
            })
          }else{
    
            for(var i=0;i<times+0.5;i++){
              dataItem1.push(dataItem[i])
            }
            for(var u=0;u<dataItem.length;u++){
            
              if(u > times-0.5){
                dataItem2.push(dataItem[u])
              }
            }
            this.setData({
              lefthua:dataItem.length-7
            })
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
