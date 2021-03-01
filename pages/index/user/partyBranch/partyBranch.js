import http from '../../../../utils/api'
// pages/index/partyBranch/partyBranch.js
let wxParse = require('../../../../wxParse/wxParse')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
    dataTab:[
      {id:0,content:"支委会成员"},
      {id:1,content:"支部党员"},
     /* {id:2,content:"组织生活会"},
      {id:3,content:"支部党课"},
      {id:4,content:"主题党日"}*/
      
    ],
    TabCur: 0,
    scrollLeft:0,
  panduan:true,
  topPos:false,
  rowsList:[],
  data1:[],
  data2:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.partyArr()
  },
  getAddInfo(){
    this.onLoad()
  },
  partyArr(){
    var that = this
    wx.showLoading({
      title: '拼命加载中',
    })
    http.listpagepartybranchApi({
      success:res=>{
        //console.log(res)
        that.setData({
          rowsList:res.rows[0]
        })
        http.listPageBranchPeopleBybranchApi({
          data:{
            partyBranchId:res.rows[0].partyBranchId
          },
          success:resm=>{
            console.log(resm)
            var data = resm.rows
            var data1 = that.data.data1
            var data2 = that.data.data2
            for(var i in data){
              if(data[i].peopleRole == 0){
                data1.push(data[i])
              }else{
                data2.push(data[i])
              }
            }

            that.setData({
              data1:data1,
              data2:data2
            })
            //console.log(that.data.rowsList)
            wx.hideLoading()
          },
          fail:err=>{
            console.log(err)
          }
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
    // wx.request({
    //   url: 'http://192.168.1.113:8083/zhsq/app/release/api/partybranch/listpagepartybranch', // 就是拼接上前缀,此接口域名是开放接口，可访问
    //   method: 'get', // 判断请求类型，除了值等于'post'外，其余值均视作get 其他的请求类型也可以自己加上的
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success(res) {
    //     //console.log(res)

    //     that.setData({
    //       rowsList:res.data.rows[0]
    //     })
    //     //console.log(that.data.rowsList)
    //     wx.request({
    //       url: 'http://192.168.1.113:8083/zhsq/app/release/api/branchpeople/listPageBranchPeopleBybranch/'+res.data.rows[0].partyBranchId, // 就是拼接上前缀,此接口域名是开放接口，可访问
    //       method: 'get', // 判断请求类型，除了值等于'post'外，其余值均视作get 其他的请求类型也可以自己加上的
    //       header: {
    //         'content-type': 'application/json'
    //       },
    //       success(res) {
    //         console.log(res)
    //         var data = res.data.rows
    //         var data1 = that.data.data1
    //         var data2 = that.data.data2
    //         for(var i in data){
    //           if(data[i].peopleRole == 0){
    //             data1.push(data[i])
    //           }else{
    //             data2.push(data[i])
    //           }
    //         }

    //         that.setData({
    //           data1:data1,
    //           data2:data2
    //         })
    //         //console.log(that.data.rowsList)
    //         wx.hideLoading({
    //           success: (res) => {
    //             this.selectComponent("#haveTrue").falseClick()
    //           },
    //         })
    //       },
    //       fail(err) {
    //         wx.hideLoading({
    //           success: (res) => {
    //             this.selectComponent("#haveTrue").trueClick()
    //           },
    //         })
    //         console.log(err)
    //       }
    //     })
    //   },
    //   fail(err) {
    //     wx.hideLoading({
    //       success: (res) => {
    //         this.selectComponent("#haveTrue").trueClick()
    //       },
    //     })
    //     console.log(err)
    //   }
    // })
    
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

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })
    if(e.currentTarget.dataset.id == 0){
      this.setData({
        panduan:true
      })
    }else{
      this.setData({
        panduan:false
      })
    }
  },
  scry(e){
    //console.log(e)
    if(e.detail.scrollTop > "150"){
      this.setData({
        topPos:true
      })
    }else{
      this.setData({
        topPos:false
      })
    }
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