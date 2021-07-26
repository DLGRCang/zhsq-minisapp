// pages/index/user/myPerfect/myPerfect.js
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    windowHeight:app.globalData.windowHeight,
    imgUrl:app.globalData.imgUrl,
    index: null,
    indexMz: null,
    picker: ['女', '男'],
    sexIndex:null,
    pickerMz:[],
    mzRes:[],
    zishitc:false,
    imgList:[],
    imgId:[],
    imgHeigth:0,
    jg:'',
    zy:'',
    gzdw:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var query = wx.createSelectorQuery()
    query.select('#imgCss').boundingClientRect(function (res) { 
       //console.log(res);
       that.setData({
        imgHeigth:res.width
       })
    }).exec();
    this.mzArr()
  },
  jgClick(e){
    this.setData({
      jg:e.detail.value
    })
  },
  zyClick(e){
    this.setData({
      zy:e.detail.value
    })
  },
  gzdwClick(e){
    this.setData({
      gzdw:e.detail.value
    })
  },
  PickerChange(e) {
    //console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  PickerChangeMz(e){
    //console.log(e)
    this.setData({
      indexMz: e.detail.value
    })
  },
  guanbi(){
    this.setData({
      zishitc:false
    })
  },
  ChooseImage() {
    this.setData({
      zishitc:true
    })
    
  },
  quedingsc(){
    var imgs=verif.imgClick()
      imgs.then(res=>{
         this.setData({
          imgId:this.data.imgId.concat(res.imgs),
          imgList:this.data.imgList.concat(this.data.imgUrl+res.imgs),
          zishitc:false
        })
      })
    },
  
    ViewImage(e) {
      wx.previewImage({
        urls: this.data.imgList,
        current: e.currentTarget.dataset.url
      });
    },
    DelImg(e) {
      wx.showModal({
        title: '删除',
        content: '确定要删除这段回忆吗？',
        cancelText: '再看看',
        confirmText: '再见',
        success: res => {
          if (res.confirm) {
            this.data.imgList.splice(e.currentTarget.dataset.index, 1);
            this.data.imgId.splice(e.currentTarget.dataset.index, 1);
            this.setData({
              imgList: this.data.imgList,
              imgId:this.data.imgId
            })
          }
        }
      })
    },
  mzArr(){
    http.mzApi({
      success:res=>{
        //console.log(res)
        var pickerMz = this.data.pickerMz
        for(var i in res){
          pickerMz.push(res[i].dictionariesName)
        }
        this.setData({
          pickerMz:pickerMz,
          mzRes:res
        })
      }
    })
  },


  tjClick(){
    
    if(this.data.mzRes[this.data.indexMz] != undefined){
      var national = this.data.mzRes[this.data.indexMz].dictionariesId
    }
    if(this.data.imgId.length != 0){
      var img = this.data.imgId[0]
    }


     if(this.data.index == null&&national == undefined&&this.data.jg == ''&&this.data.zy == ''&&this.data.gzdw == ''&&img == undefined){
      verif.tips('请至少修改一个信息才可提交')
     }else{
       http.savegoodnumberApi({
          data:{
            unifiedUserId:wx.getStorageSync('wxUser').id,
            findvillageId:wx.getStorageSync('xzvillage').village.villageId,
            sex:this.data.index,
            national:national,
            nativePlace:this.data.jg,
            professional:this.data.zy,
            work:this.data.gzdw,
            facePhoto:img
          },
          success:res=>{
            //console.log(res)
            if(res.code == 200){
              verif.tips('成功')
              var pages = getCurrentPages(); // 当前页面
                var beforePage = pages[pages.length - 2]; // 前一个页面

               
              setTimeout(()=>{
                wx.navigateBack({
                  success: function() {
                      beforePage.messageList(); // 执行前一个页面的onLoad方法
                    
                  },
                  delta: 1
              });

                  
            
              },800)
            }
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