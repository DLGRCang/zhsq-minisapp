// pages/index/t1/t1.js
import http from '../../../../utils/api'
import util from '../../../../utils/util';
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
    imgUrl:app.globalData.imgUrl,
    CustomBar: app.globalData.CustomBar,
    tzgg:'',
    topItem:[
      {id:1,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts1a.png',text:"访客通行",url:'/pages/index/user/visitor/visitor'},
      {id:2,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts2a.png',text:"物业维修",url:'/pages/index/user/property-maintenance/wywx'},
      {id:3,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts3a.png',text:"物业缴费",url:'/pages/index/user/property-payment/wyjf'},
      {id:4,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts4a.png',text:"生活缴费"},//,url:'/pages/index/living_payment/shjf'
      {id:5,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts5a.png',text:"SOS求助",url:''},
      {id:6,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts6a.png',text:"房屋出租",url:'/pages/index/user/houseRental/fwcz'},
      {id:10,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts10a.png',text:"社区党建",url:'/pages/index/user/partyBuilding/partyBuilding'},
      {id:11,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts11a.png',text:"民情直达",url:'/pages/index/user/complaint/complaint'},
      {id:12,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts12a.png',text:"入驻小区",url:'/pages/index/user/checkIn/checkIn'},
      {id:13,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts13a.png',text:"楼栋布局",url:'/pages/index/user/floor/floor'},
    ],
    gdItem:[
      {id:7,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts7a.png',text:"空中课堂",url:'/pages/index/user/airClass/airClass'},
      {id:8,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts8a.png',text:"视频直播",url:'/pages/index/user/liveBroadcast/liveBroadcast'},
      {id:14,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts14a.png',text:"活动设施",url:''}
    ],



    dataItem:[
      {id:1,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts1a.png',text:"访客通行",url:'/pages/index/user/visitor/visitor'},
      {id:2,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts2a.png',text:"物业维修",url:'/pages/index/user/property-maintenance/wywx'},
      {id:3,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts3a.png',text:"物业缴费",url:'/pages/index/user/property-payment/wyjf'},
      {id:4,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts4a.png',text:"生活缴费"},//,url:'/pages/index/living_payment/shjf'
      {id:5,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts5a.png',text:"SOS求助",url:''},
      {id:6,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts6a.png',text:"房屋出租",url:'/pages/index/user/houseRental/fwcz'},
      //{id:7,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts7a.png',text:"空中课堂",url:'/pages/index/user/airClass/airClass?video=0'},
      {id:7,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts7a.png',text:"统一视讯",url:'/pages/index/user/videoList/videoList'},
      // {id:8,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts8a.png',text:"视频直播",url:'/pages/index/user/liveBroadcast/liveBroadcast'},
      //{id:9,image:'../../../images/t1/ts9.png',text:"党支部",url:'/pages/index/partyBranch/partyBranch'},
      {id:10,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts10a.png',text:"社区党建",url:'/pages/index/user/partyBuilding/partyBuilding'},
      {id:11,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts11a.png',text:"民情直达",url:'/pages/index/user/complaint/complaint'},
      {id:12,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts12a.png',text:"入驻小区",url:'/pages/index/user/checkIn/checkIn'},
      // {id:13,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts13a.png',text:"楼栋布局",url:'/pages/index/user/floor/floor'},
      // {id:14,image:'https://www.yjhlcity.com/zhsq/assets/images/applets/ts14a.png',text:"活动设施",url:''}
    ],
    msgList: [
      { img: 'https://www.yjhlcity.com/zhsqminiapp/banner1.jpg' },
      { img: 'https://www.yjhlcity.com/zhsqminiapp/banner2.jpg' },
      { img: 'https://www.yjhlcity.com/zhsqminiapp/banner3.jpg' }
    ],
    jianxianL:[
      {ids:"1"},{ids:"0.9"},{ids:"0.8"},{ids:"0.7"},{ids:"0.6"},{ids:"0.5"},{ids:"0.4"},{ids:"0.3"},{ids:"0.2"},{ids:"0.1"}
    ],
    dataItem1:[],
    dataItem2:[],
    scrollLeft:'',
    lefthua:'2',
    time:'',
    timeL:0,
    rowsWJ:[],
    //rowsSQHD:[],
    
    xwrows:[],
    gddh:false,
    gddhchu:'100',
    shopRows:[],
    ifInput:false,
    nameInput:"",
    phoneInput:"",
    qrtjInputData:[],
    qrtjInputData1:[],
    sosPhone:false,
    shopping:false,
    toupiaoTrue:true
  },
 
  /**
   * 组件的方法列表
   */


  methods: {
    // webview(){
    //   wx.navigateTo({
    //     url: '/pages/index/webView/webView'
    //   })
    // },
    ifTrueClick(){
      this.setData({
        ifInput:true
      })
    },
    nameInput(e){
      this.setData({
        nameInput:e.detail.value
      })
    },
    phoneInput(e){
      this.setData({
        phoneInput:e.detail.value
      })
    },
    qrtjInputClick(){
      console.log(this.data.qrtjInputData)
      if(this.data.nameInput == ""){
        verif.tips("请输入紧急联系人姓名")
      }else if(this.data.phoneInput == ""){
        verif.tips("请输入紧急联系人手机号")
      }else{
        if(verif.checkPhone(this.data.phoneInput)){
          var id = this.data.qrtjInputData.length
          var data = {id:id,name:this.data.nameInput,input:this.data.phoneInput}
          var qrtjInputData = this.data.qrtjInputData
          if(qrtjInputData==null || qrtjInputData=='' || qrtjInputData==undefined){
            qrtjInputData=[];
          }
          qrtjInputData.push(data)
          wx.setStorageSync('qrtjInputData',qrtjInputData)
         this.setData({
          qrtjInputData1: qrtjInputData.reverse(),
          ifInput:false
         })
        }
      }
      
      
    },
    bhClick(e){
      //console.log(e.currentTarget.dataset.phone)
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.phone
      })
    },
    gbifTrueClick(){
      this.setData({
        sosPhone:false
      })
    },
    // 生活跳转详情页面
  life_details:function(e){
    //console.log(e)
    wx.navigateTo({
      url: '/pages/index/user/life_details/life_details?item='+JSON.stringify(e.currentTarget.dataset.item)
    })
  },
    
    gddhClick(){
      this.setData({
        gddh:true
      })
      var timer = setInterval(()=>{
        //console.log(this.data.gddhchu)
        this.setData({
          gddhchu:this.data.gddhchu - 10
        })
        if(this.data.gddhchu == 0){
          clearInterval(timer)
        }
      },10)
      
    },
    gdnrtcClick(){
      this.setData({
        gddh:false
      })
      var timer = setInterval(()=>{
        //console.log(this.data.gddhchu)
        this.setData({
          gddhchu:this.data.gddhchu + 10
        })
        if(this.data.gddhchu == 100){
          clearInterval(timer)
        }
      },10)
    },
    // 社区活动跳转详情页
  sqhd_xq(e){
    //console.log(e)
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/index/user/communityDetails/sq_hdxq?id='+id
    })
  },

  contentClick(e){
   // console.log(wx.getStorageSync('xzvillage'))
    //console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
   
    if(e.currentTarget.dataset.url != ''){
     
      if(id == 5){
          wx.navigateTo({
            url: e.currentTarget.dataset.url
          }) 
      }else if(verif.checkLogin()){
       // wx.removeStorageSync('xzvillage')
        //console.log(wx.getStorageSync('village'))
        if(id == 1||id == 10){
          wx.navigateTo({
            url: e.currentTarget.dataset.url
          }) 
        }else{
         
          if(wx.getStorageSync('village') == false){
            verif.tips('您不是小区人员，不能操作该功能')
          }else if(wx.getStorageSync('xzvillage') == ''){
            verif.tips('请先选择您的小区')
            setTimeout(()=>{
              this.triggerEvent('xunzexq')
            },2000)
            
          }else if(wx.getStorageSync('xzvillage').houseList == null){
            verif.tips('您不是本小区住户,不能操作该功能')
          }else{
            if(id == 6||id == 12){
              //console.log(wx.getStorageSync('xzvillage'))
              var id = 0
              for(var i in wx.getStorageSync('xzvillage').houseList){
                if(wx.getStorageSync('xzvillage').houseList[i].isMaster == 1){
                  id = wx.getStorageSync('xzvillage').houseList[i].isMaster
                  break;
                }
              }
  
              if(id == 0){
                verif.tips('您不是户主不可操作此功能')
              }else if(id == 1){
                wx.navigateTo({ 
                  url: e.currentTarget.dataset.url
                }) 
              }
            }else{
              if(id == 13){
                  verif.tips("暂未开通此功能")
              }else{
                wx.navigateTo({
                  url: e.currentTarget.dataset.url
                }) 
              }
              
            }
          }
        }
        
        // wx.navigateTo({
        //   url: e.currentTarget.dataset.url
        // }) 
      }
      // if(id == 2&&verif.checkLogin()){
      //   wx.navigateTo({
      //     url: e.currentTarget.dataset.url
      //   })
      // }else{
      //   wx.navigateTo({
      //     url: e.currentTarget.dataset.url
      //   })
      // }
      
    }else if(id == 14){
      verif.tips("暂未开通此功能")
    }

    if(e.currentTarget.dataset.id == '5'){
      this.setData({
        sosPhone:true
      })
      // wx.makePhoneCall({
      //   phoneNumber: '110',
      // })
    }

    if(e.currentTarget.dataset.id == '4'){

        wx.navigateToMiniProgram({
          appId: 'wxd2ade0f25a874ee2',
          path: 'main/pages/nativeindex/nativeindex',
          success: function (res) { },
          fail: function (res) { }
        })
 
    }

    
  },
  xqvode(e){
    wx.navigateTo({
      url:'/pages/index/user/vote/kaishi_tp?id='+e.currentTarget.dataset.id
    })
  },
  xqvodetwo(){
    wx.navigateTo({
      url:'/pages/index/user/vote/kaishi_tp' 
    })
  },
  xqvodethree(){
    wx.navigateTo({
      url:'/pages/index/user/vote/kaishi_tp' 
    })
  },
  getleft(e){
    //console.log(e)
    this.setData({
      scrollLeft:e.detail.scrollLeft
    })
  },
// 通知公告
  tzgg(){
    wx.navigateTo({
      url: '/pages/index/user/notice/tzgg'
    })
  },

  sqhd_xq(){
    wx.navigateTo({
      url: '../community/community'
    })
  },
  wenjuan(){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.wjApi({
      success:res=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        
        //console.log(res)
        this.setData({
          rowsWJ:res.rows
        })
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

  tjsjClick(){
      this.triggerEvent('sjClick')
  },

  timeList(){
    var time = util.formatTime(new Date)
    var times = time.split(' ')[0]
    this.setData({
      time:time,
      timeL:times
    })
  },
  sqhdList(){
    if(this.data.rowsSQHD.length == 0){
      wx.showLoading({
        title: '拼命加载中',
      })
      http.commrmApi({
        
        success:res=>{
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").falseClick()
            },
          })
          //console.log(res)
          var rowsList = res.rows
          
          for(var i in rowsList){
            if(rowsList[i].activeStartTime.split(' ')[0] != rowsList[i].activeEndTime.split(' ')[0]){
              rowsList[i].time = rowsList[i].activeStartTime +'-'+rowsList[i].activeEndTime
            }else{
              rowsList[i].time = rowsList[i].activeStartTime +'-'+rowsList[i].activeEndTime.split(' ')[1]
            }
            
          }
          this.setData({
            rowsSQHD:res.rows[0]
          })
         // console.log(this.data.rowsSQHD)

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
    }
    
  },

  xiangqing(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/index/user/communityDetails/sq_hdxq?id='+id
    })
  },
  

  xinwenList(){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.newsApi({
      data:{
        code:'wytzfbgl',
        cur:'1'
      },
      success:res=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        //console.log(res)
        for(var i in res.rows){
          if(res.rows[i].isTop == '置顶'){
            //console.log(res.rows[i])
            this.setData({
              tzgg:res.rows[i].title
            })
          }else{
            this.setData({
              tzgg:res.rows[0].title
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
        console.log(err)
      }
    })
    http.newsApi({
      data:{
        code:'sqxw',
        cur:'1'
      },
      success:res=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        this.setData({
          xwrows:res.rows
        })
        //console.log(res)
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
    this.wenjuan()
  },
  renlian(){
   // console.log('aa')
    wx.checkIsSupportSoterAuthentication({
      success(res) {
        //console.log(res)
        wx.setStorageSync('user', res)
        // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
        // res.supportMode = ['fingerPrint'] 只支持指纹识别
        // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
      },
      fail(err){
        console.log(err)
      }
    })
  },
  xwDetails(e){
    //console.log(e.currentTarget.dataset.item)
    var item = encodeURIComponent(JSON.stringify(e.currentTarget.dataset.item))
    wx.navigateTo({
      url: '/pages/index/user/notice-details/notice-details?item='+item
    })
  },
  messageList(){
      http.messageApi({
        data:{
          userId:wx.getStorageSync('wxUser').id
        },
        success:res=>{
          //console.log(res)
          var status = null
            for(var i in res){
              status = i
            }
            if(status != 'noVillage'){
              wx.setStorageSync('village', res)
              this.triggerEvent('messageListChong')
            }else{
              wx.setStorageSync('village', false)
            }
            
          
        },
        fail:err=>{
          console.log(err)
        }
      })
  },

 
  listpageshoplisArr(){
    if(wx.getStorageSync('xzvillage') != ''){
      http.listpageshoplisApi({
        data:{
          type:0,
          villageid:wx.getStorageSync('xzvillage').village.villageId,
          number:2
        },
        success:res=>{
         // console.log(res)
          this.setData({
            shopRows:res.rows
          })
        },
        fail:err=>{
          console.log(err)
        }
      })
    }
    
  },

  readyClick(){
    this.tabbar()
    this.listpageshoplisArr()
  },

  tabbar(){
    
    http.tabbarApi({
      success:res=>{
        //console.log(res)
        this.setData({
          shopping:res.shopping
        })
      }
    })
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
      if(wx.getStorageSync('xzvillage') == ""){
        this.setData({
          toupiaoTrue:false
        })
      }
      
      
     // console.log(wx.getStorageSync('wxUser').id)
    // console.log(this.data.shopping)
      
      //this.sqhdList()
      if(wx.getStorageSync('qrtjInputData') != ""){
      this.setData({
        qrtjInputData1:wx.getStorageSync('qrtjInputData').reverse(),
        qrtjInputData:wx.getStorageSync('qrtjInputData')
      })
      }
      
      //console.log(wx.getStorageSync('qrtjInputData'))
      
      
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
      this.wenjuan()
      this.timeList()
      this.xinwenList()
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
