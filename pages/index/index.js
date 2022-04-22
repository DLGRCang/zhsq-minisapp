//index.js
//获取应用实例
import http from '../../utils/api'
// import apidata from '../../utils/dataApi'
// import common from '../../utils/common'
import verif from '../../utils/verification'
const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    windowHeight:app.globalData.windowHeight,
    wHeight:app.globalData.wHeight,
    motto: 'Hi 开发者！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    login:0,
    PageCur: '',
    PageCur1: '',
    topNum:0,
    t5If:0,
    tab1Height:0,
    tab2Height:0,
    tab3Height:0,
    village:[],
    xzvillage:[],
    xzwys:"wys",
    xzyys:"yys",
    xuanzexiaoqu:false,
    modalName:null,
    shibainr:'',
    ewmkm:'top:-40rpx;left:40rpx',
    yjkm:'top:-40rpx;left:75rpx',
    lykm:'top:-40rpx;right:40rpx',
    yjkmTrue:true,
    ysimg:'width:40%;height:40%;',
    chaimg:'font-size:0rpx',
    smcuicon:'font-size:0rpx',
    zziconTrue:false,
    lycuicon:'width:0rpx;height:0rpx',
    ewmHeight:0,
    ewmtubiao:'width:0;height:0',
    djewmTrue:false,
    djyjkmTrue:false,
    djlyTrue:false,
    ewmtupianqh:true,
    EwmCss:'#96cd56',
    menList:[
      {id:0,name:'东门',dhLeftCss:'',dhRightCss:'',kaimenTrue:true,yaobshi:1},
      {id:1,name:'西门',dhLeftCss:'',dhRightCss:'',kaimenTrue:true,yaobshi:1},
      {id:2,name:'南门',dhLeftCss:'',dhRightCss:'',kaimenTrue:true,yaobshi:1},
      {id:3,name:'北门',dhLeftCss:'',dhRightCss:'',kaimenTrue:true,yaobshi:1},
    ],
    body1:'',
    body2:'',
    body3:'',
    tabbar:[],
    wyUser:{}
  },

  kaimenClick(e){
   // console.log(e)
   var menList = this.data.menList
   var i = e.currentTarget.dataset.i
    
    menList[i].dhLeftCss = 'openLeft'
    menList[i].dhRightCss = 'openRight'
    menList[i].kaimenTrue = false
  
      var that = this
      var timer = setInterval(() => {
                    menList[i].yaobshi++
                    that.setData({
                      menList:menList
                    })
                    if(menList[i].yaobshi == 10){
                     // console.log('aaa')
                      clearInterval(timer);
                    }
                  }, 40);
      
                  this.setData({
                    menList:menList
                  })
  },
  chsClick(){
    this.setData({
      ewmtubiao:'width:0;height:0',
      EwmCss:'#35a517'
    })

      if(this.data.ewmtupianqh){
        this.setData({
          ewmtupianqh:false,
        })
      }else{
        this.setData({
          ewmtupianqh:true,
        })
      }
      setTimeout(()=>{
        this.setData({
          ewmtubiao:'width:100%;height:100%',
        })
      },100)
      setTimeout(()=>{
        this.setData({
          ewmtubiao:'width:100%;height:100%',
        })
      },300)
      setTimeout(()=>{
        this.setData({
          ewmtubiao:'width:90%;height:90%',
        })
      },400)
      setTimeout(()=>{
        this.setData({
          ewmtubiao:'width:100%;height:100%',
        })
      },550)




 
    
  },
  endClick(){
    this.setData({
      EwmCss:'#96cd56'
    })
  },


  //蓝牙开门
  lyClick(){
   
    //verif.tips("暂未开通此功能")
    // var that = this
    // this.setData({
    //   djewmTrue:false,
    //   djyjkmTrue:false,
    //   djlyTrue:true,
    // })

    // //初始化蓝牙
    // wx.openBluetoothAdapter({
    //   success: function (res) {
    //  // console.log('初始化蓝牙适配器返回' + JSON.stringify(res))
    //   that.lyState()
    //   },
    //   fail:function(res){
    //  // console.log('初始化蓝牙适配器失败' + JSON.stringify(res))
    //   verif.tips('请打开蓝牙')
    //   }
    //   })
  },
  lyState(){
    var that = this;
      //本机蓝牙适配器
      wx.getBluetoothAdapterState({
      success: function (res) {
     // console.log(res)
      if(res.available){
        that.lyScovery()
      }

      },
      fail:function(err){
      //页面日志显示
      verif.tips('蓝牙不可用')
      console.log(err)
      
      }
    })
  },

  //搜索设备
  lyScovery(){
    var that = this;
      wx.startBluetoothDevicesDiscovery({
      services: ['0000','0006'],
      success: function (res) {
        console.log(res)

      },
      fail:function(err){
        console.log(err)
      }
  })
  },

  //


  yjClick(){
    this.setData({
      ewmtubiao:'width:0;height:0',
    })
    if(this.data.djyjkmTrue){
      var menList = this.data.menList
      for(var i in menList){
        menList[i].dhLeftCss = ''
        menList[i].dhRightCss = ''
        menList[i].kaimenTrue = true
        menList[i].yaobshi = 1
      }
      this.setData({
        menList:menList,
        djyjkmTrue:false,
      })
    }else{
      this.setData({
        djewmTrue:false,
        djyjkmTrue:true,
        djlyTrue:false,
      })
    }
    
  },

  ewmClick(){
   
    var that = this
    if(this.data.djewmTrue){
      this.setData({
        ewmtubiao:'width:0;height:0',
        djewmTrue:false
      })
    }else{
      this.setData({
        djewmTrue:true,
        djyjkmTrue:false,
        djlyTrue:false,
      })
      var query = wx.createSelectorQuery()
          query.select('#ewmHeight').boundingClientRect(function (res) { 
                 //console.log(res);
              that.setData({
                ewmHeight:res.width
              })
          }).exec();
  
          this.setData({
            ewmtubiao:'width:100%;height:100%',
          })
          setTimeout(()=>{
            this.setData({
              ewmtubiao:'width:100%;height:100%',
            })
          },300)
          setTimeout(()=>{ 
            this.setData({
              ewmtubiao:'width:90%;height:90%',
            })
          },400)
          setTimeout(()=>{
            this.setData({
              ewmtubiao:'width:100%;height:100%',
            })
          },550)

    }
    
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
  bindGetUserInfo(e) {
     //console.log(e)
     var that = this
     wx.showLoading({
       title: '授权中...'
     })
     
         //console.log(e)
         wx.login({
           success: resa => {
             //console.log(resa)
             http.loginApi({
               data:{
                 code:resa.code,
                 encryptedData:e.detail.encryptedData,
                 iv:e.detail.iv
               },
               success(data) {
                  //console.log(data)
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
                        that.messageList()
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
             //   url: 'https://www.yjhlcity.com/app/sign/checkCodeZHSQrelease', // 就是拼接上前缀,此接口域名是开放接口，可访问
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
  xuzneXq(e){

    this.setData({
      xzvillage:e.currentTarget.dataset.item
    })
   // console.log(this.data.xzvillage)
  },
  qrxzxqClick(){
    wx.setStorageSync('xzvillage', this.data.xzvillage)
    
    this.setData({
      xuanzexiaoqu:false
    })
    wx.navigateTo({
      url: '/pages/index/index'
  })
  },
  gbtchaung(){
    this.setData({
      xzvillage:wx.getStorageSync('xzvillage'),
      xuanzexiaoqu:false
    })
  },
  xunzexq(){
    //console.log(this.data.village)
    if(this.data.village.length > 1){
      this.setData({
        xuanzexiaoqu:true
      })
    }
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  NavChange(e) {
    if(e.currentTarget.dataset.cur == 't14'){
      wx.navigateTo({
        url: '/pages/index/user/about/about'
      })
    }else{
      wx.setStorageSync('clackTabBar', e.currentTarget.dataset.cur)
    if(e.currentTarget.dataset.cur == 't2'||e.currentTarget.dataset.cur == 't3'||e.currentTarget.dataset.cur == 't4'){
        if(verif.checkLogin()){
          //console.log(verif.village)
          if(!wx.getStorageSync('village')||JSON.stringify(wx.getStorageSync('village')) == '{}'){
            verif.tips('您不是小区人员，请联系您所在小区物业')
          }else{

            if(e.currentTarget.dataset.cur == 't3'){
              this.setData({
                PageCur1: e.currentTarget.dataset.cur
              })
              if(this.data.yjkmTrue){
                this.setData({
                  ewmkm:'top:-120rpx;left:-60rpx;transition: all .5s ease;z-index:50;width:80rpx;height:80rpx',
                  yjkm:'top:-160rpx;left:35rpx;transition: all .5s ease;z-index:50;width:80rpx;height:80rpx',
                  lykm:'top:-120rpx;right:-60rpx;transition: all .5s ease;z-index:50;width:80rpx;height:80rpx',
                  ysimg:'width:0;height:0',
                  chaimg:'font-size:30rpx',
                  smcuicon:'font-size:40rpx',
                  lycuicon:'width:40rpx;height:40rpx',
                  yjkmTrue:false,
                  zziconTrue:true
                })
                setTimeout(()=>{
                  this.setData({
                    ewmkm:'top:-125rpx;left:-64rpx;z-index:50;width:80rpx;height:90rpx;',
                    yjkm:'top:-165rpx;left:35rpx;z-index:50;width:80rpx;height:90rpx;',
                    lykm:'top:-125rpx;right:-64rpx;z-index:50;width:80rpx;height:90rpx;',
                  })
                },100)
                setTimeout(()=>{
                  this.setData({
                    ewmkm:'top:-120rpx;left:-60rpx;z-index:50;width:80rpx;height:80rpx',
                    yjkm:'top:-160rpx;left:35rpx;z-index:50;width:80rpx;height:80rpx',
                    lykm:'top:-120rpx;right:-60rpx;z-index:50;width:80rpx;height:80rpx',
                  })
                },250)
                setTimeout(()=>{
                  this.setData({
                    ewmkm:'top:-122rpx;left:-62rpx;z-index:50;width:80rpx;height:82rpx',
                    yjkm:'top:-162rpx;left:35rpx;z-index:50;width:80rpx;height:82rpx',
                    lykm:'top:-122rpx;right:-62rpx;z-index:50;width:80rpx;height:82rpx',
                  })
                },300)
                setTimeout(()=>{
                  this.setData({
                    ewmkm:'top:-120rpx;left:-60rpx;z-index:50;width:80rpx;height:80rpx',
                    yjkm:'top:-160rpx;left:35rpx;z-index:50;width:80rpx;height:80rpx',
                    lykm:'top:-120rpx;right:-60rpx;z-index:50;width:80rpx;height:80rpx',
                  })
                },400)
                
              }else{
                //console.log("aaa")
                var menList = this.data.menList
                for(var i in menList){
                  menList[i].kaimenTrue = true,
                  menList[i].dhLeftCss = ''
                   menList[i].dhRightCss = ''
                }
                setTimeout(()=>{
                  this.setData({
                    ewmkm:'top:-40rpx;left:40rpx;transition: all .2s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
                    yjkm:'top:-40rpx;left:65rpx;transition: all .2s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
                    lykm:'top:-40rpx;right:40rpx;transition: all .2s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
                    ysimg:'width:40%;height:40%',
                    chaimg:'font-size:0rpx',
                    smcuicon:'font-size:0rpx',
                    lycuicon:'width:0rpx;height:0rpx',
                    yjkmTrue:true,
                    zziconTrue:false,
                    PageCur1:this.data.PageCur,
                    djewmTrue:false,
                    djyjkmTrue:false,
                    djlyTrue:false,
                    menList:menList
                  })
                },200)
                
              }

              
            }else{
          
              if(this.data.yjkmTrue){
                this.setData({
                  topNum:0,
                  PageCur: e.currentTarget.dataset.cur,
                  PageCur1:e.currentTarget.dataset.cur
                })
              }else{
                setTimeout(()=>{
                  this.setData({
                    ewmkm:'top:-40rpx;left:40rpx;transition: all .1s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
                    yjkm:'top:-40rpx;left:75rpx;transition: all .1s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
                    lykm:'top:-40rpx;right:40rpx;transition: all .1s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
                    ysimg:'width:40%;height:40%',
                    chaimg:'font-size:0rpx',
                    smcuicon:'font-size:0rpx',
                    yjkmTrue:true,
                    zziconTrue:false
                  })
                
                  this.setData({
                    topNum:0,
                    PageCur: e.currentTarget.dataset.cur,
                    PageCur1:e.currentTarget.dataset.cur
                  })
                },200)
              }
            }
          }
        }
      
    }else{
      if(this.data.yjkmTrue){
        this.setData({
          topNum:0,
          PageCur: e.currentTarget.dataset.cur,
          PageCur1:e.currentTarget.dataset.cur
        })
      }else{
        setTimeout(()=>{
          this.setData({
            ewmkm:'top:-40rpx;left:40rpx;transition: all .1s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
            yjkm:'top:-40rpx;left:75rpx;transition: all .1s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
            lykm:'top:-40rpx;right:40rpx;transition: all .1s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
            ysimg:'width:40%;height:40%',
            chaimg:'font-size:0rpx',
            smcuicon:'font-size:0rpx',
            yjkmTrue:true,
            zziconTrue:false
          })
        
          this.setData({
            topNum:0,
            PageCur: e.currentTarget.dataset.cur,
            PageCur1:e.currentTarget.dataset.cur
          })
        },200)
      }
    }
    }
    
    // if(e.currentTarget.dataset.cur == 't3'){
    //   this.setData({
    //     PageCur1: e.currentTarget.dataset.cur
    //   })
    //   if(this.data.yjkmTrue){
    //     this.setData({
    //       ewmkm:'top:-120rpx;left:-60rpx;transition: all .5s ease;z-index:50;width:80rpx;height:80rpx',
    //       yjkm:'top:-160rpx;left:35rpx;transition: all .5s ease;z-index:50;width:80rpx;height:80rpx',
    //       lykm:'top:-120rpx;right:-60rpx;transition: all .5s ease;z-index:50;width:80rpx;height:80rpx',
    //       ysimg:'width:0;height:0',
    //       chaimg:'font-size:30rpx',
    //       smcuicon:'font-size:40rpx',
    //       lycuicon:'width:40rpx;height:40rpx',
    //       yjkmTrue:false,
    //       zziconTrue:true
    //     })
    //     setTimeout(()=>{
    //       this.setData({
    //         ewmkm:'top:-125rpx;left:-64rpx;z-index:50;width:80rpx;height:90rpx;',
    //         yjkm:'top:-165rpx;left:35rpx;z-index:50;width:80rpx;height:90rpx;',
    //         lykm:'top:-125rpx;right:-64rpx;z-index:50;width:80rpx;height:90rpx;',
    //       })
    //     },100)
    //     setTimeout(()=>{
    //       this.setData({
    //         ewmkm:'top:-120rpx;left:-60rpx;z-index:50;width:80rpx;height:80rpx',
    //         yjkm:'top:-160rpx;left:35rpx;z-index:50;width:80rpx;height:80rpx',
    //         lykm:'top:-120rpx;right:-60rpx;z-index:50;width:80rpx;height:80rpx',
    //       })
    //     },250)
    //     setTimeout(()=>{
    //       this.setData({
    //         ewmkm:'top:-122rpx;left:-62rpx;z-index:50;width:80rpx;height:82rpx',
    //         yjkm:'top:-162rpx;left:35rpx;z-index:50;width:80rpx;height:82rpx',
    //         lykm:'top:-122rpx;right:-62rpx;z-index:50;width:80rpx;height:82rpx',
    //       })
    //     },300)
    //     setTimeout(()=>{
    //       this.setData({
    //         ewmkm:'top:-120rpx;left:-60rpx;z-index:50;width:80rpx;height:80rpx',
    //         yjkm:'top:-160rpx;left:35rpx;z-index:50;width:80rpx;height:80rpx',
    //         lykm:'top:-120rpx;right:-60rpx;z-index:50;width:80rpx;height:80rpx',
    //       })
    //     },400)
        
    //   }else{
    //     setTimeout(()=>{
    //       this.setData({
    //         ewmkm:'top:-40rpx;left:40rpx;transition: all .2s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
    //         yjkm:'top:-40rpx;left:75rpx;transition: all .2s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
    //         lykm:'top:-40rpx;right:40rpx;transition: all .2s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
    //         ysimg:'width:40%;height:40%',
    //         chaimg:'font-size:0rpx',
    //         smcuicon:'font-size:0rpx',
    //         lycuicon:'width:0rpx;height:0rpx',
    //         yjkmTrue:true,
    //         zziconTrue:false,
    //         PageCur1:this.data.PageCur,
    //       })
    //     },200)
        
    //   }

      
    // }else if(e.currentTarget.dataset.cur == 't4'){

    //   if(this.data.yjkmTrue){
    //     if(verif.checkLogin()){
    //       if(verif.village==0){
    //         verif.tips('您不是小区人员')
    //       }else{
    //         this.setData({
    //           topNum:0,
    //           PageCur: e.currentTarget.dataset.cur,
    //           PageCur1:e.currentTarget.dataset.cur
    //         })
    //       }
    //     }
    //   }else{
    //     setTimeout(()=>{
    //       this.setData({
    //         ewmkm:'top:-40rpx;left:40rpx;transition: all .1s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
    //         yjkm:'top:-40rpx;left:75rpx;transition: all .1s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
    //         lykm:'top:-40rpx;right:40rpx;transition: all .1s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
    //         ysimg:'width:40%;height:40%',
    //         chaimg:'font-size:0rpx',
    //         smcuicon:'font-size:0rpx',
    //         yjkmTrue:true,
    //         zziconTrue:false
    //       })
     
    //       if(verif.checkLogin()){
    //         if(verif.village==0){
    //           verif.tips('您不是小区人员')
    //         }else{
    //           this.setData({
    //             topNum:0,
    //             PageCur: e.currentTarget.dataset.cur,
    //             PageCur1:e.currentTarget.dataset.cur
    //           })
    //         }
    //       }
    //     },200)
    //   }
      
    // }else{
    //   if(this.data.yjkmTrue){
    //     this.setData({
    //       topNum:0,
    //       PageCur: e.currentTarget.dataset.cur,
    //       PageCur1:e.currentTarget.dataset.cur
    //     })
    //   }else{
    //     setTimeout(()=>{
    //       this.setData({
    //         ewmkm:'top:-40rpx;left:40rpx;transition: all .1s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
    //         yjkm:'top:-40rpx;left:75rpx;transition: all .1s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
    //         lykm:'top:-40rpx;right:40rpx;transition: all .1s ease-in-out;z-index:-50;width:0rpx;height:0rpx',
    //         ysimg:'width:40%;height:40%',
    //         chaimg:'font-size:0rpx',
    //         smcuicon:'font-size:0rpx',
    //         yjkmTrue:true,
    //         zziconTrue:false
    //       })
        
    //       this.setData({
    //         topNum:0,
    //         PageCur: e.currentTarget.dataset.cur,
    //         PageCur1:e.currentTarget.dataset.cur
    //       })
    //     },200)
    //   }
      
    // }
    
    if(e.currentTarget.dataset.cur == 't5'){
      this.selectComponent("#tip5").showClick()
    }else{
      this.setData({
        t5If:0
      })
    }
    
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },



  onLoad: function () {
    this.messageList()
    //console.log(wx.getStorageSync('wyUser'))
    this.setData({
      wyUser:wx.getStorageSync('wyUser')
    })
   // console.log(this.data.wyUser)
    //console.log(wx.getStorageSync('wxUser'))
    http.tabbarApi({
      success:res=>{
        //console.log(res)
        this.setData({
          tabbar:res.tabbar
        })
      }
    })
    //this.messageList()
    
    // if(wx.getStorageSync('wxUser') == ''&&!wx.getStorageSync('loginSi')){
    //   this.setData({
    //     modalName:'bottomModal'
    //   })
    // }
    //console.log(wx.getStorageSync('village'))
    
    
    //console.log(this.data.xzvillage)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.appid()
    
  },

  messageList(){
  // console.log(wx.getStorageSync('wxUser'))
    var that = this
    if(wx.getStorageSync('wxUser') != ''){
      wx.getSetting({
        success: res => {
          //console.log(res)
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: resa => {
                //console.log(resa)
                wx.login({
                  success: resb => {
                    //console.log(resb)
                    wx.request({
                      url: 'https://www.yjhlcity.com/usercenter/app/sign/checkCodeZHSQrelease', // 就是拼接上前缀,此接口域名是开放接口，可访问
                      method: 'POST', // 判断请求类型，除了值等于'post'外，其余值均视作get 其他的请求类型也可以自己加上的
                      data:{
                        code:resb.code,
                        encryptedData:resa.encryptedData,
                        iv:resa.iv
                      },
                      header: {
                        'content-type': 'application/json',
                      },
                      success(data) {
                            //console.log(data)
                            if(data.data.code == 200){
                              var userInfo = data.data.result.data.userInfo;
                              wx.setStorageSync('wxUser',userInfo)
                              wx.setStorageSync('token',data.data.result.data.token)
                            }
                    
                            let userId;
                            if(wx.getStorageSync('wxUser').phone == "16666666666"){
                              userId = "4a3f693f-d276-4682-a494-e198bc435d0f"
                            }else{
                              userId = wx.getStorageSync('wxUser').id
                            }
                            http.messageApi({
                              data:{
                                userId:userId 
                              },
                              success:res=>{
                                //that.successClick()
                                //console.log(res)
                                if(res[0].code == "400"){
                                    wx.setStorageSync('village', false)
                                    wx.setStorageSync('xzvillage', false)
                                }else{
                                  
                                  if(res.length == 1){
                                   
                                    wx.setStorageSync('village', res[0])
                                    wx.setStorageSync('xzvillage', res[0])
                                    //console.log(res[0])
                                    that.setData({
                                      village:res[0],
                                      xzvillage:res[0]
                                    })
                                  }else{
                                   
                                    wx.setStorageSync('village', res)
                                    if(wx.getStorageSync('xzvillage') != ""){
                                      for(var i in res){
                                        if(res[i].village != null){
                                          if(res[i].village.villageId == wx.getStorageSync('xzvillage').village.villageId){
                                            wx.setStorageSync('xzvillage', res[i])
                                            that.setData({
                                              xzvillage:res[i]
                                            })
                                          }
                                        }
                                        
                                      }
                                      
                                    }
                                    that.setData({
                                      village:res
                                    })
                                  }
                                }
                                that.selectComponent("#dlFalse").readyClick()
                               // console.log(res)
                                // if(res.status == 500){
                                  
                                // }else{
                                //   if(res.code == 40001){
                                //     wx.setStorageSync('village', false)
                                //     wx.setStorageSync('xzvillage', false)
                                //   }else{
                                    
                                //   var xzvillagePage = [];
                                //   wx.setStorageSync('village', res)
                                //   var status = null
                                //   for(var s in res){
                                //     status = s
                                //   }
                                //   if(status != 'noVillage'||JSON.stringify(res) == '{}'){
                                //     var village = []
                                //     for(var i in res){
                                //       village.push(res[i])
                                  
                                //       if(wx.getStorageSync('xzvillage')[0] != undefined){
                                //         if(wx.getStorageSync('xzvillage')[0].villageId == i){
                                //           xzvillagePage = res[i]
                                //         }
                                //       }
                                      
                                //     }
                      
                                //     if(village.length == 1){
                                //       var xzvillage = []
                                //       for(var m in village[0]){
                                //         xzvillage.push(village[0][m])
                                //       }
                                //       this.setData({
                                //         village:village,
                                //         xzvillage:xzvillage
                                //       })
                                //       wx.setStorageSync('xzvillage', xzvillage)
                                //     }else{
                                //       //console.log(xzvillagePage)
                                //       this.setData({
                                //         village:village,
                                //         xzvillage:xzvillagePage
                                //       })
                                //     }
                                //   }else{
                                //     wx.setStorageSync('village', false)
                                //     wx.setStorageSync('xzvillage', false)
                                //   }
                                //   }
                                // }
                              },
                              fail:err=>{
                                
                                console.log(err)
                              }
                            })
                      },
                      fail(err) {
                       // that.failClick()
                        console.log(err)
                      }
                    })
                    // http.loginApi({
                    //   data:{
                    //     code:resb.code,
                    //     encryptedData:resa.encryptedData,
                    //     iv:resa.iv
                    //   },
                    //   success(data) {
                    //      //console.log(data)
                    //     if(data.code == 200){
                    //       var userInfo = data.result.data.userInfo;
                    //       wx.setStorageSync('wxUser',userInfo)
                    //       wx.setStorageSync('token',data.result.data.token)
                    //     }
                    //    },
                    //    fail(err) {
 
                    //    }
                    // })
                  }
                })
              }
            })
          }
        }
      })
      
    }
    
},

//网络丢失
// successClick(){
//   this.selectComponent("#haveTrue").falseClick()
// },
// failClick(){
//   this.selectComponent("#haveTrue").trueClick()
// },
  sxLogin(){
    this.selectComponent("#dlFalse").loginClick()
  },
  sjClick(){
 
    this.setData({
      login:1,
      PageCur:'t2',
      PageCur1:'t2'
    })
  },
  appid(){

    if(wx.getStorageSync('indexId') == ''){
      wx.setStorageSync('indexId', 1)
    }
    var  indexId = wx.getStorageSync('indexId')
    //console.log(indexId)
    if(indexId == 1){
      this.setData({
        login:1,
        PageCur:'t1',
        PageCur1:'t1'
      })
      
    }else if(indexId == 2){
      this.setData({
        login:2,
        PageCur:'t6'
      })
    }else if(indexId == 3){
      this.setData({ 
        login:3,
        PageCur:'t10'
      })
      

    }
    //console.log(this.data.login)
   
  },
  getUserInfo: function(e) {
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  wyhdBot(){
    if(this.data.PageCur == 't10'){
    this.selectComponent("#bot10").botClick()
    }
  },
  
  

  //监听页面显示
  onShow:function(){
   // console.log(wx.getStorageSync('wxUser'))
    
    var that = this
    var query = wx.createSelectorQuery()
    var  indexId = wx.getStorageSync('indexId')
    if(indexId == 1){
      query.select('#footer1').boundingClientRect(function (res) { 
         //console.log(res);

        that.setData({
          tab1Height:res.height
         })
      }).exec();
    }else if(indexId == 2){
      query.select('#footer2').boundingClientRect(function (res) {
        //console.log(res);
       that.setData({
         tab2Height:res.height
        })
     }).exec();
    }else if(indexId == 3){
      query.select('#footer3').boundingClientRect(function (res) {
        // console.log(res);
        that.setData({
          tab3Height:res.height
         })
      }).exec();
    }


    if(wx.getStorageSync('xyuserName') != ""){
      http.loginOutApi({
        data:{
          userName:wx.getStorageSync('xyuserName')
        },
        success:res=>{
          
        }
      })
    }
    
    
    wx.getStorage({
      key: 'llqfb',
      success: function(res){
        //console.log(res)
        if(res.data){
          //console.log(res)
          wx.setStorageSync('llqfb', false)
          if(that.data.PageCur == 't4'){
            that.selectComponent("#t4Onload").llqList()
          }
          //console.log('aaaaaaaaaaaaa')
        }
      }
    })
    wx.getStorage({
      key: 'llqXq',
      success: function(res){
        
        if(res.data){
          //console.log(res)
          wx.setStorageSync('llqXq', false)
          if(that.data.PageCur == 't4'){
            that.selectComponent("#t4Onload").llqList()
          }
        }
        
      }
    })
    
    setTimeout(() => {
      wx.getStorage({
        key: 't5Login',
        success: function(res){
          
          if(res.data){
            //console.log(res)
            wx.setStorageSync('t5Login', false)
            if(that.data.PageCur == 't5'){
              that.selectComponent("#tip5").showClick()
            }
          }
          
        }
      })
    }, 500);
    

 
    //console.log('111')
    //console.log(this.data.login)
    if(this.data.login != 0){
      setTimeout(()=>{
        wx.hideLoading()
      },1000)
    }

    if(this.data.PageCur == 't5'){
  
      if(wx.getStorageSync('llqXq') == true){
        this.selectComponent("#tip5").sxt4Click()
      }
      
      
    }
    
  },
  scry(e){
   //console.log(e.detail.scrollTop) 
    if(this.data.PageCur == 't5'){

      if(e.detail.scrollTop >= 30){
        this.setData({
          t5If:1
        })
      }else{
        this.setData({
          t5If:0
        })
      }

    }   
  }
})
