import http from '../../utils/api'
// pages/index/Login/Login.js
import verif from '../../utils/verification'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    file:'',
    phone:'',
    trueClick:true
  },

  fileClick(e){
    //console.log(e.detail.value)
    this.setData({
      file:e.detail.value
    })
  },
  phoneClick(e){
    //console.log(e.detail.value)
    this.setData({
      phone:e.detail.value
    })
  },

  // 注册跳登录页面
  register:function(){
    var that = this
    if(this.data.file == ''){
      verif.tips('请输入您的身份证号')
    }else if(this.data.phone == ''){
      verif.tips('请输入您的手机号')
    }else{
   
      if(that.data.trueClick){
        that.setData({
          trueClick:false
        })

        if(verif.checkIdCard(this.data.file)){
          if(verif.checkPhone(this.data.phone)){
            wx.showLoading({
              title: '登陆中请稍后',
            })

            // 登录
            wx.getUserInfo({
              success: res => {
                //console.log(res)
                wx.login({
                  success: resa => {
                    http.saveLoginApi({
                      data:{
                        code:resa.code,
                        encryptedData:res.encryptedData,
                        iv:res.iv,
                        idcard:that.data.file,
                        phone:that.data.phone
                      },
                      success(data) {  
                       // console.log(data)
                        var userInfo = data.result.data.userInfo;
                        userInfo.avatarUrl = res.userInfo.avatarUrl
                        wx.setStorageSync('wxUser',userInfo)
                        wx.setStorageSync('token',data.result.data.token)
                        wx.setStorageSync('loginSi', true)
                        wx.hideLoading({
                          success: (res) => {
                            http.messageApi({
                              data:{
                                userId:wx.getStorageSync('wxUser').id
                              },
                              success:res=>{
                                console.log(res)
                                wx.setStorageSync('village', res)
                              },
                              fail:err=>{
                                console.log(err)
                              }
                            })
                            verif.tips('登录成功')
                            setTimeout(()=>{
                              wx.navigateBack({
                                delta: 1
                              })
                            },1000)
                            var pages = getCurrentPages(); // 当前页面
                            var beforePage = pages[pages.length - 2]; // 前一个页面
                            wx.navigateBack({
                                success: function() {
                                    beforePage.sxLogin(); // 执行前一个页面的onLoad方法
                                }
                            });
                          },
                        })
                        
                      },
                      fail(err) {
                        console.log(err)
                      }
                    })
                    // wx.request({
                    //   url: 'https://yiqi.sucstep.com/app/sign/saveZhsqWeChatUserrelease', // 就是拼接上前缀,此接口域名是开放接口，可访问
                    //   method: 'post', // 判断请求类型，除了值等于'post'外，其余值均视作get 其他的请求类型也可以自己加上的
                    //   data:{
                    //     code:resa.code,
                    //     encryptedData:res.encryptedData,
                    //     iv:res.iv,
                    //     idcard:that.data.file,
                    //     phone:that.data.phone
                    //   },
                    //   header: {
                    //     'content-type': 'application/json'
                    //   },
                    //   success(data) {  
                    //     //console.log(data)
                    //     var userInfo = data.data.result.data.userInfo;
                    //     userInfo.avatarUrl = res.userInfo.avatarUrl
                    //     wx.setStorageSync('wxUser',userInfo)
                    //     wx.setStorageSync('token',data.data.result.data.token)
                    //     wx.setStorageSync('loginSi', true)
                    //     wx.hideLoading({
                    //       success: (res) => {
                    //         verif.tips('登录成功')
                    //         setTimeout(()=>{
                    //           wx.navigateBack({
                    //             delta: 1
                    //           })
                    //         },1000)
                    //         var pages = getCurrentPages(); // 当前页面
                    //         var beforePage = pages[pages.length - 2]; // 前一个页面
                    //         wx.navigateBack({
                    //             success: function() {
                    //                 beforePage.sxLogin(); // 执行前一个页面的onLoad方法
                    //             }
                    //         });
                    //       },
                    //     })
                        
                    //   },
                    //   fail(err) {
                    //     console.log(err)
                    //   }
                    // })
                   // console.log(res)
                  }
                })
              }
            })
          } 
        }
      }else{
        verif.tips('请勿重复点击')
      }
      
    }
    // wx.navigateTo({
    //   url: '/pages/index/user/Register/Register'
    // })
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