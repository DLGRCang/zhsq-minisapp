// pages/login/login.js
import verif from '../../utils/verification'
import http from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  notTemporarily() {
    wx.navigateBack({
      delta: 1
    })
  },
  bindGetUserInfo(e) {
    var that = this
    //console.log(e)

       // console.log(e)
        wx.login({
          success: resa => {
           // console.log(resa)
            http.loginApi({
              data:{
                code:resa.code,
                encryptedData:e.detail.encryptedData,
                iv:e.detail.iv
              },
              success(data) {
                //console.log(data)
                if(data.code == 200){
                  var userInfo = data.result.data.userInfo;
                  userInfo.avatarUrl = e.detail.userInfo.avatarUrl
                  wx.setStorageSync('wxUser',userInfo)
                  wx.setStorageSync('token',data.result.data.token)
                  wx.setStorageSync('loginSi', true)
                  that.saven()

                      // http.messageApi({
                      //   data:{
                      //     userId:wx.getStorageSync('wxUser').id
                      //   },
                      //   success:res=>{
                      //     //console.log(res)
                      //     var status = null
                      //       for(var i in res){
                      //         status = i
                      //       }
                      //       if(status != 'noVillage'){
                      //         wx.setStorageSync('village', res)
                      //       }else{
                      //         wx.setStorageSync('village', false)
                      //       }
                      //   },
                      //   fail:err=>{
                      //     console.log(err)
                      //   }
                      // })
                      verif.tips('授权成功')
                      setTimeout(()=>{
                        var pages = getCurrentPages(); // 当前页面
                        var beforePage = pages[pages.length - 2]; // 前一个页面
                        // console.log("beforePage");
                        // console.log(beforePage);
                        wx.navigateBack({
                            success: function() {
                                beforePage.messageList(); // 执行前一个页面的messageList方法
                                beforePage.onLoad(); // 执行前一个页面的messageList方法
                            }
                        });
                      },800)
                      
                      // setTimeout(()=>{
                      //   wx.navigateBack({
                      //     delta: 1
                      //   })
                      // },500)
                 
                }else{
                    wx.navigateTo({
                        url: '/pages/Login-on/Login'
                    })
                }
               },
               fail(err) {
                 verif.tips("登录失败，稍后重试")
                 setTimeout(()=>{
                  wx.navigateBack({
                    delta: 1
                  })
                },800)
                 console.log(err)
               }
            })
           // console.log(res)
          }
        })
  },

  saven(){
    http.listintegralmanagementApi({
      success:res=>{
         console.log(res)
        http.saveusersintegralApi({
          data:{
            userUsername:wx.getStorageSync('wxUser').id,
            userIntegral:res[0].integralManagementId,
            userAvatar:1
          },
          success:resa=>{
            console.log(resa)
          }
        })
      }
    })
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