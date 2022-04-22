import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
// pages/index/life_details/life_details.js 
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      // input默认是1  
      num: 0,  
      // 使用data数据对象设置样式名  
      minusStatus: 'disabled'  ,
      windowHeight:app.globalData.windowHeight,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    imgUrl: app.globalData.imgUrl,
    tabBox:[
      {name:'全部商品'},
      // {name:'评价'},
      // {name:'商家'}
    ],
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [
    
    ],
    load: true,
    isCollect: true, // 默认下箭头
    // 三个导航
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    }, 
    boxHeight:0,
    tabRight:0,
    shopWidth:0,
    tabLeftIndex:null,
    tabLeft2Index:null,
    box3Index:null,
    tabLeftTop:0,
    forBox:[],
    forBox3:[],
    page:1,
    weChatList:[],
    weChatList1:[],
    modalName:null,
    ggBoxList:[],
    ggBoxListIndex:null,
    ggBoxListprice:[],
    shopJiesuan:[],
    price:0,
    zkPrice:0
  },

  box3Click(e){
    //console.log(e)
    this.setData({
      box3Index:e.currentTarget.dataset.i
    })
    http.listPageCommodityDetailsWeChatApi({
      data:{
        type:e.currentTarget.dataset.id,
        shopListId:this.data.forBox.shopListId,
        page:this.data.page
      },
      success:res=>{
        var weChatList1 = this.data.weChatList1
        var rows = res.rows
        var list = []
  
          for(var i in weChatList1){
            for(var n in rows){
              if(weChatList1[i].shoppingId == rows[n].shoppingId){
                list.push(weChatList1[i])
              }
            }
          }
         
        this.setData({
          weChatList:list
        })
        var that = this
        var query = wx.createSelectorQuery()
        query.select('#shopimg').boundingClientRect(function (res) { 
          //console.log(res)
          that.setData({
            shopWidth:res.height+20
          })
          }).exec();
      },
      fail:err=>{
        console.log(err)
      }
    })
  },

  tabLeftClick(e){
    if(e.currentTarget.dataset.i == this.data.tabLeftIndex){
      this.setData({
        tabLeftIndex:null,
        tabLeft2Index:null,
        box3Index:null,
        forBox3:[],
        tabLeftTop: (e.currentTarget.dataset.i - 1) * 60
      })
      var type = 0
    this.shopList(type)
    }else{
      this.setData({
        tabLeft2Index:null,
        box3Index:null,
        forBox3:[],
        tabLeftIndex:e.currentTarget.dataset.i,
        tabLeftTop: (e.currentTarget.dataset.i - 1) * 60
      })
      this.getTypefindParentIdArr(e.currentTarget.dataset.id,1,this.data.forBox.shopListId)
    }
    
  },
  tabLeft2Click(e){
    //console.log(e)
    this.setData({
      tabLeft2Index:e.currentTarget.dataset.i,
      box3Index:null
      //box3Index:0
    })
    http.listPageCommodityDetailsWeChatApi({
      data:{
        type:e.currentTarget.dataset.id,
        shopListId:this.data.forBox.shopListId,
        page:this.data.page
      },
      success:res=>{
        //console.log(res)
        var weChatList1 = this.data.weChatList1

        var rows = res.rows
        var list = []
        for(var i in weChatList1){
          for(var n in rows){
            if(weChatList1[i].shoppingId == rows[n].shoppingId){
              list.push(weChatList1[i])
            }
          }
        }
        this.setData({
          weChatList:list
        })
        var that = this
        var query = wx.createSelectorQuery()
        query.select('#shopimg').boundingClientRect(function (res) { 
          //console.log(res)
          if(res != null){
            that.setData({
              shopWidth:res.height+20
            })
          }
          }).exec();
      },
      fail:err=>{
        console.log(err)
      }
    })
    this.getTypefindParentId3Arr(e.currentTarget.dataset.id,2,this.data.forBox.shopListId)
  },
  
    // 搜索页面跳转
    Search:function(){
      wx.navigateTo({
        url: '/pages/index/business/Search/Search'
      })
    },
    /* 点击减号 */  
    bindMinus: function() {  
      var num = this.data.num;  
      // 如果大于1时，才可以减  
      if (num > 0) {  
          num --;  
      }  
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num <= 0 ? 'disabled' : 'normal';  
      // 将数值与状态写回  
      this.setData({  
          num: num,  
          minusStatus: minusStatus  
      });  
  },  
  /* 点击加号 */  
  bindPlus: function() {  
      var num = this.data.num;  
      // 不作过多考虑自增1  
      num ++;  
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num < 0 ? 'disabled' : 'normal';  
      // 将数值与状态写回  
      this.setData({  
          num: num,  
          minusStatus: minusStatus  
      });  
  },  
  /* 输入框事件 */  
  bindManual: function(e) {  
      var num = e.detail.value;  
      // 将数值与状态写回  
      this.setData({  
          num: num  
      });  
  },
  // 下拉/上拉
toCollect () {
  var bol = this.data.isCollect; // 获取状态
  this.setData({
  isCollect:!bol // 改变状态
  })
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

ggClick(e){
  this.setData({
    ggBoxListIndex:e.currentTarget.dataset.i,
    ggBoxListprice:this.data.ggBoxList[e.currentTarget.dataset.i]
  })
},

jianClick(e){
  //console.log(this.data.shopJiesuan)
  var index = e.currentTarget.dataset.i
  var weChatList = this.data.weChatList
  var shopJiesuan = this.data.shopJiesuan
  
  for(var i in shopJiesuan){
    if(shopJiesuan[i].shoppingId == e.currentTarget.dataset.item.shoppingId){
      if(shopJiesuan[i].data == 1){
        shopJiesuan.splice(i,1)
      }else{
        shopJiesuan[i].data--
      }
    }
  }
  weChatList[index].data--
  this.setData({
    weChatList:weChatList,
    weChatList1:weChatList,
    shopJiesuan:shopJiesuan
  })
  this.typeList()
},

//加入购物车按钮
shopClick(e){
  var index = e.currentTarget.dataset.i
  var weChatList = this.data.weChatList
  var shopJiesuan = this.data.shopJiesuan
  
  if(weChatList[index].data < weChatList[index].number){
    weChatList[index].data++
    if(shopJiesuan.length == 0){
      e.currentTarget.dataset.item.data++
      shopJiesuan.push(e.currentTarget.dataset.item)
    }else{
      var m = false
      for(var i in shopJiesuan){
        if(shopJiesuan[i].shoppingId == e.currentTarget.dataset.item.shoppingId){
          shopJiesuan[i].data++ 
          m = false
          break;
        }else{
          m = true
        }
      }
      if(m){
        e.currentTarget.dataset.item.data++
        shopJiesuan.push(e.currentTarget.dataset.item)
      }
    }
    
  }else{
    verif.tips("库存不足")
  }
 
    this.setData({
      weChatList:weChatList,
      weChatList1:weChatList,
      shopJiesuan:shopJiesuan
    })

  this.typeList()


  // http.findDetailsByShoppingIdApi({
  //   data:{
  //     shoppingId:e.currentTarget.dataset.id
  //   },
  //   success:res=>{
  //     if(res.length != 0){
  //       this.setData({
  //         ggBoxList:res,
  //         ggBoxListIndex:0,
  //         ggBoxListprice:res[0],
  //         modalName: e.currentTarget.dataset.target
  //       })
  //     }
  //     console.log(res)
  //   }
  // })
},


typeList(){
  var shopJiesuan = this.data.shopJiesuan

  var price = 0
  var zkPrice = 0
  for(var i in shopJiesuan){
    price=price+(shopJiesuan[i].data*shopJiesuan[i].discount)
    zkPrice=zkPrice+(shopJiesuan[i].data*shopJiesuan[i].price)
  }

  this.setData({
    price:price,
    zkPrice:zkPrice
  })
},

jiesuanClick(){
  wx.navigateTo({
    url: '/pages/index/user/life_detailsOrder/life_detailsOrder?item='+JSON.stringify(this.data.shopJiesuan)
  })
},

shopClickFalse(){
  this.setData({
    modalName: null
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(JSON.parse(options.item))
    var item = JSON.parse(options.item)
    //console.log(item)
    // item.lable = []
    // for(var i in item.type.split(',')){
    //   item.lable.push({id:item.type.split(',')[i],name:item.commodityTypeName.split(',')[i],list:[]})
    // }
    //console.log(item)
    this.setData({
       tabLeftIndex:0,
      // tabLeft2Index:0,
      // box3Index:0,
      forBox:item
    })
  

    this.twoForArr()
    //this.getTypefindParentIdArr(item.lable[0].id,1,item.shopListId,arrtrue)
   
   
    // let list = [{}];
    // for (let i = 0; i < 6; i++) {
    //   list[i] = {};
    //   list[i].name = '';
    //   list[i].id = i;
    // }
    this.setData({
      //list: list,
      listCur: this.data.list[0]
    })
 
      this.twoHeight()
      var type = 0
    this.shopList(type)
    
  },

  shopList(type){
    //debugger
   // console.log(http.listPageCommodityDetailsWeChatApi)
    http.listPageCommodityDetailsWeChatApi({
      data:{
        type:type,
        shopListId:this.data.forBox.shopListId,
        page:this.data.page
      },
      success:res=>{
        for(var i in res.rows){
          res.rows[i].data = 0
        }
        this.setData({
          weChatList:res.rows,
          weChatList1:res.rows
        })
        var that = this
        var query = wx.createSelectorQuery()
        query.select('#shopimg').boundingClientRect(function (res) { 
          //console.log(res)
          if(res != null){
            that.setData({
              shopWidth:res.height+20
            })
          }
         
          }).exec();
      },
      fail:err=>{
        console.log(err)
      }
    })
  },

  twoHeight(){
    var that = this
    var query = wx.createSelectorQuery()
    var width = 0
    query.select('#ditails_box').boundingClientRect(function (res) { 
      width = res.width
      that.setData({
        boxHeight:that.data.windowHeight - res.height - 60
      })
      
   }).exec();
   
   setTimeout(()=>{
    query.select('#tabLeft').boundingClientRect(function (resm) { 
        that.setData({
          tabRight:width - resm.width
        })
    }).exec();//shopimg
    
   },400)
   
  },

    //获取一级列表
  twoForArr(){
  
    http.getTypefindParentIdApi({
      data:{
        commodityTypeId:0,
        level:0,
        shopListId:this.data.forBox.shopListId
      },
      success:res=>{
        var forBox = this.data.forBox
        forBox.lable = res
        this.setData({
          forBox:forBox
        })
        
          this.getTypefindParentIdArr(forBox.lable[this.data.tabLeftIndex].id,1,forBox.shopListId)
        
        
      },
      fail:err=>{
        console.log(err)
      }
    })
  },

    //获取二级列表
  getTypefindParentIdArr(commid,level,listid){
    http.getTypefindParentIdApi({
      data:{
        commodityTypeId:commid,
        level:level,
        shopListId:listid
      },
      success:res=>{
        
        var forBox = this.data.forBox
        forBox.lable[this.data.tabLeftIndex].list = res
        //console.log(forBox)
        this.setData({
          forBox:forBox
        })
        if(this.data.tabLeft2Index != null){
          this.getTypefindParentId3Arr(forBox.lable[this.data.tabLeftIndex].list[this.data.tabLeft2Index].id,2,forBox.shopListId)
        }
          
      },
      fail:err=>{
        console.log(err)
      }
    })
  },

    //获取三级列表
  getTypefindParentId3Arr(commid,level,listid){
    http.getTypefindParentIdApi({
      data:{
        commodityTypeId:commid,
        level:level,
        shopListId:listid
      },
      success:res=>{
        //console.log(res)
        this.setData({
          forBox3:res
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
  },

  //去结算-跳转到订单
  order:function(){
    wx.navigateTo({
      url: '/pages/index/user/life_detailsOrder/life_detailsOrder'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  tabSelect(e) {
    console.log(e)
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
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