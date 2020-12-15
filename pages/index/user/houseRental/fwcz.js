// pages/fwcz/fwcz.js
import http from '../../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     // tab 切换
     tabArr: {
      curHdIndex: 0,
      curBdIndex: 0,
      rows:[],
      rows1:[],
      rows2:[],
    }, 
  },
  // tab切换
  tab: function (e) {
    //var dataId = e.currentTarget.dataset.id;
    var dataId = e.currentTarget.id;
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr: obj
    })
    //console.log(e);
  },  

  fbfy(){
    wx.navigateTo({
      url: '/pages/index/user/lease/lease'
    })
  },
  xiangqing(e){
    //console.log(e)
    wx.navigateTo({
      url: '/pages/index/user/houseRental-details/czxq?id='+JSON.stringify(e.currentTarget.dataset.id)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  fwLiist(){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.fwczApi({
      success:res=>{
        //console.log(res)
        var res = res
        var rows1 = []
        var rows2 = []
        for(var i in res){
          res[i].img = res[i].housePhoto.split(',')
          if(res[i].mode == '1'){
            rows1.push(res[i])
          }else if(res[i].mode == '0'){
            rows2.push(res[i])
          }
        }
        this.setData({
          rows:res,
          rows1:rows1,
          rows2:rows2
        })
        //console.log(rows2)
        wx.hideLoading({
          success: (res) => {},
        })
        //console.log(res)
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
    this.fwLiist()
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