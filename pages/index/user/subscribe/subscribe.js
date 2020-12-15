Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    date: '2020-01-01',
    imgList: [],
    name: '', //姓名
    enterPhone: '', //手机号码
    enterId: '',//身份证号
  },


  //监听用户输入姓名
  enterName(e) {
    console.log(e)
    
    // let {
    //   value
    // } = e.detail
    // this.setData({
    //   name: value
    // })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  //监听输入手机号码
  enterPhone(e) {
    let {
      value
    } = e.detail

    this.setData({
      enterPhone: value
    })
  },
  //监听用户输入身份证号
  enterId(e) {
    let {
      value
    } = e.detail

    this.setData({
      enterId: value
    })
  },

  conData() {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    let reg = /^[\u2E80-\u9FFF]+$/;
    if (this.data.name == '') {
      wx.showToast({
        title: '请输入姓名',
        icon: "none",
        duration: 1000,
        mask: true
      })
      return false;
    } else if (!reg.test(this.data.name)) {
      wx.showToast({
        title: '姓名格式错误',
        icon: "none",
        duration: 1000,
        mask: true
      })
      return false;
    } else if (this.data.enterPhone == '') {
      wx.showToast({
        title: '手机号不能为空',
        icon: "none",
      })
      return false;
    } else if (this.data.enterPhone.length != 11) {
      wx.showToast({
        title: '手机号长度有误',
        icon: "none",
      })
      return false
    } else if (!myreg.test(this.data.enterPhone)) {
      wx.showToast({
        title: '手机号有误！',
        icon: "none",
        duration: 1500
      })
      return false;
    } else if (this.data.enterId == '') {
      wx.showToast({
        title: '身份证号不能为空',
        icon: "none",
      })
      return false;
    }else if (this.data.enterId.length != 15 && this.data.enterId.length !=18) {
      wx.showToast({
        title: '身份证号长度有误',
        icon: "none",
      })
    }
    let params = {
      linkman: this.data.name,
      linkPhone: this.data.enterPhone,
      idenTity: this.data.enterId,
    }
    // request.POST(getApp().globalData.wxip + "/address/add", params).then(res => {
    //   wx.navigateBack({
    //     delta: -1
    //   })
    // })
  },
  
  // 人像照片
  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },

  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '',
      content: '确定要删除这张图片吗？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
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
    console.log(this.data.t5state)
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