// pages/index/WY_wxd/WY_wxd.js
import http from '../../../../utils/api'
import util from '../../../../utils/util'
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    CustomBar:String,
    windowHeight:String,
    wHeight:String
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tCustomBar:app.globalData.CustomBar+60,
    pCustomBar:app.globalData.CustomBar+30,
    TabCur: 1,
    scrollLeft: 0 ,
    dateC: '2020-1-1',
    date0:'',
    date1:'',
    date2:'',
    date3:'',
    date4:'',
    date5:'',
    date6:'',
    date7:'',
    date8:'',
    date9:'',
    date10:'',
    shows: false,
    tabList1:[
      {id:0,tname:'全部'},
      {id:1,tname:'待审核'},
      {id:2,tname:'已审核'},
      {id:3,tname:'维修中'},
      {id:4,tname:'完成'},
      {id:5,tname:'已确认'},
      {id:6,tname:'已拒绝'},
    ],
    tabList2:[
      {id:7,tname:'全部'},
      {id:8,tname:'待接单'},
      {id:9,tname:'维修中'},
      {id:10,tname:'已完成'}
    ],
    curHdIndex:0,
    curHdIndex1:7,
    rows0:[],
    rows1:[],
    rows2:[],
    rows3:[],
    rows4:[],
    rows5:[],
    rows6:[],
    rows7:[],
    rows8:[],
    rows9:[],
    rows10:[],
    wyUser:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 结果记录显示 隐藏
  Jgjlshow:function(){
    // console.log(2);
      var that = this;
      var sh = that.data.shows;
      that.setData({
        shows: !sh
      })
  },

  // tab切换
  tab: function (e) {
    //console.log(e)
    if(this.data.wyUser == 2){
      this.setData({
        curHdIndex:e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
    }else if(this.data.wyUser == 3){
      this.setData({
        curHdIndex1:e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
    }
    
    //console.log(e);
  },  
  tab1: function (e) {
    //var dataId = e.currentTarget.dataset.id;
    var dataId = e.currentTarget.id;
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr1: obj
    })
    //console.log(e);
  }, 
  DateChange(e) {
    //console.log(e)
    if(this.data.curHdIndex == 0){
      this.setData({
        date0: e.detail.value
      })
    }else if(this.data.curHdIndex == 1){
      this.setData({
        date1: e.detail.value
      })
    }else if(this.data.curHdIndex == 2){
      this.setData({
        date2: e.detail.value
      })
    }else if(this.data.curHdIndex == 3){
      this.setData({
        date3: e.detail.value
      })
    }else if(this.data.curHdIndex == 4){
      this.setData({
        date4: e.detail.value
      })
    }else if(this.data.curHdIndex == 5){
      this.setData({
        date5: e.detail.value
      })
    }else if(this.data.curHdIndex == 6){
      this.setData({
        date6: e.detail.value
      })
    }else if(this.data.curHdIndex == 7){
      this.setData({
        date7: e.detail.value
      })
    }else if(this.data.curHdIndex == 8){
      this.setData({
        date8: e.detail.value
      })
    }else if(this.data.curHdIndex == 9){
      this.setData({
        date9: e.detail.value
      })
    }else if(this.data.curHdIndex == 10){
      this.setData({
        date10: e.detail.value
      })
    }
    
  },
  getAddInfo(){
    this.xgArr()
  },
  wxdArr(){
    wx.showLoading({
      title: '拼命加载中',
    })
    if(wx.getStorageSync('wyUser') == 2){
      http.listpagerepairApi({
        data:{
          page:1
        },
        success:res=>{
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").falseClick()
            },
          })
          this.setData({ 
            rows0:res.rows
          })
          console.log(res)
          var rows1 = this.data.rows1
          var rows2 = this.data.rows2
          var rows3 = this.data.rows3
          var rows4 = this.data.rows4
          var rows5 = this.data.rows5
          var rows6 = this.data.rows6
          var data = res.rows
          for(var i in data){
            if(data[i].state == 1){
              rows1.push(data[i])
              this.setData({
                rows1: rows1
              })
            }else if(data[i].state == 2){
              rows2.push(data[i])
              this.setData({
                rows2: rows2
              })
            }else if(data[i].state == 3){
              rows3.push(data[i])
              this.setData({
                rows3: rows3
              })
            }else if(data[i].state == 4){
              rows4.push(data[i])
              this.setData({
                rows4: rows4
              })
            }else if(data[i].state == 5){
              rows5.push(data[i])
              this.setData({
                rows5: rows5
              })
            }else if(data[i].state == 6){
              rows6.push(data[i])
              this.setData({
                rows6: rows6
              })
            }
          }
        },
        fail:err=>{
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").trueClick()
            },
          })
        }
      })
    }else if(wx.getStorageSync('wyUser') == 3){
      http.selfListApi({
        data:{
          userId:wx.getStorageSync('user').userId
        },
        success:res=>{
          console.log(res)
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").falseClick()
            },
          })
          this.setData({ 
            rows7:res.data.repairList
          })
    

          var rows8 = this.data.rows8
          var rows9 = this.data.rows9
          var rows10 = this.data.rows10
          
          var data = res.data.repairList
          for(var i in data){
            if(data[i].state == 2){
              rows8.push(data[i])
              this.setData({
                rows8: rows8
              })
            }else if(data[i].state == 3){
              rows9.push(data[i])
              this.setData({
                rows9: rows9
              })
            }else if(data[i].state == 5){
              rows10.push(data[i])
              this.setData({
                rows10: rows10
              })
            }
          }
        },
        fail:err=>{
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").trueClick()
            },
          })
        }
      })
    }
    
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  },
 
  /*组件生命周期*/ 
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {
      this.wxdArr()
      //console.log(util.formatTime1(new Date).split(' ')[0])
      
    },
    
    //在组件实例进入页面节点树时执行
    attached() { 
   
    },
    //在组件在视图层布局完成后执行
    ready() {
      this.setData({
        date0:util.formatTime1(new Date).split(' ')[0],
        date1:util.formatTime1(new Date).split(' ')[0],
        date2:util.formatTime1(new Date).split(' ')[0],
        date3:util.formatTime1(new Date).split(' ')[0],
        date4:util.formatTime1(new Date).split(' ')[0],
        date5:util.formatTime1(new Date).split(' ')[0],
        date6:util.formatTime1(new Date).split(' ')[0],
        date7:util.formatTime1(new Date).split(' ')[0],
        date8:util.formatTime1(new Date).split(' ')[0],
        date9:util.formatTime1(new Date).split(' ')[0],
        date10:util.formatTime1(new Date).split(' ')[0],
        time:util.formatTime1(new Date).split(' ')[1]
      })
      this.setData({
        wyUser:wx.getStorageSync('wyUser')
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
   
   
  },
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
 
})
