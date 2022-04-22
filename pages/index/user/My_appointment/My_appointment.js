// pages/index/My_appointment/My_appointment.js
import verif from '../../../../utils/verification'
import drawQrcode from '../../../../utils/weapp.qrcode.js'
import http from '../../../../utils/api'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
    pullup:'#1BB1FD',
    Length:7,    //输入框个数 
    isFocus:true,  //聚焦 
    Value:"",    //输入的内容 
    ispassword:false, //是否密文显示 true为密文， false为明文。
     // tab 切换
     tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    }, 
    listData:[],
    cdList:[],
    qsTrue:true,
    ewmTrue:false,
    img:null
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

// 场地预约 跳转详情
xiangqing(e){
  //console.log(e)
  var id = e.currentTarget.dataset.id
  wx.navigateTo({
    url: '/pages/index/user/service/cd_fwxq?id='+id
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  

   

  onLoad: function (options) {
    setInterval(() => {
      if(this.data.pullup == '#1BB1FD'){
        this.setData({
          pullup:'#0586F8'
        })
      }else{
        this.setData({
          pullup:'#1BB1FD'
        })
      }
    }, 700);
    this.kmyuyue()
    this.cdyuyue()
    // if(Object.keys(this.data.listData).length == 0){
    //   this.setData({
    //     qsTrue:false
    //   })
    // }
  },
  scewmClick(e){
    console.log()
    var that = this
    let url ='data:image/png;base64,'+e.currentTarget.dataset.item.QRCode
    console.log(url)
        that.setData({
          img:url,
          ewmTrue:true
        })
    // wx.request({
    //   url: "https://www.yjhlcity.com/zhsqhik/app/release/hikApi/creatQRcode?str="+e.currentTarget.dataset.item.QRCode, //获取图片的URL
    //   method:"get",
    //   responseType: 'arraybuffer',    //ArrayBuffer涉及面比较广，我的理解是ArrayBuffer代表内存之中的一段二进制数据，一旦生成不能再改。可以通过视图（TypedArray和DataView）进行操作。
    //   success (res) {
    //     let url ='data:image/png;base64,'+wx.arrayBufferToBase64(res.data)
    //     that.setData({
    //       img:url,
    //       ewmTrue:true
    //     })
    //   },
    //   fail(res){
    //     Toast.clear();
    //   }
    // })
    // http.creatQRcodeApi({
    //   data:{
    //     str:e.currentTarget.dataset.item.QRCode
    //   },
    //   success:res=>{
    //     console.log(res)
    //     let url =wx.arrayBufferToBase64(res)
    //     console.log(url)
    //     this.setData({
    //       img:res,
    //       ewmTrue:true
    //     })
    //   }
    // })
  },
  ewmgbClick(){
    this.setData({
      ewmTrue:false
    })
  },
  kmyuyue(){
    http.getVisitinfoByUSerApi({

      success:res=>{

        let date = new Date()
        for(var i in res.data){
          let startTime = new Date(res.data[i].visitStartTime)
          let endtTime = new Date(res.data[i].visitEndTime)
          if(startTime > date){
            res.data[i].isTime = 0
          }else if(startTime <= date && date <= endtTime){
            res.data[i].isTime = 1
          }else{
            res.data[i].isTime = 2
          }
        }
        //console.log(res)
        this.setData({
          listData:res.data
        })
      }
    })
  },

  cdyuyue(){
    //console.log(wx.getStorageSync('xzvillage'))
    http.listconstructionsinfoApi({
      data:{
        userId:wx.getStorageSync('xzvillage').houseList[0].unifiedUserId
      },
      success:res=>{
        this.setData({cdList:res})
        console.log(res)
      }
    })
  },

  fuzhiClick(e){
    //console.log(e.currentTarget.dataset.number)
    wx.setClipboardData({
      data: e.currentTarget.dataset.number,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})