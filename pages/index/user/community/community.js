// pages/index/community/community.js
import http from '../../../../utils/api'
import util from '../../../../utils/util'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0, 
      
    }, 
    rowsList:[],
    rowsList1:[],
    rowsList2:[],
    time:''
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
  if(dataId == '1'){
    this.commList1()
  }else if(dataId == '2'){
    this.commList2()
  }
  //console.log(e);
},  

fbfy(){
  wx.navigateTo({
    url: '/pages/index/user/lease/lease'
  })
},
xiangqing(e){
  var id = e.currentTarget.dataset.id
  wx.navigateTo({
    url: '/pages/index/user/communityDetails/sq_hdxq?id='+id
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      time : util.formatTime1(new Date())
    })
    this.commList()
  },
  getAddInfo(){
    this.onLoad()
  },
  commList(){
    http.commApi({
      
      success:res=>{
        console.log(res)
        var rowsList = res.rows
        
        for(var i in rowsList){
          if(rowsList[i].activeStartTime.split(' ')[0] != rowsList[i].activeEndTime.split(' ')[0]){
            rowsList[i].time = rowsList[i].activeStartTime +'-'+rowsList[i].activeEndTime
          }else{
            rowsList[i].time = rowsList[i].activeStartTime +'-'+rowsList[i].activeEndTime.split(' ')[1]
          }
          
        }
        this.setData({
          rowsList:res.rows
        })

            

      },
      fail:err=>{

            
        console.log(err)
      }
    })
  },

  commList1(){
    if(this.data.rowsList1.length == 0){
    http.commrmApi({
      
      success:res=>{
        //console.log(res)
        var rowsList = res.rows
        
        for(var i in rowsList){
          if(rowsList[i].activeStartTime.split(' ')[0] != rowsList[i].activeEndTime.split(' ')[0]){
            rowsList[i].time = rowsList[i].activeStartTime +'-'+rowsList[i].activeEndTime
          }else{
            rowsList[i].time = rowsList[i].activeStartTime +'-'+rowsList[i].activeEndTime.split(' ')[1]
          }
          
        }
        this.setData({
          rowsList1:res.rows
        })

            
 
      },
      fail:err=>{

            
  
        console.log(err)
      }
    })
  }
  },

  commList2(){
    if(this.data.rowsList2.length == 0){

    http.commpfApi({
      
      success:res=>{
       // console.log(res)
        var rowsList = res.rows
        
        for(var i in rowsList){
          if(rowsList[i].activeStartTime.split(' ')[0] != rowsList[i].activeEndTime.split(' ')[0]){
            rowsList[i].time = rowsList[i].activeStartTime +'-'+rowsList[i].activeEndTime
          }else{
            rowsList[i].time = rowsList[i].activeStartTime +'-'+rowsList[i].activeEndTime.split(' ')[1]
          }
          
        }
        this.setData({
          rowsList2:res.rows
        })

            
 
      },
      fail:err=>{
 
            

        console.log(err)
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