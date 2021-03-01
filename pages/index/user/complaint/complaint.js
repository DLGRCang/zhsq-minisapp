// pages/index/complaint/complaint.js
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
import util from '../../../../utils/util'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
    imgList: [],
    imgId:[],
    content:'',
    title:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  ChooseImage() {
    var imgs=verif.imgClick()
    imgs.then(res=>{
       this.setData({
        imgId:this.data.imgId.concat(res),
        imgList:this.data.imgList.concat(this.data.imgUrl+res),
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

  textClick(e){
    //console.log(e)
    this.setData({
      content:e.detail.value
    })
  },
  inputClick(e){
    this.setData({
      title:e.detail.value
    })
  },
  getAddInfo(){
    this.selectComponent("#haveTrue").falseClick()
  },
  tsjyList(){
    console.log(wx.getStorageSync('xzvillage')[0].villageId)
    var time = util.formatTime(new Date)
    //console.log(this.data.title)
   // console.log(this.data.content)
    var imgId1 = ''
    for(var i in this.data.imgId){
      if(imgId1 == ''){
        imgId1=this.data.imgId[i]
      }else{
        imgId1=imgId1+','+this.data.imgId[i]
      }
    }
    wx.showLoading({
      title: '拼命加载中',
    })
    http.tsjyApi({
      data:{
        villageId:wx.getStorageSync('xzvillage')[0].villageId,
        peopleId:wx.getStorageSync('wxUser').id,
        peopleName:'bbb',
        time:time,
        content:this.data.content,
        file:imgId1,
        title:this.data.title
      },
      success:res=>{
       // console.log(res)
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        if(res.code == 200){
          verif.tips('提交成功')
          setTimeout(()=>{
            wx.navigateBack({//返回
              delta: 1
            })
          },500)
        }else{
          verif.tips(res.msg)
        }
        
      },
      fali:err=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").trueClick()
          },
        })
        console.log(err)
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