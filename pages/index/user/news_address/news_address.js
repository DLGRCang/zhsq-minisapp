// pages/index/news_address/news_address.js
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['内蒙古自治区', '鄂尔多斯市', '伊金霍洛旗'],
    sex:0,
    name:"",
    phone:"",
    address:"",
    btnIf:true,
    id:null
  },

  sexClick(e){
    console.log(e.currentTarget.dataset.sex)
    if(this.data.sex == e.currentTarget.dataset.sex){
      this.setData({
        sex:null
      })
    }else{
      this.setData({
        sex:e.currentTarget.dataset.sex
      })
    }
    
  },
  nameInput(e){
    this.setData({
      name:e.detail.value
    })
  },
  phoneInput(e){
    this.setData({
      phone:e.detail.value
    })
  },
  addressInput(e){
    this.setData({
      address:e.detail.value
    })
  },

  // 地址
  RegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },


  baocun(){
    if(this.data.sex == 0){
      var sex = "先生"
    }else{
      var sex = "女士"
    }
    if(this.data.name == ""){
      verif.tips("请输入联系人姓名")
    }else if(this.data.phone == ""){
      verif.tips("请输入联系人手机号")
    }else if(this.data.address == ""){
      verif.tips("请输入联系人详细地址")
    }else{
      if(verif.checkPhone(this.data.phone)){
          http.saveUserLocationApi({
            data:{
              province:this.data.region[0],
              city:this.data.region[1],
              county:this.data.region[2],
              phone:this.data.phone,
              username:this.data.name,
              sex:sex,
              detail:this.data.address
            },
            success:res=>{
              //console.log(res)
              if(res.data == 200){
                verif.tips("保存成功")
                setTimeout(()=>{
                  var pages = getCurrentPages(); // 当前页面
                  var beforePage = pages[pages.length - 2]; // 前一个页
                  wx.navigateBack({
                    success: function() {
                      beforePage.onLoad(); // 执行前一个页面的messageList方法
                    }
                  });
                },800)
                
              }
            },
            fail:err=>{
              console.log(err)
            }
          })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var options1 = Object.keys(options) // []
    if(options1.length == 0){
      console.log(options1)
    }else{
     
      var item = JSON.parse(options.item)
      //console.log(item)
      if(item.sex == "先生"){
        var sex = 0
      }else{
        var sex = 1
      }
      this.setData({
        name:item.username,
        region:[''+item.province+'',''+item.city+'',''+item.county+''],
        sex:sex,
        phone:item.phone,
        address:item.detail,
        btnIf:false,
        id:item.id
      })
    }
    
    
  },

  xiugai(){
    if(this.data.sex == 0){
      var sex = "先生"
    }else{
      var sex = "女士"
    }
    if(this.data.name == ""){
      verif.tips("请输入联系人姓名")
    }else if(this.data.phone == ""){
      verif.tips("请输入联系人手机号")
    }else if(this.data.address == ""){
      verif.tips("请输入联系人详细地址")
    }else{
      if(verif.checkPhone(this.data.phone)){
        http.updateUserLocationApi({
          data:{
            id:this.data.id,
            province:this.data.region[0],
            city:this.data.region[1],
            county:this.data.region[2],
            phone:this.data.phone,
            username:this.data.name,
            sex:sex,
            detail:this.data.address
          },
          success:res=>{
            console.log(res)
            if(res.data == 200){
              verif.tips("修改成功")
              setTimeout(()=>{
                var pages = getCurrentPages(); // 当前页面
                var beforePage = pages[pages.length - 2]; // 前一个页
                wx.navigateBack({
                  success: function() {
                    beforePage.onLoad(); // 执行前一个页面的messageList方法
                  }
                });
              },800)
              
            }
          }
        })
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