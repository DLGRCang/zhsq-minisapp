import http from '../../../../utils/api'
import util from '../../../../utils/util'
import verif from '../../../../utils/verification'
const app = getApp()
// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight:app.globalData.windowHeight,
    imgUrl: app.globalData.imgUrl,
    isCollect: true, // 默认有点赞
    isStar: false, // 默认没有收藏
    rows:[],
    dzIndex:null,
    InputBottom:0,
    contentText:'',
    plng:0,
    plSize:'填写评论内容',
    xpluserids:'',
    xplName:'',
    xplIds:'',
  },


  // 点击收藏
toStar () {
  var bol = this.data.isStar; // 获取状态
  this.setData({
    isStar:!bol // 改变状态
  })
  },
// 点赞/取消点赞
toCollect () {
  var bol = this.data.isCollect; // 获取状态
  this.setData({
  isCollect:!bol // 改变状态
  })
  },

  plnrshuru(e){
    this.setData({
      contentText:e.detail.value
    })
  },
  InputFocus(e) {

    this.setData({
      InputBottom: e.detail.height
    })
    
  },
  inputBlur(){
    this.setData({
      InputBottom: 0
    })
  },
  plzplClick(e){
    var cont = '回复'+e.currentTarget.dataset.items.commentPeopleName
    this.setData({
      xpluserids:e.currentTarget.dataset.items.commentPeopleId,
      xplName:e.currentTarget.dataset.items.commentPeopleName,
      xplIds:e.currentTarget.dataset.items.commentId,
      plSize:cont,
      plng:1,
      InputBottomFalse:true
    })
  },
  dianji(){
    this.setData({
      plSize:'填写评论内容',
      plng:0,
      InputBottomFalse:true
    })
  },

  plsClick(e){

    var i = this.data.indexCon
    if(this.data.contentText == ''){
      verif.tips('请填写回复内容')
    }else{
      http.savecommentApi({
        data:{
          commId:this.data.rows.neighborId,
          contentReview:this.data.contentText,
          commentTime:util.formatTime(new Date()),
          commentPeopleId:wx.getStorageSync('wxUser').id,
          commentPeopleName:wx.getStorageSync('wxUser').name,
          beCommentedId:this.data.xplIds,
          beCommentPeopleId:this.data.xpluserids,
          beCommentPeopleName:this.data.xplName
        },
        success:res=>{
          //console.log(res)
          verif.tips('评论成功')
          this.setData({
            contentText:''
          })
          this.plClick(this.data.rows)
         
    
        },
        fail:err=>{
          console.log(err)
        }
      })
    }
  },
  zhuPlClick(e){
    //console.log(wx.getStorageSync('wxUser'))
    //console.log(this.data.rows)
    if(this.data.contentText == ''){
      verif.tips('请填写评论内容')
    }else{
      http.savecommentApi({
        data:{
          commId:this.data.rows.neighborId,
          contentReview:this.data.contentText,
          commentTime:util.formatTime(new Date()),
          commentPeopleId:wx.getStorageSync('wxUser').id,
          commentPeopleName:wx.getStorageSync('wxUser').name,
          beCommentedId:0,
          beCommentPeopleId:0,
          beCommentPeopleName:0
        },
        success:res=>{
          verif.tips('评论成功')
          this.setData({
            contentText:''
          })
          this.plClick(this.data.rows)
        },
        fail:err=>{
          console.log(err)
        }
      })
    }
  },

  plnrdzClick(e){

    var pinglunRows = this.data.pinglunRows
    
    http.goodnumberApi({
      data:{
        goodId:this.data.rows.neighborId,
        goodPeopleId:wx.getStorageSync('wxUser').id,
        goodPeopleName:wx.getStorageSync('wxUser').name,
        goodTime:util.formatTime(new Date()),
        goodCommentId:e.currentTarget.dataset.ids
      },
      success:res=>{
  
        if(pinglunRows[e.currentTarget.dataset.in].goodState == '1'){
          pinglunRows[e.currentTarget.dataset.in].goodState = 0
        }else{
          pinglunRows[e.currentTarget.dataset.in].goodState = 1
        }
        
        this.setData({
          pinglunRows:pinglunRows
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //console.log(options)
      this.setData({
        rows:JSON.parse(options.rows)
      })
    
      //console.log(JSON.parse(options.rows))
      this.plClick(JSON.parse(options.rows))
      wx.setStorageSync('llqXq', true)
  },
  getAddInfo(){
    this.onLoad()
  },

  plClick(rows){
    http.getlistCommentByMessageIdApi({
      data:{
        goodpeopleId:wx.getStorageSync('wxUser').id,
        commId:rows.neighborId,
        curPage:0
      },
      success:res=>{

        var pinglunRows = res.rows
        
        
        this.setData({
          pinglunRows:pinglunRows
        })
      },
      fail:err=>{
        console.log(err)
      },
      complete(lete) {

        console.log(lete)
      }
    })

    
  },
  scClick(e){

    var rows = this.data.rows
    http.collectionrecordApi({
      data:{
        collectionId:e.currentTarget.dataset.id,
        collectionPeopleId:wx.getStorageSync('wxUser').id,
        collectionResources:1
      },
      success:res=>{
        //console.log(res)
        if(res.code == 200){
          if(rows.collectionState == null||rows.collectionState == 0){
            rows.collectionState = 1
          }else{
            rows.collectionState = 0
          }
          this.setData({
            rows:rows
          })
        }
      },
      fail:err=>{
        console.log(err)
      }
    })
    
    
  },


  dzClick(e){
    var that = this
  
    var rows = this.data.rows

    
    http.goodnumberApi({
      data:{
        goodId:e.currentTarget.dataset.id,
        goodPeopleId:wx.getStorageSync('wxUser').id,
        goodPeopleName:wx.getStorageSync('wxUser').name,
        goodTime:util.formatTime(new Date()),
        goodCommentId:e.currentTarget.dataset.id
      },
      success:res=>{
        if(res.code == 200){
            if(rows.goodState == '1'){
              rows.goodState = '0'
              rows.goodNumber--
            }else{
              
              rows.goodState = '1'
              rows.goodNumber++
              that.setData({
                dzIndex: 1
              })
              setTimeout(function() {
                that.setData({
                  dzIndex: null
                })
              }, 800)
            }
          this.setData({
            rows:rows
          })
          
        }
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