// pages/index/user/videoList/videoList.js
const app = getApp()
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight:app.globalData.windowHeight,
    TabCur: 0,
    scrollLeft:0,
    tabList:[],
    videoList:[],
    mettingno:null,
    password:"",
    pass:null
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.index,
      scrollLeft: (e.currentTarget.dataset.index-1)*60
    })

    this.tabClick1(e.currentTarget.dataset.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http.codelistofGetApi({
      success:res=>{
        console.log(res)
        this.setData({
          tabList:res
        })
        this.tabClick(res[0].dictionariesId)
      }
    })
  },

  tabClick(id){
    http.listvideomeetingApi({
      data:{
        mettingTheme:id
      },
      success:res=>{
        this.setData({
          videoList:res
        })
        console.log(res)
      }
    })
  },

  tabClick1(id){
    http.listvideomeetingApi({
      data:{
        mettingTheme:id
      },
      success:res=>{
        this.setData({
          videoList:res
        })
        console.log(res)
      }
    })
  },

  ClickVideo(e){
    this.setData({
      mettingno:e.currentTarget.dataset.mettingno,
      pass:e.currentTarget.dataset.password
    })
    if(e.currentTarget.dataset.password == null){
      wx.navigateTo({
        url: '/pages/index/user/airClass/airClass?video=0'+"&mettingno="+this.data.mettingno+"&password="+this.data.password
      })
    }else{
      this.setData({
        modalName:"DialogModal1"
      })
    }
  },
  inputClick(e){
    this.setData({
      password:e.detail.value
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null,
      password:null
    })
  },
  vClick(){
   // console.log(this.data.password)
    if(this.data.password == null){
      verif.tips("请输入入会密码")
    }else{
      if(this.data.password == this.data.pass){
          wx.navigateTo({
            url: '/pages/index/user/airClass/airClass?video=0'+"&mettingno="+this.data.mettingno+"&password="+this.data.password
          })
      }else{
        verif.tips("密码错误")
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