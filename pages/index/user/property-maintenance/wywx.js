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
    imgUrl:app.globalData.imgUrl,
    fangyuan:[], 
    fangyuan1:null,
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
   //console.log(wx.getStorageSync('xzvillage').houseList)
    var fangyuan = []
    var fangyuan1 = []
    for(var i in wx.getStorageSync('xzvillage').houseList){

        fangyuan.push(wx.getStorageSync('xzvillage').houseList[i])
      
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
 

    this.setData({
      dateT:util.formatTime1(new Date).split(' ')[0],
      time:util.formatTime1(new Date).split(' ')[1]
    })
  },

  fangyuanxc(e){
    //console.log(e)
    this.setData({
      fangyuan1: e.detail.value
    })
  },

 // 照片功能
 ChooseImage() {
  var imgs=verif.imgClick()
  imgs.then(res=>{
     this.setData({
      imgId:this.data.imgId.concat(res.imgs),
      imgList:this.data.imgList.concat(this.data.imgUrl+res.imgs)
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

    if(this.data.fangyuannr.length == 1){
      var user = this.data.fangyuannr[0]
    }else{
      var user = this.data.fangyuannr[this.data.fangyuan1]
    }


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
    }else if(user == undefined){
      verif.tips('请选择房屋地址')
    }else if(imgId1 == ''){
      verif.tips('请您上传需维修相关图片')
    }else{

      http.saverepairApi({
        data:{
          type:this.data.picker[this.data.index],
          unifiedUserId:wx.getStorageSync('wxUser').id,
          stateTime:this.data.dateT+' '+this.data.time,
          appleTime:this.data.dateT+' '+this.data.time,
          appleContent:this.data.textValue,
          appleFileId:imgId1,
          floorId:user.floorId,
          unitId:user.unitId,
          roomId:user.roomId
        },
        success:res=>{
          //console.log(res)
          if(res.code == 200){

            verif.tips('提交成功')
            setTimeout(()=>{
              wx.navigateBack({//返回
                delta: 1
              })
            },800)
          }
        },
        fail:err=>{
 
          console.log(err)
        }
      })
    }
  }
     

})


