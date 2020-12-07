// pages/index/froms/froms.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataFrom:[],
    selectTrue:null,
    fromData:[],
    duoxuan:'',
    selectName:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.froms()
  },
  froms(){
   wx.request({
     url: 'http://192.168.0.64:8004/InfoIssue/app/release/applicationform/getapplication_form_field/d3e43335-515b-4c99-871f-eb3c25b1f5a1',
     success:res=>{
       console.log(res)
       var fromData = {}
       for(var i in res.data){
         fromData[res.data[i].en_name]=null
       }
       //console.log(fromData)
       this.setData({
        dataFrom:res.data,
        fromData:fromData
       })
       
     },
     fail:err=>{
       console.log(err)
     }
   })
  },
  selectClick(e){
    if(this.data.selectTrue == e.currentTarget.dataset.id){
      this.setData({
        selectTrue:null
      })
    }else{
      this.setData({
        selectTrue:e.currentTarget.dataset.id
      })
    }
   
  },

  inputClick(e){
    var s = e.target.dataset.in
    var fromData = this.data.fromData
    for(var key in fromData){
      if(key == s){
        fromData[key] = e.detail.value
      }
    }
    this.setData({
      fromData:fromData
    })
  },

  optionClick(e){
    //console.log(e)
    var selectName = this.data.selectName
    //console.log(selectName)
    selectName[e.currentTarget.dataset.index]=e.currentTarget.dataset.value

    var fromData = this.data.fromData
    for(var key in fromData){
      if(key == e.currentTarget.dataset.in){
        fromData[key] = e.currentTarget.dataset.value
      }
    }


    this.setData({
      selectName:selectName,
      fromData:fromData
    })
    
  },


  dxClick(e){
    //console.log(e)
    var fromData = this.data.fromData
    for(var key in fromData){
      if(key == e.currentTarget.dataset.in){
        fromData[key] = e.currentTarget.dataset.value
      }
    }
    this.setData({
      fromData:fromData
    })
  },

  duoxClick(e){
    //console.log(e)
   
    if(this.data.duoxuan == ''){
      this.setData({
        duoxuan:e.currentTarget.dataset.value
      })
    }else{
      this.setData({
        duoxuan:this.data.duoxuan+','+e.currentTarget.dataset.value
      })
    }
    //console.log(this.data.duoxuan)
    var fromData = this.data.fromData
    for(var key in fromData){
      if(key == e.currentTarget.dataset.in){
        fromData[key] = this.data.duoxuan
      }
    }
    this.setData({
      fromData:fromData
    })
    //console.log(this.data.fromData )
  },

  tjClick(){
    console.log(this.data.fromData)
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