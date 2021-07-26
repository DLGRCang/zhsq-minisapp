// pages/index/setting_address/setting_address.js
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clickId: -1,
    listData:[],
    id:null,
    index:null
    // reason: ['不需要服务了', '买错了', '服务质量不满意', '想购买其他服务项目', '其他原因'],   
  },
  // 点击选中 变色  


     //编辑地址-跳转
     editClick:function(e){
       console.log(e)
      wx.navigateTo({
        url: '/pages/index/user/news_address/news_address?item='+JSON.stringify(e.currentTarget.dataset.item)
      })
    },

   //新增收货地址-跳转
   Add_address:function(){
    wx.navigateTo({
      url: '/pages/index/user/news_address/news_address'
    })
  },
  showModal(e) {

    this.setData({
      modalName: e.currentTarget.dataset.target,
      id:e.currentTarget.dataset.id,
      index:e.currentTarget.dataset.i
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  scModal(e){
    
    http.deleteUserLocationApi({
      data:{
        id:this.data.id
      },
      success:res=>{
        //console.log(res)
        if(res.data == 200){
          verif.tips("删除成功")
          var listData = this.data.listData
          listData.splice(this.data.index,1)
          this.setData({
            listData:listData,
            modalName: null
          })
        }
      }
    })
  },

  xuanze(e){
    //console.log(e.currentTarget.dataset.item)
    var addresData = e.currentTarget.dataset.item
    
    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
    let prevPage = pages[ pages.length - 2 ];  
    prevPage.setData({
      addresid:addresData.id,
      province:addresData.province,
      city:addresData.city,
      county:addresData.county,
      detail:addresData.detail,
      username:addresData.username,
      sex:addresData.sex,
      phone:addresData.phone
    })
    wx.navigateBack({
      delta: 1  // 返回上一级页面。
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.address()
  },

  address(){
    http.getLocationByUserApi({
      success:res=>{
        //console.log(res)
        this.setData({
          listData:res.data
        })
      },
      fail:err=>{

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