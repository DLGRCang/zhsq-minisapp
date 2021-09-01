// pages/index/user/parrtyMap/parrtyMap.js
const app = getApp()
import http from '../../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight:app.globalData.windowHeight,
    latitude:null,
    longitude:null,
    markers:[],
    markersList:[],
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      var markers = this.data.markers
      http.listpartymapApi({
        success:res=>{
          for(var i in res){
            var item = {
              latitude:res[i].dimension,
              longitude:res[i].longitude,
              id:parseInt(i),
              callout:{
                content:res[i].partyBranchName,
                fontSize:15,
                padding:6
              }
            }
      
            markers.push(item)
          }
          //console.log(res)
          this.setData({
            latitude:res[0].dimension,
            longitude:res[0].longitude,
            markersList:res,
            markers:markers
            
          })
        }
      })
  },

  bindmarkertapClick(e){
    //console.log(e)
    this.setData({
      modalName: "bottomModal",
      list:this.data.markersList[e.detail.markerId]
    })
    //console.log(this.data.list)
  },
  hideModal(){
    this.setData({
      modalName: ""
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