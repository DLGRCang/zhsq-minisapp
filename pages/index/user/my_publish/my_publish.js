// pages/index/my_publish/my_publish.js
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    hidden:false,
    rows:[],
    rows1:[],
    rentRoomId:null,
      // tab 切换
      tabArr: {
        curHdIndex: 0,
        curBdIndex: 0
      }, 
      // tab 切换
     tabArr01: {
        curHdIndex: 0,
        curBdIndex: 0
      },  
      StatusBar: app.globalData.StatusBar,
      CustomBar: app.globalData.CustomBar,
      ColorList: app.globalData.ColorList,
      isStar: false, // 默认没有收藏
      isShare: true, // 默认有分享
      isShare: false, // 默认没有赞
      removeId:null,
    removeIdIndex:null,
    desNumber:null,
    modalName:null
},
// 我的发布tab切换
    tab: function (e) {
    //var dataId = e.currentTarget.dataset.id;
    var dataId = e.currentTarget.id;
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr: obj
    })
},  
// 房屋tab切换
tab01: function (e) {
  //var dataId = e.currentTarget.dataset.id;
  var dataId = e.currentTarget.id;
  var obj = {};
  obj.curHdIndex = dataId;
  obj.curBdIndex = dataId;
  this.setData({
    tabArr01: obj
  })
},  
// 房屋发布跳转
fbfy(){
  wx.navigateTo({
    url: '/pages/index/user/lease/lease'
  })
},
// 房屋详情跳转
xiangqing(e){
  //console.log(e)
  wx.navigateTo({
    url: '/pages/index/user/houseRental-details/czxq?id='+JSON.stringify(e.currentTarget.dataset.id)
  })
},
// 邻里圈的发布
fabu:function(){
  wx.navigateTo({
    url: '/pages/index/user/Llq_pub/Llq_pub'
  })
},
 // 移动巡查发布跳转
 update(e){

  wx.navigateTo({
    url: '/pages/index/user/lease/lease?item='+JSON.stringify(e.currentTarget.dataset.item)
  })
},
// 关闭按钮
showModal(e) {
  this.setData({
    rentRoomId:e.currentTarget.dataset.id,
    modalName: e.currentTarget.dataset.target,
    desNumber:2
  })
},
hideModal(e) {
  this.setData({
    modalName: null
  })
},
delete(){
  if(this.data.desNumber == 1){
    http.removecommentApi({
      data:{
        ids:this.data.removeId
      },
      success:res=>{
        //console.log(res)

        var rows = this.data.rows
        if (Object.keys(res).length === 0) {
          rows.splice(this.data.removeIdIndex,1)
          verif.tips("删除成功")
          this.setData({
            rows:rows,
            modalName: null
          })
        }else{
          verif.tips("删除失败")
        }
      
      }
    })
  }else{
    http.scczfwApi({
      data:{
        residentsId:wx.getStorageSync('wxUser').id,
        rentRoomIds:this.data.rentRoomId,
        state:'3'
      },
      success:res=>{
        //console.log(res)
        if(res.code == 200){
          verif.tips('关闭成功')
          this.setData({
            modalName: null
          })
          this.fwList()
        }
      },
      fail:err=>{
        console.log(err)
      }
    })
  }
  
},
// 邻里圈点击进入详情
lljClick:function(e){
 
  wx.navigateTo({
    url: '/pages/index/user/neighborhood-details/llq_xq?rows='+JSON.stringify(e.currentTarget.dataset.rows)
  })
},

quanwen(e){
  //console.log(e.currentTarget.dataset.i)
  var rows = this.data.rows
  rows[e.currentTarget.dataset.i].pantrue = false
  this.setData({
    rows:rows
  })
},
squanwen(e){
  //console.log(e.currentTarget.dataset.i)
  var rows = this.data.rows
  rows[e.currentTarget.dataset.i].pantrue = true
  this.setData({
    rows:rows
  })
},
  // 点击收藏
  toStar () {
    var bol = this.data.isStar; // 获取状态
    this.setData({
      isStar:!bol // 改变状态
    })
    },
  // 点击分享
  toShare () {
    var bol = this.data.isShare; // 获取状态
    this.setData({
      isShare:!bol // 改变状态
    })
    },
  // 点赞/取消点赞
  toZan () {
    var bol = this.data.isZan; // 获取状态
    this.setData({
      isZan:!bol // 改变状态
    })
    },

   //邻里圈-跳转
  //  llqClick:function(){
  //   wx.navigateTo({
  //     url: '/pages/index/neighborhood-details/llq_xq'
  //   })
  // },
     //房屋-跳转
    //  fwClick:function(){
    //   wx.navigateTo({
    //     url: '/pages/index/houseRental-details/czxq'
    //   })
    // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.llqList()
    this.fwList()
  },
  getAddInfo(){
    this.onLoad()
  },
  removeCLick(e) {
    console.log(e)
    this.setData({
      modalName: e.currentTarget.dataset.target,
      removeId:e.currentTarget.dataset.id,
      removeIdIndex:e.currentTarget.dataset.i,
      desNumber:1
    })
  },
  llqList(){
    http.wdfbLlqApi({
      data:{
        createPeopleId:wx.getStorageSync('wxUser').id
      },
      success:res=>{
        console.log(res)
        var rows = res.rows
        var message1 = ''
        
        for(var i in rows){
          rows[i].img = rows[i].file.split(',')
          if(rows[i].message.length > 100){
            message1 = rows[i].message.slice(0,100)
            
            rows[i].message1 = message1+'...'
            rows[i].pantrue = true
            rows[i].pantrue1 = true
          }else{
            rows[i].pantrue = false
            rows[i].pantrue1 = false
          }
          
        }
        //console.log(rows)
        this.setData({
          rows:rows
        })

      },
      fail:err=>{
 
        console.log(err)
      }
    })

    
  },

  fwList(){

    http.wdfbfwApi({
      data:{
        residentsId:wx.getStorageSync('wxUser').id
      },
      success:res=>{
        //console.log(res)
        var rows = res.rows
        for(var i in rows){
          rows[i].img = rows[i].housePhoto.split(',')
        }
        console.log(rows)
        
        this.setData({
          rows1:rows
        })

        
      },
      fail:err=>{

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