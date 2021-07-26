// pages/index/t4/t4.js
import http from '../../../../utils/api'
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    imgUrl: app.globalData.imgUrl,
    isStar: false, // 默认没有收藏
    isShare: true, // 默认有分享
    isShare: false, // 默认没有赞
    forF4:[],
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    }, 
    rows:[],
    rows1:[]
  },
    // tab切换
    tab: function (e) {
      // console.log(e)
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
    lljClick:function(e){
      //console.log(e)
      wx.navigateTo({
        url: '/pages/index/user/neighborhood-details/llq_xq?rows='+JSON.stringify(e.currentTarget.dataset.rows)
      })
    },
        // 新闻详情
      newsxq(){
        wx.navigateTo({
          url: '/pages/index/user/notice-details/notice-details'
        })
      }, 
  
    xinwenArr(){
      http.findByUserIdAndMessageIdApi({
        data:{
          goodPeopleId:wx.getStorageSync('wxUser').id
        },
        success:res=>{

          var res = res
         // console.log(res)
          for(var i in res){
            if(res[i] != null){
              if(res[i].file != ""){
                res[i].img = res[i].file.split(',')
              }
            }
          }
         
          this.setData({
            rows:res
          })
        },
        fail:err=>{
          console.log(err)
        }
      }),
      
      http.getMyCollectionRecordApi({
        data:{
          userId:wx.getStorageSync('wxUser').id,
          collectionResources:0
        },
        success:res=>{
      
          var res = res
          for(var i in res){
            if(res[i] != null){
              if(res[i].file != ""){
                res[i].img = res[i].file.split(',')
              }
            }
          }
          //console.log(res)
          this.setData({
            rows1:res
          })
        },
        fail:err=>{
          console.log(err)
        }
      })

      http.getMyCommentApi({
        data:{
          userId:wx.getStorageSync('wxUser').id,
          collectionResources:0
        },
        success:res=>{
          //console.log(res)
          var res = res
          for(var i in res){
            if(res[i] != null){
              if(res[i].file != ""){
                res[i].img = res[i].file.split(',')
              }
            }
          }
         // console.log(res)
          this.setData({
            rows2:res
          })
        },
        fail:err=>{
          console.log(err)
        }
      })
    },
    getAddInfo(){
      this.xinwenArr()
    },
    onLoad:function(options){
      //console.log(options.tabId)
      var obj = {};
      obj.curHdIndex = options.tabId;
      obj.curBdIndex = options.tabId;
      this.setData({
        tabArr: obj
      })
      this.xinwenArr()
   
    },
    onShow:function(){

      var that = this
      wx.getStorage({
        key: 'llqXq',
        success: function(res){
   
          if(res.data){
            
            wx.setStorageSync('llqXq', false)
            that.xinwenArr()
          }
          
        }
      })
    }
})
