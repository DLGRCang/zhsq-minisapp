var dateTimePicker = require('../../../../utils/dateTimePicker.js');
import util from '../../../../utils/util'
import verif from '../../../../utils/verification'
import http from '../../../../utils/api' 
const app = getApp()
Page({
  data: {
    picker: ['水', '电', '暖','燃气','房屋','其他'],
    index:null,
    time: '',
    dateT: '',
    textValue:'',
    imgList: [],
    imgId:[],
    windowHeight:app.globalData.windowHeight,
  },
  PickerChange(e){
    this.setData({
      index:e.detail.value
    })
  },
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      dateT: e.detail.value
    })
  },
  textareaAInput(e){
    //console.log(e)
    this.setData({
      textValue:e.detail.value
    })
  },
  onLoad(){
    //console.log(new Date().getDate() + 2)
    this.setData({
      dateT:util.formatTime1(new Date).split(' ')[0],
      time:util.formatTime1(new Date).split(' ')[1]
    })
  },

 // 照片功能
 ChooseImage() {
  var imgs=verif.imgClick()
  imgs.then(res=>{
     this.setData({
      imgId:this.data.imgId.concat(res),
      imgList:this.data.imgList.concat('http://172.16.20.81:9000/fileService/downloadFTP/public/'+res)
    })
  })
 // console.log(this.data.imgList)
},

ViewImage(e) {
  wx.previewImage({
    urls: this.data.imgList,
    current: e.currentTarget.dataset.url
  });
},
DelImg(e) {
  wx.showModal({
    title: '删除图片',
    content: '确定要删除该图片吗？',
    cancelText: '取消',
    confirmText: '确认',
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
  tjClick(){
    var imgId1 = ''
    for(var i in this.data.imgId){
      if(imgId1 == ''){
        imgId1=this.data.imgId[i]
      }else{
        imgId1=imgId1+','+this.data.imgId[i]
      }
    }
    //console.log(this.data.picker[this.data.index])
    if(this.data.index == null){
      verif.tips('请选择维修分类')
    }else if(this.data.textValue == ''){
      verif.tips('请输入问题描述')
    }else{
      wx.showLoading({
        title: '拼命加载中',
      })
      http.saverepairApi({
        data:{
          type:this.data.picker[this.data.index],
          unifiedUserId:wx.getStorageSync('user').userId,
          appleTime:this.data.dateT+' '+this.data.time,
          appleContent:this.data.textValue,
          appleFileId:imgId1
        },
        success:res=>{
          //console.log(res)
          if(res.code == 200){
            wx.hideLoading({
              success: (res) => {},
            })
            verif.tips('提交成功')
          }
        },
        fail:err=>{
          console.log(err)
        }
      })
    }
  }
     

})


