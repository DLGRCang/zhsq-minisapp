import util from '../../../../utils/util'
import verif from '../../../../utils/verification'
import http from '../../../../utils/api'
const app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
    date: '',
    nameText: '', //姓名
    cardText: '', //手机号码
    phoneText: '',//身份证号
    imgList: [],
    imgId:[]
  },


  //监听用户输入姓名
  enterName(e) {
    this.setData({
      nameText: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  //监听输入手机号码
  enterPhone(e) {
    this.setData({
      phoneText: e.detail.value
    })
  },
  //监听用户输入身份证号
  enterId(e) {
    //console.log(e)
    this.setData({
      cardText: e.detail.value
    })
  },

  conData() {
    //console.log(util.formatTime(new Date()).split(" ")[1])
    //console.log(wx.getStorageSync('xzvillage')[0].residentsInfoId)
    if(this.data.nameText == ''){
      verif.tips('请输入姓名')
    }else if(this.data.cardText == ''){
      verif.tips('请输入身份证号')
    }else if(this.data.phoneText == ''){
      verif.tips('请输入手机号')
    }else if(this.data.imgId.length == 0){
      verif.tips('请上传申请人照片')
    }else{
      if(verif.checkIdCard(this.data.cardText)){
        if(verif.checkPhone(this.data.phoneText)){
          http.savevisitorpassApi({
            data:{
              applyDate:this.data.date+" "+util.formatTime(new Date()).split(" ")[1],
              applyIdCard:this.data.cardText,
              applyName:this.data.nameText,
              applyPhone:this.data.phoneText,
              applyPhoto:this.data.imgId[0],
              unifiedUserId:wx.getStorageSync('xzvillage')[0].residentsInfoId
            },
            success:res=>{
              console.log(res)
              
              if(res.code == 200){
                wx.setStorageSync('visitorPassId', res.visitorPassId)
                wx.navigateTo({ 
                  url: '/pages/index/user/share/share?data='+res.codeNumber
                })
              }else{
          
                verif.tips(res.msg)
              }
          
            }
          })
          
        }
      }
    }

  },
  ChooseImage(){
    var imgs=verif.imgClick()
      imgs.then(res=>{
         this.setData({
          imgId:this.data.imgId.concat(res),
          imgList:this.data.imgList.concat(this.data.imgUrl+res)
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

  




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      date:util.formatTime(new Date()).split(' ')[0]
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