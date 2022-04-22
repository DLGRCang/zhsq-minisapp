import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
import util from '../../../../utils/util'
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
    radioStr: '中国',
    rows:[],
    rowsdx:{},
    timeL:0
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
    //console.log('checkbox发生change事件，携带value值为：', e.detail.value)
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
  tp_click(e){
    //console.log(e)
    wx.navigateTo({
      url:'/pages/index/user/voteOver/tp?id='+e.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date)
    var times = time.split(' ')[0]
    this.setData({
      timeL:times
    })
    //console.log(options.id)
    // if(options.id == 'undefined'){
    //   this.tpArr()
    // }else{
    //   this.wjArr(options.id)
    // }
   // console.log(options)
    this.wjArr(options)
  },
  // tpArr(){
  //   http.tpApi({
  //     data:{
  //       votePeopleId:'aaa'
  //     },
  //     success:res=>{
        
  //       //console.log(res)
  //       //var rows = res.rows
  //       // var rowsdx = {}
  //       // for(var i in rows){
  //       //   var voteOption1 = []
  //       //   voteOption1.push(rows[i].voteOption.split(';'))
  //       //   rows[i].voteOption1 = voteOption1
  //       //   rowsdx[i] = null
  //       // }
  //       ///console.log(rowsdx)
  //       this.setData({
  //         rows:res.rows
  //         //rowsdx:rowsdx
  //       })

            

  //     },
  //     fail:err=>{

            
  //       console.log(err)
  //     }
  //   }) 
  // },

  wjArr(options){
    //console.log(options)
    http.wjdcApi({
      data:{
        questionnaireId:options.id,
        type:options.type
      },
      success:res=>{
        //console.log(res)
        this.setData({
          rows:res.rows
        })

      },
      fail:err=>{

        console.log(err)
      }
    })
  },

  dxClick(e){
    console.log(e)
    var rowsdx = this.data.rowsdx
    for(var i in rowsdx){
      if(i == e.currentTarget.dataset.index){
        var x = ''
        if(e.currentTarget.dataset.indexa == 0){
          x='a'
        }else if(e.currentTarget.dataset.indexa == 1){
          x='b'
        }else if(e.currentTarget.dataset.indexa == 2){
          x='c'
        }else if(e.currentTarget.dataset.indexa == 3){
          x='d'
        }else if(e.currentTarget.dataset.indexa == 4){
          x='e'
        }else if(e.currentTarget.dataset.indexa == 5){
          x='f'
        }else if(e.currentTarget.dataset.indexa == 6){
          x='g'
        }else if(e.currentTarget.dataset.indexa == 7){
          x='h'
        }
        rowsdx[i] = x +':'+ e.currentTarget.dataset.item.split(':')[1]
      }
    }
   // console.log(rowsdx)
  },
  tpClick(e){
    
    var time = util.formatTime(new Date)
    
    var rowsdx = this.data.rowsdx
    for(var i in rowsdx){
      if(i == e.currentTarget.dataset.index){
    
        if(rowsdx[i] == null){
          verif.tips('请选择投票内容')
        }else{

          http.tpanApi({
            data:{
              voteId:e.currentTarget.dataset.voteid,
              votePeopleId:'aaa',
              voteTime:time,
              voteOption:rowsdx[i],
              votePeopleName:'德力'
            },
            success:res=>{
                  verif.tips('投票成功')

            },
            fail:err=>{

            }
          })
          console.log(rowsdx[i])  
        }
      }
    }
  },
  navTui(){
    wx.navigateBack({
      delta: 1
    })
  },
  getAddInfo(){
    this.onLoad()
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