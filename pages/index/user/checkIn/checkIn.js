// pages/index/checkIn/checkIn.js
var dateTimePicker = require('../../../../utils/dateTimePicker.js');
import verif from '../../../../utils/verification'
import http from '../../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    sex:1,
    picker:['夫妻','父子','父女','母子','母女','其他'],
    status:['正常','死亡'],
    pickerIndex:null,
    status1:null,
    date: '',
    sfcz:1,
    imgId:[],
    name:'',
    sfzh:'',
    jg:'',
    mz:'',
    zy:'',
    sjh:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.times()
  },

//姓名
inputName(e){
  this.setData({
    name:e.detail.value
  })
},

//身份证号
inputsfzh(e){
  this.setData({
    sfzh:e.detail.value
  })
},

//籍贯
inputjg(e){
  this.setData({
    jg:e.detail.value
  })
},
//民族
inputmz(e){
  this.setData({
    mz:e.detail.value
  })
},
//职业
inputzy(e){
  this.setData({
    zy:e.detail.value
  })
},
//手机号
inputsjh(e){
  this.setData({
    sjh:e.detail.value
  })
},

  ChooseImage() {
    var imgs=verif.imgClick()
    imgs.then(res=>{
       this.setData({
        imgId:this.data.imgId.concat(res),
        imgList:this.data.imgList.concat('http://172.16.20.81:9000/fileService/downloadFTP/public/'+res)
      })
    })
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.data.imgId.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList,
            imgId:this.data.imgId
          })
        }
      }
    })
  },

  sexClick(e){
    //console.log(e)
    this.setData({
      sex:e.currentTarget.dataset.sex
    })
  },
  sfczClick(e){
    this.setData({
      sfcz:e.currentTarget.dataset.sfcz
    })
  },
  PickerChange(e) {
    //console.log(e);
    this.setData({
      pickerIndex: e.detail.value
    })
  },
  statusChange(e) {
    //console.log(e);
    this.setData({
      status1: e.detail.value
    })
  },
  times(){
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);

    var times1 = obj.dateTimeArray[0][obj.dateTime[0]]
    var times2 = obj.dateTimeArray[1][obj.dateTime[1]]
    var times3 = obj.dateTimeArray[2][obj.dateTime[2]]
    var dataTime = times1+"-"+times2+"-"+times3
    //console.log(dataTime)
    this.setData({
      date:dataTime
    })
  },
   //日期选择
   DateChange(e) {

    this.setData({
      date: e.detail.value
    })
  },
  tjshClick(){
    if(this.data.name == ''){
      verif.tips('请输入姓名')
    }else if(this.data.sjh == ''){
      verif.tips('请输入手机号')
    }else if(this.data.sfzh == ''){
      verif.tips('请输入身份证号')
    }else{
      if(verif.checkIdCard(this.data.sfzh)){
        if(verif.checkPhone(this.data.sjh)){
          wx.showLoading({
            title: '拼命加载中',
          })
          http.rzxqApi({
            data:{
              floorId:wx.getStorageSync('user').floorId,
              unitId:wx.getStorageSync('user').unitId,
              roomId:wx.getStorageSync('user').roomId,
              doorNo:'0',
              type:'123',
              isMaster:'0',
              name:this.data.name,
              sex:this.data.sex,
              national:this.data.mz,
              nativePlace:this.data.jg,
              idCard:this.data.sfzh,
              professional:this.data.zy,
              phone:this.data.sjh,
              relationship:this.data.pickerIndex,
              homeTime:this.data.date,
              status:this.data.status1,
              isStay:this.data.sfcz,
              unifiedUserId:wx.getStorageSync('user').userId,
              work:''
            },
            success:res=>{
              wx.hideLoading({
                success: (resm) => {
                  if(res.code == 40102){
                    verif.tips(res.msg)
                  }else{
                    verif.tips('提交成功')
                  }
                },
              })
              
              console.log(res)
            },
            fail:err=>{
              console.log(err)
            }
          })
        }
      }
    }
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