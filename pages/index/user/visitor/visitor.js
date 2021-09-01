// pages/visitor/visitor.js
import verif from '../../../../utils/verification'
import drawQrcode from '../../../../utils/weapp.qrcode.js'
import http from '../../../../utils/api'
import util from '../../../../utils/util'
var dateTimePicker = require('../../../../utils/dateTimePicker.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    windowHeight:app.globalData.windowHeight, 
    imgUrl:app.globalData.imgUrl,
    picker: ['天隆佳苑', '乌兰小区'],
    dateTime: '预计来访时间',
    endTime: '预计离开时间',
    Length:7,    //输入框个数 
    isFocus:true,  //聚焦 
    Value:"",    //输入的内容 
    ispassword:false, //是否密文显示 true为密文， false为明文。
    fudongText:'',
    botFudong:0,
    ztban:false,
    ksDate:{},
    sex:1,
    index:null,
    sousuoTrue:false,
    yezhuText:"",
    nameText:"",
    phoneText:"",
    cardText:"",
    textText:"",
    topSSnrFor:[],
    yzItem:{personName:"请选择业主"},
    imgList: [],
    imgId:[],
    imgBase:null
  },

  yezhuInput(e){
    //console.log(e)
    this.setData({
      yezhuText:e.detail.value
    })
  },
  nameInput(e){
    this.setData({
      nameText:e.detail.value
    })
  },
  phoneInput(e){
    this.setData({
      phoneText:e.detail.value
    })
  },
  cardInput(e){
    this.setData({
      cardText:e.detail.value
    })
  },
  textInput(e){
    this.setData({
      textText:e.detail.value
    })
  },
  ChooseImage() {
    this.setData({
      zishitc:true
    })
    
  },
  quedingsc(){
    var imgs=verif.imgClickBse()
      imgs.then(res=>{
        //console.log(res)
         this.setData({
          imgBase:res.base,
          imgId:this.data.imgId.concat(res.tempFilePaths),
          imgList:this.data.imgList.concat(res.tempFilePaths),
          zishitc:false
        })
      })
    },
  DelImg(e) {
    wx.showModal({
      title: '删除',
      content: '确定要删除此图片吗',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.data.imgId.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList,
            imgId:this.data.imgId,
            imgBase:null
          })
        }
      }
    })
  },
  guanbi(){
    this.setData({
      zishitc:false
    })
  },
  sousuoClick(){
    var orglndexCodes;
    if(this.data.index == 0){
      orglndexCodes = "e3aa4397-2c77-4c81-88a5-32f381a97ac3"
    }else{
      orglndexCodes = "80d9e82b-0c42-4395-999c-539fd8d8ebd3"
    }
    if(this.data.yezhuText == ""){
      verif.tips("请输入关键字在搜索")
    }else{
      http.queryPersonnelListV2Api({
        data:{
          personName:this.data.yezhuText,
          orglndexCodes:orglndexCodes,
          pageNo:1,
          pageSize:1000
        },
        success:res=>{
          console.log(res)
          if(res == ""){
            verif.tips("无此人")
          }else{
            this.setData({
              topSSnrFor:res.data.list
            })
          }
          
        }
      })
    }
    
  },

  nrClick(e){
    //console.log(e)
    this.setData({
      yzItem:e.currentTarget.dataset.item,
      sousuoTrue:false,
    })
  },

  onPickerChange3: function (e) {
    this.setData({
      dateTime: e.detail.dateString,
      ksDate:e.detail
    })
   // console.log(this.data.ksDate);
  },
  onPickerChange4: function (e) {
    this.setData({
      endTime: e.detail.dateString
    })
   // console.log(this.data.ksDate);
  },
  endClick:function(e){
    if(Object.keys(this.data.ksDate).length === 0){
      verif.tips("请先选择来访时间")
    }else{
      let myComponent = this.selectComponent('#myComponent'); // 页面获取自定义组件实例
      myComponent.componentInnerFunction(); // 通过实例调用组件事件
    }
    
    },

    sexClick(e){
      //console.log(e.currentTarget.dataset.sex)
      this.setData({
        sex:e.currentTarget.dataset.sex
      })
    },
    PickerChange(e) {
      
      this.setData({
        index: e.detail.value
      })
     // console.log(this.data.index);
    },

    xzYz(){
      if(this.data.index == null){
        verif.tips("请先选择小区")
      }else{
        this.setData({
          sousuoTrue:true
        })
      }
    },
    chaClick(){
      this.setData({
        sousuoTrue:false
      })
    },

    tjClick(){
      console.log(this.data.endTime)
      // console.log(this.data.textText)
      // console.log(this.data.dateTime+":00")
      // console.log(this.data.endTime+":00")
      if(this.data.yzItem.personId == undefined){
        verif.tips("请先选择被访对象")
      }else if(this.data.nameText == ""){
        verif.tips("请输入访客姓名")
      }else if(this.data.phoneText == ""){
        verif.tips("请输入访客手机号")
      }else if(this.data.cardText == ""){
        verif.tips("请输入访客身份证号")
      }else if(this.data.dateTime == "预计来访时间"){
        verif.tips("请选择来访时间")
      }else if(this.data.endTime == "预计离开时间"){
        verif.tips("请选择离开时间")
      }else if(this.data.imgBase == null){
        verif.tips("请上传人脸照片")
      }else{
        if(verif.checkPhone(this.data.phoneText)){
          if(verif.checkIdCard(this.data.cardText)){
            var visitorInfoList = [{
              visitorName:this.data.nameText,
              gender:this.data.sex,
              phoneNo:this.data.phoneText,
              certificateType:111,
              certificateNo:this.data.cardText,
              visitorPhoto:this.data.imgBase
            }]
            http.appointmentApi({
              data:{
                receptionistId:this.data.yzItem.personId,
                visitStartTime:this.data.dateTime+":00",
                visitEndTime:this.data.endTime+":00",
                visitPurpose:this.data.textText,
                visitorInfoList:visitorInfoList
              },
              success:res=>{
                console.log(res)
                if(res.code == "0"){
                  verif.tips("提交成功")
                  setTimeout(()=>{
                    wx.navigateBack({//返回
                      delta: 1
                    })
                  },800)
                }else if(res.code == "0x0531f002"){
                  verif.tips("预计离开时间必须晚于当前时间")
                }else if(res.code == "0x0531f003"){
                  verif.tips("预计离开时间应晚于预计来访时间")
                }else if(res.code == "0x0531401d"){
                  verif.tips("访客"+res.data[0]+"在来访时段内已有其他有效预约或登记")
                }else if(res.code == "0x0531f010"){
                  verif.tips("访客列表内访客信息过多，请检查确认")
                }else if(res.code == "0x0531f016"){
                  verif.tips("预计来访时间查询时间段起止条件错误")
                }else if(res.code == "0x0531f017"){
                  verif.tips("预计离开时间查询时间段起止条件错误")
                }else if(res.code == "0x0531f011"){
                  verif.tips("来访时间查询时间段条件起止条件错误")
                }else if(res.code == "0x0531f012"){
                  verif.tips("离开时间查询时间段起止条件错误")
                }else if(res.code == "0x05314023"){
                  verif.tips("访客信息列表中存在相同的手机号码或证件号码")
                }else if(res.code == "0x0531f00e"){
                  verif.tips("根据参数无法查找到正确记录信息")
                }
              }
            })
          }
        }
      }
  
      
    },
  // toDouble:function(num) {
  //   if(num >= 10) {//大于10
  //     return num;
  //   } else {//0-9
  //     return '0' + num
  //   }
  //   },
  // getToday:function() {
  //   let date = new Date();
  //   let year = date.getFullYear();
  //   let month = date.getMonth() + 1;
  //   let day = date.getDate();
  //   return year + '-' + this.toDouble(month) + '-' + this.toDouble(day)
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    //console.log(util.formatTime1(new Date))
    // let dayTime= this.getToday();
    // let dayHour = "18:00";
    // let endedTime1 = dayTime + " " + dayHour;

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
      http.generateCodeStringApi({
        data:{
          generateCodeNumber:this.data.Value,
          visitorPassId:wx.getStorageSync('visitorPassId')
        },
        success:res=>{
          console.log(res)
          if(res.code == 200){ 
            drawQrcode({
              width: 200,
              height: 200,
              x: 0,
              y: 0,
              canvasId: 'myQrcode',
              // ctx: wx.createCanvasContext('myQrcode'),
              typeNumber: 10,
              text: res.generateCodeString,
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