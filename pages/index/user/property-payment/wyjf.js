// pages/my/my.js
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jfList:[],
    xqText:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log(wx.getStorageSync('xzvillage'))
  
    this.setData({
      xqText:wx.getStorageSync('xzvillage').houseList[0].villageName
    })
    this.jfArr()
  },
  getAddInfo(){
    this.onLoad()
  },
  
  jfArr(){

    http.myjfApi({
      data:{
        unifiedUserId:wx.getStorageSync('wxUser').id
      },
      success:res=>{
        console.log(res)
        if(res.code == 200){

          this.setData({
            jfList:res.data.housePayDTOList
          })
        }
      },
      fail:err=>{
  
        console.log(err)
      }
    })
  },


  jiaofei(e){
    var that = this
    http.goPayApi({
      data:{
        openid:wx.getStorageSync('wxUser').openId,
        house_pay_id:e.currentTarget.dataset.id,
        need_money:e.currentTarget.dataset.price
      },
      success:res=>{
        wx.requestPayment({
          timeStamp: res.timeStamp,
          nonceStr: res.nonceStr,
          package: res.package,
          signType: 'MD5',
          paySign: res.paySign,
          success(res) {
     
            http.payOrderStateApi({
              data:{
                actual_money:e.currentTarget.dataset.price,
                state:1,
                mode:0,
                house_pay_id:e.currentTarget.dataset.id
              },
              success:res=>{
                verif.tips("缴费成功")
                var jfList = that.data.jfList
                jfList[e.currentTarget.dataset.i].state = 1
                that.setData({
                  jfList:jfList
                })
                console.log(res)
              }
            })

          },
          fail(res) {
            console.log(res)
            
          }
        })
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