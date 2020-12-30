// pages/czxq/czxq.js
import https from '../../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     // tab 切换
     tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    }, 
    rowsList:[],
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604661203084&di=1429902f0c8d780906cbc097f701cdcd&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170712%2Fdb384e2a81524e03bb62b96218aa07c3_th.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604661203081&di=ae59eb300a8f19a303b4d91fe3ca7beb&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180803%2F8fc59b76f6804cb68fd86509d9b67fea.jpeg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604661203077&di=89f53d6f8575a70822e652321c1122db&imgtype=0&src=http%3A%2F%2Fxcdfz.scdfz.org.cn%2FUpload%2Fmain%2FContentManage%2FArticle%2Fimage%2F61e5e4ceb32f40fcbca07fd6196525e8.jpeg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604661203169&di=7395c416e9fe1bc632acf66afea17cd1&imgtype=0&src=http%3A%2F%2Fpic.ibaotu.com%2Fspiders%2F360813-59c214527eee7.jpg'
    }],
  },
 // tab切换
 tab: function (e) {
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
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad(options) {
    //console.log(options.id)
    this.towerSwiper('swiperList');
    this.dqDetailsArr(options.id)
    // 初始化towerSwiper 传已有的数组名即可
  },
  getAddInfo(){
    this.onLoad()
  },
  dqDetailsArr(id){
    wx.showLoading({
      title: '拼命加载中',
    })
    https.dqDetailsApi({
      data:{
        constructionsActivityId:id
      },
      success:res=>{
       console.log(res)
       var rowsList = res
       for(var i in rowsList){
        rowsList[i].activeEndTime = rowsList[i].activeEndTime.replace('T',' ')
        rowsList[i].activeStartTime = rowsList[i].activeEndTime.replace('T',' ')
       }
       wx.hideLoading({
        success: (res) => {
          this.selectComponent("#haveTrue").falseClick()
        },
      })
       console.log(rowsList)
      //  this.setData({
      //    rowsList:res
      //  })
      },
      fail:err=>{
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").trueClick()
          },
        })
        console.log(err)
      }
    })
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})