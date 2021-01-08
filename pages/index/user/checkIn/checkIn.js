// pages/index/checkIn/checkIn.js
var dateTimePicker = require('../../../../utils/dateTimePicker.js');
import verif from '../../../../utils/verification'
import http from '../../../../utils/api'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    windowHeight:app.globalData.windowHeight,
    imgList: [],
    sex:1,
    picker:[],
    fangyuan:[], 
    fangyuan1:null,
    status:['正常','死亡'],
    fangyuannr:[],
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
    sjh:'',
    guanxi:[],
    zishitc:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(wx.getStorageSync('xzvillage'))
    this.codelistArr()
    
    var fangyuan = []
    var fangyuan1 = []
    for(var i in wx.getStorageSync('xzvillage')){
      if(wx.getStorageSync('xzvillage')[i].isMaster == 1){
        fangyuan.push(wx.getStorageSync('xzvillage')[i])
      }
    }
    //console.log(fangyuan)
    for(var i in fangyuan){
      var name = fangyuan[i].floorName + fangyuan[i].unitName + fangyuan[i].roomName
      fangyuan1.push(name)
    }
    this.setData({
      fangyuan:fangyuan1,
      fangyuannr:fangyuan
    })
   // console.log(this.data.fangyuannr)
  },

  codelistArr(){
    http.codelistApi({

      success:res=>{
        //console.log(res)
        var picker = this.data.picker
        var guanxi = this.data.guanxi
        for(var i in res){
          if(res[i].dictionariesName != '本人'){
            picker.push(res[i].dictionariesName)
            guanxi.push(res[i])
          }
        }
        this.setData({
          picker:picker,
          guanxi:guanxi
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
    this.times()
  },
  getAddInfo(){
    this.selectComponent("#haveTrue").falseClick()
  },
//姓名
inputName(e){
  this.setData({
    name:e.detail.value
  })
},
fangyuanxc(e){
  //console.log(e)
  this.setData({
    fangyuan1: e.detail.value
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

guanbi(){
  this.setData({
    zishitc:false
  })
},

  ChooseImage() {
    this.setData({
      zishitc:true
    })
    
  },
  quedingsc(){
  var imgs=verif.imgClick()
    imgs.then(res=>{
       this.setData({
        imgId:this.data.imgId.concat(res),
        imgList:this.data.imgList.concat('http://172.16.20.81:9000/fileService/downloadFTP/public/'+res),
        zishitc:false
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
    //console.log(wx.getStorageSync('wxUser'))
    var that = this
    if(this.data.fangyuannr.length == 1){
      var user = this.data.fangyuannr[0]
    }else{
      var user = this.data.fangyuannr[this.data.fangyuan1]
    }
    //console.log(user)
    if(this.data.name == ''){
      verif.tips('请输入入住人姓名')
    }else if(this.data.sjh == ''){
      verif.tips('请输入手机号')
    }else if(this.data.sfzh == ''){
      verif.tips('请输入身份证号')
    }else if(this.data.pickerIndex == null){
      verif.tips('请选择与户主的关系')
    }else if(user == undefined){
      verif.tips('请选择房屋地址')
    }else{
      if(verif.checkIdCard(this.data.sfzh)){//61d91bdc-739d-47c5-adc7-12f3231678d1
        if(verif.checkPhone(this.data.sjh)){
          if(wx.getStorageSync('wxUser').phone == this.data.sjh){
            verif.tips('请勿录入当前登录人')
          }else{
            wx.showLoading({
            title: '拼命加载中',
          })
            wx.request({
              url: 'https://yiqi.sucstep.com/app/sign/saveZhsqUserInfo', // 就是拼接上前缀,此接口域名是开放接口，可访问
              method: 'post', // 判断请求类型，除了值等于'post'外，其余值均视作get 其他的请求类型也可以自己加上的
              data:{
                name:that.data.name,
                idcard:that.data.sfzh,
                phone:that.data.sjh
              },
              header: {
                'content-type': 'application/json',
                'token':wx.getStorageSync('token')
              },
              success(resm) {
                //console.log(resm)
                  http.rzxqApi({
                    data:{
                      villageId:user.villageId,
                      floorId:user.floorId,
                      unitId:user.unitId,
                      roomId:user.roomId,
                      doorNo:user.doorNo,
                      type:'123',
                      isMaster:'0',
                      name:that.data.name,
                      sex:that.data.sex,
                      national:that.data.mz,
                      nativePlace:that.data.jg,
                      idCard:that.data.sfzh,
                      professional:that.data.zy,
                      phone:that.data.sjh,
                      relationship:that.data.guanxi[that.data.pickerIndex].dictionariesId,
                      homeTime:that.data.date,
                      status:that.data.status1,
                      isStay:that.data.sfcz,
                      unifiedUserId:resm.data.result,
                      work:'',
                      facePhoto:that.data.imgId[0]
                    },
                    success:res=>{
                      //console.log(res.status)
                      if(res.status == 500){
                        wx.hideLoading()
                        verif.tips('提交失败')
                      }else{
                        wx.hideLoading({
                          success: (resm) => {
                            if(res.code == 40102){
                              verif.tips(res.msg)
                            }else{
                              verif.tips('提交成功')
                              setTimeout(()=>{
                                wx.navigateBack({
                                  delta: 1
                                })
                              },800)
                            }
                          },
                        })
                      }
  
                    },
                    fail:err=>{
        
                      wx.hideLoading({
                        success: (res) => {
                          that.selectComponent("#haveTrue").trueClick()
                        },
                      })
                      console.log(err)
                    }
                  })
              },
              fail(err) {
                wx.hideLoading({
                  success: (res) => {
                    that.selectComponent("#haveTrue").trueClick()
                  },
                })
                console.log(err)
              }
            })
          }
          
          
         
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