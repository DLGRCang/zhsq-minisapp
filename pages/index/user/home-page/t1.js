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
    CustomBar: app.globalData.CustomBar,
    topItem:[
      {id:1,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts1a.png',text:"访客通行",url:'/pages/index/user/visitor/visitor'},
      {id:2,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts2a.png',text:"物业维修",url:'/pages/index/user/property-maintenance/wywx'},
      {id:3,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts3a.png',text:"物业缴费",url:'/pages/index/user/property-payment/wyjf'},
      {id:4,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts4a.png',text:"生活缴费"},//,url:'/pages/index/living_payment/shjf'
      {id:5,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts5a.png',text:"SOS求助",url:''},
      {id:6,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts6a.png',text:"房屋出租",url:'/pages/index/user/houseRental/fwcz'},
      {id:10,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts10a.png',text:"社区党建",url:'/pages/index/user/partyBuilding/partyBuilding'},
      {id:11,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts11a.png',text:"民情直达",url:'/pages/index/user/complaint/complaint'},
      {id:12,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts12a.png',text:"入驻小区",url:'/pages/index/user/checkIn/checkIn'},
      {id:13,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts13a.png',text:"楼栋布局",url:'/pages/index/user/floor/floor'},
    ],
    gdItem:[
      {id:7,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts7a.png',text:"空中课堂",url:'/pages/index/user/airClass/airClass'},
      {id:8,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts8a.png',text:"视频直播",url:'/pages/index/user/liveBroadcast/liveBroadcast'},
      {id:14,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts14a.png',text:"活动设施",url:''}
    ],
    dataItem:[
      {id:1,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts1a.png',text:"访客通行",url:'/pages/index/user/visitor/visitor'},
      {id:2,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts2a.png',text:"物业维修",url:'/pages/index/user/property-maintenance/wywx'},
      {id:3,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts3a.png',text:"物业缴费",url:'/pages/index/user/property-payment/wyjf'},
      {id:4,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts4a.png',text:"生活缴费"},//,url:'/pages/index/living_payment/shjf'
      {id:5,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts5a.png',text:"SOS求助",url:''},
      {id:6,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts6a.png',text:"房屋出租",url:'/pages/index/user/houseRental/fwcz'},
      {id:7,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts7a.png',text:"空中课堂",url:'/pages/index/user/airClass/airClass'},
      {id:8,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts8a.png',text:"视频直播",url:'/pages/index/user/liveBroadcast/liveBroadcast'},
      //{id:9,image:'../../../images/t1/ts9.png',text:"党支部",url:'/pages/index/partyBranch/partyBranch'},
      {id:10,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts10a.png',text:"社区党建",url:'/pages/index/user/partyBuilding/partyBuilding'},
      {id:11,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts11a.png',text:"民情直达",url:'/pages/index/user/complaint/complaint'},
      {id:12,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts12a.png',text:"入驻小区",url:'/pages/index/user/checkIn/checkIn'},
      {id:13,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts13a.png',text:"楼栋布局",url:'/pages/index/user/floor/floor'},
      {id:14,image:'https://yiqi.sucstep.com/zhsq/assets/images/applets/ts14a.png',text:"活动设施",url:''}
    ],
    msgList: [
      { img: 'https://yiqi.sucstep.com/zhsq/assets/images/applets/banner1.1.jpg' },
      { img: 'https://yiqi.sucstep.com/zhsq/assets/images/applets/banner2.1.jpg' },
      { img: 'https://yiqi.sucstep.com/zhsq/assets/images/applets/banner3.1.jpg' }
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
    modalName:null,
    xwrows:[],
    gddh:false,
    gddhchu:'100',
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
  },
 
  /**
   * 组件的方法列表
   */


  methods: {
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
    //console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    if(e.currentTarget.dataset.url != ''){
      if(id == 5){
          wx.navigateTo({
            url: e.currentTarget.dataset.url
          }) 
      }else if(verif.checkLogin()){
       // wx.removeStorageSync('xzvillage')
        //console.log(wx.getStorageSync('xzvillage'))
        if(wx.getStorageSync('village') == ''){
          verif.tips('您不是小区人员，不能操作该功能')
        }else if(wx.getStorageSync('xzvillage') == ''){
          verif.tips('请先选择您的小区')
          setTimeout(()=>{
            this.triggerEvent('xunzexq')
          },2000)
          
        }else{
          if(id == 6||id == 12){
            var id = 0
            for(var i in wx.getStorageSync('xzvillage')){
              id = wx.getStorageSync('xzvillage')[i].isMaster
            }

            if(id == 0){
              verif.tips('您不是户主不可操作此功能')
            }else if(id == 1){
              wx.navigateTo({
                url: e.currentTarget.dataset.url
              }) 
            }
          }else{
            wx.navigateTo({
              url: e.currentTarget.dataset.url
            }) 
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
      
    }

    if(e.currentTarget.dataset.id == '5'){
      wx.makePhoneCall({
        phoneNumber: '110',
      })
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
  wxsqjjClick(){
    this.setData({
      modalName:'null'
    })
    wx.setStorageSync('loginSi', true)
  },
  loginClick(){
    this.setData({
      modalName:'null'
    })
  },

  xinwenList(){
    wx.showLoading({
      title: '拼命加载中',
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

  bindGetUserInfo(e) {
   // console.log(e)
    var that = this
    wx.showLoading({
      title: '授权中...',
    })
        //console.log(e)
        wx.login({
          success: resa => {
            http.loginApi({
              data:{
                code:resa.code,
                encryptedData:e.detail.encryptedData,
                iv:e.detail.iv
              },
              success(data) {
                 console.log(data)
                 if(data.code == 200){
      //                  var user = {
      //   userId:'100',
      //   floorId:'c12279b2-1b2a-40e4-a34e-9ab9104279f7',
      //   unitId:'a1e60cbe-19d0-4755-80cf-67ea43d29136',
      //   roomId:'461a4ce2-595f-45cc-b0d4-dd2d0add873a'
      // }

      // wx.setStorageSync('user', user)
                  
                   var userInfo = data.result.data.userInfo;
                   userInfo.avatarUrl = e.detail.userInfo.avatarUrl
                   wx.setStorageSync('wxUser',userInfo)
                   wx.setStorageSync('token',data.result.data.token)
                   wx.setStorageSync('loginSi', true)
                
                   wx.hideLoading({
                     success: (res) => {
                       verif.tips('授权成功')
                       that.setData({
                         modalName:'null'
                       })
                     },
                   })
                 }else{
                     wx.navigateTo({
                         url: '/pages/Login-on/Login'
                     })
                 }
               },
               fail(err) {
                 console.log(err)
               }
            })
            // wx.request({
            //   url: 'https://yiqi.sucstep.com/app/sign/checkCodeZHSQrelease', // 就是拼接上前缀,此接口域名是开放接口，可访问
            //   method: 'post', // 判断请求类型，除了值等于'post'外，其余值均视作get 其他的请求类型也可以自己加上的
            //   data:{
            //     code:resa.code,
            //     encryptedData:e.detail.encryptedData,
            //     iv:e.detail.iv
            //   },
            //   header: {
            //     'content-type': 'application/json'
            //   },
            //   success(data) {
            //    // console.log(data)
            //     if(data.data.code == 200){
                  
            //       var userInfo = data.data.result.data.userInfo;
            //       userInfo.avatarUrl = e.detail.userInfo.avatarUrl
            //       wx.setStorageSync('wxUser',userInfo)
            //       wx.setStorageSync('token',data.data.result.data.token)
            //       wx.setStorageSync('loginSi', true)
               
            //       wx.hideLoading({
            //         success: (res) => {
            //           verif.tips('授权成功')
            //           that.setData({
            //             modalName:'null'
            //           })
            //         },
            //       })
            //     }else{
            //         wx.navigateTo({
            //             url: '/pages/Login-on/Login'
            //         })
            //     }
            //   },
            //   fail(err) {
            //     console.log(err)
            //   }
            // })
           // console.log(res)
          }
        })



    // if (e.detail.userInfo != undefined){
    
    //   // wx.getUserInfo({
    //   //   success: res => {
    //   //     wx.setStorageSync('wxUser',res)

    //   //   }
    //   // })
    //   // var user = {
    //   //   userId:'100',
    //   //   floorId:'c12279b2-1b2a-40e4-a34e-9ab9104279f7',
    //   //   unitId:'a1e60cbe-19d0-4755-80cf-67ea43d29136',
    //   //   roomId:'461a4ce2-595f-45cc-b0d4-dd2d0add873a'
    //   // }

    //   // wx.setStorageSync('user', user)
    //  // wx.setStorageSync('loginSi', true)
    //   //后台授权
    //   // wx.showToast({
    //   //   title: '登录成功',
    //   // })
      
    //   // this.setData({
    //   //   modalName:'null'
    //   // })

    //   // setTimeout(()=>{
    //   //   wx.navigateTo({
    //   //     url: '/pages/index/UserSelection/UserSelection'
    //   //   })
    //   // },1000)
      
      
    //   // setTimeout(()=>{
    //   //   wx.navigateBack({
    //   //     delta: 1
    //   //   })
    //   // },1000)
    // }
  },
  getAddInfo(){
    this.wenjuan()
  },
  renlian(){
    console.log('aa')
    wx.checkIsSupportSoterAuthentication({
      success(res) {
        console.log(res)
        wx.setStorageSync('user', res)
        // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
        // res.supportMode = ['fingerPrint'] 只支持指纹识别
        // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
      },
      fail(err){
        console.log(err)
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
     // console.log(wx.getStorageSync('wxUser').id)
     //console.log('aaa')
      // http.messageApi({
      //   data:{
      //     userId:wx.getStorageSync('wxUser').id
      //   },
      //   success:res=>{
      //     console.log(res)
      //     wx.setStorageSync('village', res)
      //   },
      //   fail:err=>{
      //     console.log(err)
      //   }
      // })
      this.wenjuan()
      this.timeList()
      this.xinwenList()
      //this.sqhdList()
      if(wx.getStorageSync('wxUser') == ''&&!wx.getStorageSync('loginSi')){
        this.setData({
          modalName:'bottomModal'
        })
      }
      
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
