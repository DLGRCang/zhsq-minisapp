import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCollect: true, // 默认下箭头
    time: '12:01',
    isShow: false,
    orderData:[]
  },
  // 下拉 上拉
  // toggle() {
  //   this.isShow = !this.isShow;
  //   this.$apply();
  //  },
  // 地址跳转
  // AddressClick:function(){
  //   wx.navigateTo({
  //     url: '/pages/index/setting_address/setting_address'
  //   })
  // },
 

  // 时间控件
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },

  // 下拉/上拉
  toCollect () {
    var bol = this.data.isCollect; // 获取状态
    this.setData({
    isCollect:!bol // 改变状态
    })
    this.isShow = !this.isShow;
    this.$apply();
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.order()
  },

  order(){
    http.listpageorderApi({
      data:{
        buy_peop_id:wx.getStorageSync('wxUser').id
      },
      success:res=>{
        //console.log(res)
        this.setData({
          orderData:res.rows
        })
        console.log(res)
      }
    })
  },

  tjOrder(){
    var that = this
    http.mallPayApi({
      data:{
        orderId:res.msg,
        openid:wx.getStorageSync('wxUser').openId,
        shopListId:shopListId,
        need_money:that.data.price
      },
      success:resa=>{
        console.log(resa)
        wx.requestPayment({
          timeStamp: resa.timeStamp,
          nonceStr: resa.nonceStr,
          package: resa.package,
          signType: resa.signType,
          paySign: resa.paySign,
          success(resb) {
            console.log(resb)
            http.mallPayOrderStateApi({
              data:{
                actual_money:that.data.price,
                state:'1',
                mode:0,
                orderId:res.msg
              },
              success:resm=>{
                verif.tips("支付成功")
                setTimeout(()=>{
                  wx.navigateBack({
                    delta: 2  // 返回上一级页面。
                  })
                },800)
                console.log(resm)
              }
            })
          },
          fail(err) {
            console.log(err)
            
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