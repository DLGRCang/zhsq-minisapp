import http from '../../../utils/api'

// pages/kaishi_tp/kaishi_tp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
    ],
    items02: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    radioStr: '中国'
  },
  // 单选
  radioChange: function (e) {
    var str = null;
    for (var value of this.data.items) {
      if (value.name === e.detail.value) {
        str = value.value;
        break;
      }
    }
    this.setData({ radioStr: str });
  },

  // 多选
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    const items02 = this.data.items02
    const values = e.detail.value
    for (let i = 0, lenI = items02.length; i < lenI; ++i) {
      items02[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items02[i].value === values[j]) {
          items02[i].checked = true
          break
        }
      }
    }

    this.setData({
      items02
    })
  },
  tp_click(){
    wx.navigateTo({
      url:'/pages/index/voteOver/tp' 
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.tpArr()
  },
  tpArr(){
    http.tpApi({
      success:res=>{
        console.log(res)
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  navTui(){
    wx.navigateBack({
      delta: 1
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

  },
})