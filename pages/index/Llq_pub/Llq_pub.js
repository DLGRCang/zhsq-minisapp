// pages/index/Llq_pub/Llq_pub.js
import http from '../../../utils/api'
import verif from '../../../utils/verification'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    imgId:[],
    textArea:'',

  },

  textClick(e){
    this.setData({
      textArea:e.detail.value
    })
    //console.log(e)
  },
  fabuClick(){
    var imgId1 = ''
    for(var i in this.data.imgId){
      if(imgId1 == ''){
        imgId1=this.data.imgId[i]
      }else{
        imgId1=imgId1+','+this.data.imgId[i]
      }
    }
    if(this.data.textArea == ''){
      verif.tips('请输入发布内容')
    }else{
      wx.showLoading({
        title: '拼命加载中',
      })
      http.llqfbApi({
        data:{
          message:this.data.textArea,
          file:imgId1,
          createPeopleId:wx.getStorageSync('user').userId,
          floorId:wx.getStorageSync('user').floorId,
          unitId:wx.getStorageSync('user').unitId,
          roomId:wx.getStorageSync('user').roomId
        },
        success:res=>{
          //console.log(res)
          wx.hideLoading({
            success: (res) => {
              verif.tips('发布成功')
              this.setData({
                imgList: [],
                imgId:[],
                textArea:''
              })
              wx.setStorageSync('llqfb', 'true')
            },
          })
        }
      })
    }
   
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
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  textareaBInput(e) {
    this.setData({
      textareaBValue: e.detail.value
    })
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