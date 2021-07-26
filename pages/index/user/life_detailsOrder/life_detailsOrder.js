// pages/index/life_detailsOrder/life_detailsOrder.js
import util from '../../../../utils/util'
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
    dataList:[],
    title:"",
    price:0,
    zkPrice:0,
    coll:2,
    addresid:null,
    province:"",
    city:"",
    county:"",
    detail:"",
    username:"",
    sex:"",
    phone:"",
    orderMessage:[],
    orderId:""
  },
  // 下拉 上拉
  // toggle() {
  //   this.isShow = !this.isShow;
  //   this.$apply();
  //  },
  // 地址跳转
  AddressClick:function(){
    wx.navigateTo({
      url: '/pages/index/user/setting_address/setting_address'
    })
  },
  // 时间控件
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },

  // 下拉/上拉
  toCollect () {
    var bol = this.data.isCollect; // 获取状态
    var coll = this.data.coll
    if(coll == 2){
      coll = this.data.dataList.length
    }else{
      coll = 2
    }
    this.setData({
    isCollect:!bol, // 改变状态,
    coll:coll
    })
   
 
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(options.item))
    var time = util.formatTime(new Date)
    var time1 = time.split(" ")[0]
    var time2 = time.split(" ")[1]
    var orderId = "orderid"+time1.split("-")[0]+time1.split("-")[1]+time1.split("-")[2]+time2.split(":")[0]+time2.split(":")[1]+time2.split(":")[2]
    var item = JSON.parse(options.item)
    var price = 0
    var zkPrice = 0
    var orderMessage = this.data.orderMessage
    for(var i in item){
      price=price+(item[i].data*item[i].discount)
      zkPrice=zkPrice+(item[i].data*item[i].price)
      orderMessage.push(
        {
          commodityId:item[i].shoppingId,
          orderId:orderId,
          storeId:item[i].shopListId,
          number:item[i].data,
          allMoney:item[i].discount*item[i].data, 
  }
      )
    }

    console.log(orderMessage)


    this.setData({
      dataList:item,
      title:item[0].shopListName,
      price:price,
      zkPrice:zkPrice,
      orderId:orderId,
      orderMessage:orderMessage
    })
  },


  tjOrder(){
    //console.log(wx.getStorageSync('xzvillage').houseList[0].unifiedUserId)
    if(this.data.addresid == null){
      verif.tips("请选择您的收获地址")
    }else{
      
      http.saveorderApi({
        data:{
          address:this.data.province+this.data.city+this.data.county+this.data.detail,
          buyPeopId:wx.getStorageSync('wxUser').id,
          orderFormId:this.data.orderId,
          orderState:"0",
          payMoney:this.data.price,
          placeTime:util.formatTime(new Date),
          receiptPeople:this.data.username,
          receiptPhone:this.data.phone,
          orderMessage:this.data.orderMessage,
        },
        success:res=>{
          verif.tips("提交成功")
          console.log(res)
          setTimeout(()=>{
            wx.navigateBack({
              delta: 2  // 返回上一级页面。
            })
          },800)
          
        }
      })
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