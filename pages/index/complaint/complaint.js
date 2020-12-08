// pages/index/complaint/complaint.js
import http from '../../../utils/api'
import verif from '../../../utils/verification'
import util from '../../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
        imgList:this.data.imgList.concat('http://172.16.20.81:9000/fileService/downloadFTP/public/'+res)
      })
    })
   // console.log(this.data.imgList)
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

  tsjyList(){
    var time = util.formatTime(new Date)
    //console.log(this.data.title)
    //console.log(this.data.content)
    var imgId1 = ''
    for(var i in this.data.imgId){
      if(imgId1 == ''){
        imgId1=this.data.imgId[i]
      }else{
        imgId1=imgId1+','+this.data.imgId[i]
      }
    }
    http.tsjyApi({
      data:{
        peopleId:'aaa',
        peopleName:'bbb',
        time:time,
        content:this.data.content,
        file:imgId1,
        title:this.data.title
      },
      success:res=>{
        console.log(res)
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