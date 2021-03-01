// pages/visitor/visitor.js
import verif from '../../../../utils/verification'
import drawQrcode from '../../../../utils/weapp.qrcode.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Length:7,    //输入框个数 
  isFocus:true,  //聚焦 
  Value:"",    //输入的内容 
  ispassword:false, //是否密文显示 true为密文， false为明文。
  fudongText:'',
  botFudong:0,
  ztban:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getClipboardData({
      success:res=>{
        // console.log(res)
        // console.log(res.data.charCodeAt())
        var number = res.data.charCodeAt()
        if(number >= 48 && number <= 57 && res.data.length == 7){
          //console.log('aaa')
          that.setData({
            fudongText:res.data,
            ztban:true
          })
        }
      }
    })
    
  },
  InputFocus(e) {
    //console.log(e)
    this.setData({
      botFudong: e.detail.height
    })

    var that = this
    wx.getClipboardData({
      success:res=>{
        // console.log(res)
        // console.log(res.data.charCodeAt())
        var number = res.data.charCodeAt()
        if(number >= 48 && number <= 57 && res.data.length == 7){
          //console.log('aaa')
          that.setData({
            fudongText:res.data,
            ztban:true
          })
        }
      }
    })
    
  },
 
  cxewmClick(){
    //console.log(this.data.Value.length) 0000000
    if(this.data.Value.length < 7){
      verif.tips('请写全临时密码')
    }else{
      drawQrcode({
        width: 200,
        height: 200,
        x: 0,
        y: 0,
        canvasId: 'myQrcode',
        // ctx: wx.createCanvasContext('myQrcode'),
        typeNumber: 10,
        text: this.data.Value,
        // image: {
        //   imageResource: '../../images/icon.png',
        //   dx: 70,
        //   dy: 70,
        //   dWidth: 60,
        //   dHeight: 60
        // },
        callback(e) {
          //console.log('e: ', e)
        }
      })
    }
  },
  bindblur(){
    this.setData({
      ztban:false
    })
  },

  ztClick(){
    this.setData({
      Value:this.data.fudongText
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

  floorTui:function(){
    verif.pageBack()
   },
   Focus(e){ 
    var that = this; 
   // console.log(e.detail.value);
    var inputValue = e.detail.value; 
    that.setData({ 
     Value:inputValue, 
    }) 
   }, 
   Tap(){ 
    var that = this; 
    that.setData({ 
     isFocus:true, 
    }) 
   }, 

   yuyue(){
    wx.navigateTo({
      url: '/pages/index/user/subscribe/subscribe'
    })
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