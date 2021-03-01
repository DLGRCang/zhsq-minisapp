// pages/index/Llq_pub/Llq_pub.js
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
    imgList: [],
    imgId:[],
    textArea:'',
    bqList:[],
    bqList1:[],
    typeId:null
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
    //console.log(wx.getStorageSync('xzvillage')[0])
    if(this.data.textArea == ''){
      verif.tips('请输入发布内容')
    }else{
      wx.showLoading({
        title: '拼命加载中',
      })
      http.llqfbApi({
        data:{
          villageId:wx.getStorageSync('xzvillage')[0].villageId,
          message:this.data.textArea,
          file:imgId1,
          createPeopleId:wx.getStorageSync('wxUser').id,
          floorId:wx.getStorageSync('xzvillage')[0].floorId,
          unitId:wx.getStorageSync('xzvillage')[0].unitId,
          roomId:wx.getStorageSync('xzvillage')[0].roomId,
          type:this.data.typeId
        },
        success:res=>{
         // console.log(res)

          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").falseClick()
              verif.tips('发布成功')
              this.setData({
                imgList: [],
                imgId:[],
                textArea:''
              })
              wx.setStorageSync('llqfb', 'true')
              setTimeout(()=>{
                wx.navigateBack({//返回
                  delta: 1
                })
              },500)
            },
          })
        },
        fail:err=>{
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").trueClick()
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
        imgList:this.data.imgList.concat(this.data.imgUrl+res),
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
  bqClick(e){
    //console.log(e.currentTarget.dataset.id)
    var bqList = this.data.bqList
    
    for(var i in bqList){
      if(bqList[i].dictionariesId == e.currentTarget.dataset.id){
          bqList[i].yangshi = 'yxg'
      }else{
        bqList[i].yangshi = 'wys'
      }
    }

    this.llqbqArr1(e.currentTarget.dataset.code)
    this.setData({
      bqList:bqList,
      //typeId:e.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getStorageSync('wxUser'))
    this.llqbqArr()
  },

  getAddInfo(){
    this.onLoad()
  },
  bq1Click(e){
    console.log(e)
    var bqList1 = this.data.bqList1
    
    for(var i in bqList1){
      if(bqList1[i].dictionariesId == e.currentTarget.dataset.id){
          bqList1[i].yangshi = 'yxg'
      }else{
        bqList1[i].yangshi = 'wys'
      }
    }

    this.setData({
      bqList1:bqList1,
      typeId:e.currentTarget.dataset.id
    })
  },
  llqbqArr1(id){
    //console.log(id)
    wx.showLoading({
      title: '拼命加载中',
    })
    http.llqbqApi1({
      data:{
        code:id
      },
      success:res=>{
       // console.log(res)
        var bqList1 = res
        for(var i in bqList1){
          bqList1[i].yangshi = 'wys'
        }
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        this.setData({
          bqList1:bqList1
        })
      },
      fail:err=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").trueClick()
          },
        })
        console.log(err)
      }
    })
  },
  llqbqArr(){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.llqbqApi({
      success:res=>{
        //console.log(res)
        var bqList = res
        for(var i in bqList){
          bqList[i].yangshi = 'wys'
        }
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        this.setData({
          bqList:bqList
        })
      },
      fail:err=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").trueClick()
          },
        })
        console.log(err)
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