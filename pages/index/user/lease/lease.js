// pages/index/lease/lease.js
var dateTimePicker = require('../../../../utils/dateTimePicker.js');
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    neirong:true,
    date: '',
    zufang:'1',
    duox:'0',
    duoxuan:[
      {name:'只限女生',xg:''},
      {name:'半年起租',xg:''},
      {name:'一年起租',xg:''},
      {name:'租户稳定',xg:''}
    ],
    xzzhuangtai:[],
    fangyuan:[], 
    fangyuan1:null,
    fyxxId:[
      {name:'a房间',floorId:'c12279b2-1b2a-40e4-a34e-9ab9104279f7',unitId:'a1e60cbe-19d0-4755-80cf-67ea43d29136',roomId:'461a4ce2-595f-45cc-b0d4-dd2d0add873a'},
      {name:'b房间',floorId:'c12279b2-1b2a-40e4-a34e-9ab9104279f7',unitId:'a1e60cbe-19d0-4755-80cf-67ea43d29136',roomId:'461a4ce2-595f-45cc-b0d4-dd2d0add873a'}
    ],
    zujin:'',
    zuqi:'',
    title:'',
    name:'',
    phone:'',
    miaoshu:'',
    shi:'',
    ting:'',
    wei:'',
    pm:'',
    imgList: [],
    imgId:[],
    hezufang:false,
    index:null,
    picker: ['其他', '主卧', '次卧'],
    index1:null,
    picker1: ['东','南','西','北','东南','东北','西南','西北','南北','东西'],
    rentRoomId:null,
    anniu:'发布'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  PickerChange(e) {
   // console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  PickerChange1(e) {
    //console.log(e);
    this.setData({
      index1: e.detail.value
    })
  },
  fangyuanxc(e){
    this.setData({
      fangyuan1: e.detail.value
    })
  },

  zfClick(e){
    //console.log(e)
    if(e.currentTarget.dataset.id == 1){
      this.setData({
        //hezufang:false,
        zufang:1
      })
    }else{
      this.setData({
        //hezufang:true,
        zufang:0
      })
    }
    
  },

  duoxClick(e){
    //console.log(e.currentTarget.dataset.i)
    var duoxuan = this.data.duoxuan
    var xzzhuangtai = this.data.xzzhuangtai
    if(duoxuan[e.currentTarget.dataset.i].xg == ''){
      duoxuan[e.currentTarget.dataset.i].xg = 'duoxg'
      xzzhuangtai.push(duoxuan[e.currentTarget.dataset.i].name)
    }else{
     // console.log(111)
      duoxuan[e.currentTarget.dataset.i].xg = ''
      for(var i in xzzhuangtai){
    
        if(xzzhuangtai[i] == e.currentTarget.dataset.name){

          xzzhuangtai.splice(i,1)
        }
      }
    }

     
    
    
    this.setData({
      duoxuan:duoxuan,
      xzzhuangtai:xzzhuangtai
    })
  },
  getAddInfo(){
    this.onLoad()
  },
  onLoad: function (options) {
    this.selectComponent("#haveTrue").falseClick()
    console.log(options.item)
    if(options.item == undefined){
        this.setData({
          anniu:'发布'
        })
    }else{
      var item = JSON.parse(options.item)
      if(item.length != 0){
        var shi = item.houseType.split('室')[0]
        var house1 = item.houseType.split('室')[1]
        var ting = house1.split('厅')[0]
        var house2 = house1.split('厅')[1]
        var wei = house2.split('卫')[0]
        var house3 = house2.split('卫')[1]
        var pm = house3.split('㎡')[0]
  
        var fangyuan1 = 0
        for(var i in this.data.fyxxId){
          if(this.data.fyxxId[i].floorId == item.floorId&&this.data.fyxxId[i].unitId == item.unitId&&this.data.fyxxId[i].roomId == item.roomId){
            fangyuan1 = i
          }
        }
  
        var dx = item.requirement.split(',')
        var duoxuan = this.data.duoxuan
        for(var m in dx){
          for(var n in duoxuan){
            if(duoxuan[n].name == dx[m]){
              duoxuan[n].xg = 'duoxg'
            }
          }
        }
  
        var imgList = this.data.imgList
        for(var o in item.img){
          imgList.push('http://172.16.20.81:9000/fileService/downloadFTP/public/'+item.img[o])
        }
        
        
        this.setData({
          title:item.title,
          zufang:item.mode,
          zuqi:item.rentMonth,
          date:item.startRentDate,
          miaoshu:item.roomState,
          zujin:item.rentMoney,
          name:item.residentsName,
          phone:item.residentsPhone,
          shi:shi,
          ting:ting,
          wei:wei,
          pm:pm,
          fangyuan1:fangyuan1,
          duoxuan:duoxuan,
          xzzhuangtai:dx,
          imgList:imgList,
          imgId:item.img,
          rentRoomId:item.rentRoomId,
          anniu:'修改'
        })
      }
    }
    
    var fangyuan = this.data.fangyuan
    for(var i in this.data.fyxxId){
      fangyuan.push(this.data.fyxxId[i].name)
    }
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);

    var times1 = obj.dateTimeArray[0][obj.dateTime[0]]
    var times2 = obj.dateTimeArray[1][obj.dateTime[1]]
    var times3 = obj.dateTimeArray[2][obj.dateTime[2]]
    var dataTime = times1+"-"+times2+"-"+times3
    //console.log(dataTime)
    this.setData({
      date:dataTime,
      fangyuan:fangyuan
    })


  },
  toggle(e) {
   
    var anmiaton = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      neirong:true,
      animation: anmiaton
    })
    setTimeout(function() {
      that.setData({
        animation: ''
      })
    }, 1000)
  },

  //日期选择
  DateChange(e) {

    this.setData({
      date: e.detail.value
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

  //租金
  zjClick(e){
    this.setData({
      zujin:e.detail.value
    })
  },
  //租期
  zqClick(e){
    this.setData({
      zuqi:e.detail.value
    })
  },
  //标题
  titleClick(e){
    this.setData({
      title:e.detail.value
    })
  },
  //姓名
  xmClick(e){
    this.setData({
      name:e.detail.value
    })
  },
  //手机号
  sjClick(e){
    this.setData({
      phone:e.detail.value
    })
  },
//描述
msClick(e){
  this.setData({
    miaoshu:e.detail.value
  })
},
shiClick(e){
  this.setData({
    shi:e.detail.value
  })
},
tingClick(e){
  this.setData({
    ting:e.detail.value
  })
},
weiClick(e){
  this.setData({
    wei:e.detail.value
  })
},
pmClick(e){
  this.setData({
    pm:e.detail.value
  })
},
  fbfy(){
    //console.log(this.data.xzzhuangtai)
    var imgId1 = ''
    for(var i in this.data.imgId){
      if(imgId1 == ''){
        imgId1=this.data.imgId[i]
      }else{
        imgId1=imgId1+','+this.data.imgId[i]
      }
    }
    var yq = ''
    for(var m in this.data.xzzhuangtai){
      if(yq == ''){
        yq=this.data.xzzhuangtai[m]
      }else{
        yq=yq+','+this.data.xzzhuangtai[m]
      }
    }

    var houseType = this.data.shi+'室'+this.data.ting+'厅'+this.data.wei+'卫'+this.data.pm+'㎡'
    if(this.data.title == ''){
      verif.tips('请输入房屋标题')
    }else if(this.data.fangyuan1 == null){
      verif.tips('请选择房屋地址')
    }else if(this.data.shi == ''||this.data.ting == ''||this.data.wei == ''||this.data.pm == ''){
      verif.tips('请填写房屋户型')
    }else if(this.data.zujin == ''){
      verif.tips('请填写租金')
    }else if(this.data.zuqi == ''){
      verif.tips('请填写租期')
    }else if(this.data.name == ''){
      verif.tips('请填写您的姓名')
    }else if(this.data.phone == ''){
      verif.tips('请填写您的联系方式')
    }else if(this.data.miaoshu == ''){
      verif.tips('请描述您的房间情况')
    }else if(this.data.imgId1 == ''){
      verif.tips('请上传至少一张房屋图片')
    }else if(verif.checkPhone(this.data.phone)){
      //console.log('aaa')
      if(this.data.rentRoomId == null){
        wx.showLoading({
          title: '拼命加载中',
        })
        http.xzfwczApi({
          data:{
            floorId:this.data.fyxxId[this.data.fangyuan1].floorId,
            unitId:this.data.fyxxId[this.data.fangyuan1].unitId,
            roomId:this.data.fyxxId[this.data.fangyuan1].roomId,
            residentsName:this.data.name,
            residentsPhone:this.data.phone,
            mode:this.data.zufang,
            rentMonth:this.data.zuqi,
            startRentDate:this.data.date,
            roomState:this.data.miaoshu,
            rentMoney:this.data.zujin,
            residentsId:wx.getStorageSync('user').userId,
            requirement:yq,
            housePhoto:imgId1,
            title:this.data.title,
            state:'2',
            houseType:houseType
          },
          success:res=>{
            //console.log(res)
            wx.hideLoading({
              success: (res) => {},
            })
            if(res.code == 200){
              verif.tips('发布成功')
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
      }else{
        wx.showLoading({
          title: '拼命加载中',
        })
        http.xgczfwApi({
          data:{
            rentRoomIds:this.data.rentRoomId,
            floorId:this.data.fyxxId[this.data.fangyuan1].floorId,
            unitId:this.data.fyxxId[this.data.fangyuan1].unitId,
            roomId:this.data.fyxxId[this.data.fangyuan1].roomId,
            residentsName:this.data.name,
            residentsPhone:this.data.phone,
            mode:this.data.zufang,
            rentMonth:this.data.zuqi,
            startRentDate:this.data.date,
            roomState:this.data.miaoshu,
            rentMoney:this.data.zujin,
            residentsId:wx.getStorageSync('user').userId,
            requirement:yq,
            housePhoto:imgId1,
            title:this.data.title,
            state:'2',
            houseType:houseType
          },
          success:res=>{
            //console.log(res)
            wx.hideLoading({
              success: (res) => {},
            })
            if(res.code == 200){
              verif.tips('修改成功')
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
        // console.log(this.data.fyxxId[this.data.fangyuan1].floorId)
        // console.log(this.data.fyxxId[this.data.fangyuan1].unitId)
        // console.log(this.data.fyxxId[this.data.fangyuan1].roomId)
        // console.log(this.data.name)
        // console.log(this.data.phone)
        // console.log(this.data.zufang)
        // console.log(this.data.zuqi)
        // console.log(this.data.date)
        // console.log(yq)
        // console.log(imgId1)
        // console.log(this.data.title)
        // console.log(houseType)
        // console.log(this.data.rentRoomId)
      }
        
    }
   
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