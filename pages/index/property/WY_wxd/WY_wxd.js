// pages/index/WY_wxd/WY_wxd.js
import http from '../../../../utils/api'
import util from '../../../../utils/util'
import verif from '../../../../utils/verification'
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    CustomBar:String,
    windowHeight:String,
    wHeight:String
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tCustomBar:app.globalData.CustomBar+60,
    pCustomBar:app.globalData.CustomBar+30,
    TabCur: 1,
    scrollLeft: 0 ,
    dateC: '2020-1-1',
    date0:'',
    shows: false,
    tabList1:[
      {id:0,tname:'全部'},
      {id:1,tname:'待审核'},
      // {id:2,tname:'已审核'},
      {id:3,tname:'维修中'},
      {id:4,tname:'完成'},
      {id:5,tname:'已确认'},
      {id:6,tname:'已拒绝'},
    ],
    tabList2:[
      {id:7,tname:'全部'},
       {id:8,tname:'待审核'},
       {id:9,tname:'维修中'},
      {id:10,tname:'维修完成'},
      {id:11,tname:'已完成'}
    ],
    curHdIndex:0,
    curHdIndex1:7,
    rows0:[],
    rows1:[],
    rows2:[],
    rows3:[],
    rows4:[],
    rows5:[],
    rows6:[],
    rows7:[],
    rows8:[],
    rows9:[],
    rows10:[],
    rows11:[],
    wyUser:{},
    listpropertyList:[],
    pdItem:{},
    ddItem:{},
    jdSreing:""
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 结果记录显示 隐藏
  Jgjlshow:function(){
    // console.log(2);
      var that = this;
      var sh = that.data.shows;
      that.setData({
        shows: !sh
      })
  },

  // tab切换
  tab: function (e) {
    //console.log(e)
    if(this.data.wyUser.roleId == "c9239296-0f3f-4b19-803c-f8050eabe863"){
      this.setData({
        curHdIndex:e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
    }else if(this.data.wyUser.roleId == "dab53080-0871-4b5f-862b-f5ad1c79c585"){
      this.setData({
        curHdIndex1:e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
    }
    
    //console.log(e);
  },  
  tab1: function (e) {
    //var dataId = e.currentTarget.dataset.id;
    var dataId = e.currentTarget.id;
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr1: obj
    })
    //console.log(e);
  }, 
  DateChange(e) {
    //console.log(e)
    this.setData({
      date0: e.detail.value
    })
    this.wxdArr()
  },
  getAddInfo(){
    this.xgArr()
  },
  wxdArr(){
    wx.showLoading({
      title: '拼命加载中',
    })
   // console.log(this.data.date0)
    if(wx.getStorageSync('wyUser').roleId == "c9239296-0f3f-4b19-803c-f8050eabe863"){
      http.listpagerepairApi({
        data:{
          stateTime:this.data.date0
        },
        success:res=>{
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").falseClick()
            },
          })
          this.setData({ 
            rows0:res
          })
          //console.log(res)
          var rows1 = this.data.rows1
          var rows2 = this.data.rows2
          var rows3 = this.data.rows3
          var rows4 = this.data.rows4
          var rows5 = this.data.rows5
          var rows6 = this.data.rows6
          var data = res
          for(var i in data){
            if(data[i].state == 1){
              rows1.push(data[i])
              this.setData({
                rows1: rows1
              })
            }else if(data[i].state == 2||data[i].state == 3){

              //console.log(data[i])
              rows2.push(data[i])
              this.setData({
                rows2: rows2
              })
            }else if(data[i].state == 4){
              rows4.push(data[i])
              this.setData({
                rows4: rows4
              })
            }else if(data[i].state == 5){
              rows5.push(data[i])
              this.setData({
                rows5: rows5
              })
            }else if(data[i].state == 6){
              rows6.push(data[i])
              this.setData({
                rows6: rows6
              })
            }
          }
        },
        fail:err=>{
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").trueClick()
            },
          })
        }
      })
    }else{
      http.selfListApi({
        data:{
          userId:wx.getStorageSync('user').userId,
          stateTime:this.data.date0
        },
        success:res=>{
          //console.log(res)
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").falseClick()
            },
          })
          this.setData({ 
            rows7:res.data.repairList
          })
    

          var rows8 = this.data.rows8
          var rows9 = this.data.rows9
          var rows10 = this.data.rows10
          var rows11 = this.data.rows11
          
          var data = res.data.repairList
          for(var i in data){
            if(data[i].state == 1){
              rows8.push(data[i])
              this.setData({
                rows8: rows8
              })
            }else if(data[i].state == 2||data[i].state == 3){
              rows9.push(data[i])
              this.setData({
                rows9: rows9
              })
            }else if(data[i].state == 4){
              rows10.push(data[i])
              this.setData({
                rows10: rows10
              })
            }else if(data[i].state == 5){
              rows11.push(data[i])
              this.setData({
                rows11: rows11
              })
            }
            
          }
        },
        fail:err=>{
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").trueClick()
            },
          })
        }
      })
    }
    
  },
  listpropertyArr(){
    http.listpropertyApi({
      success:res=>{
        this.setData({
          listpropertyList:res
        })
        //console.log(res)
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  getUserInfo: function (e) {
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showModal(e) {
    //console.log(e)
    if(this.data.wyUser.roleId == "c9239296-0f3f-4b19-803c-f8050eabe863"){
      this.setData({
        modalName: e.currentTarget.dataset.target,
        ddItem:e.currentTarget.dataset.item
      })
    }else{
      
      http.updaterepairApi({
        data:{
          repairId:e.currentTarget.dataset.item.repairId,
          assignPeopleId:wx.getStorageSync('wxUser').id,
          assignPeopleName:wx.getStorageSync('wxUser').name,
          propertyPeopleId:wx.getStorageSync('wxUser').id,
          propertyPeopleName:wx.getStorageSync('wxUser').name
        },
        success:res=>{
          //console.log(res)
          if(res.code == 200){
            verif.tips("接单成功")
            
          }else{
            verif.tips("接单失败")
          }
          setTimeout(()=>{
            this.wxdArr()
          },1000)
          
        },
        fail:err=>{
          console.log(err)
        }
      })
    }
    
  },
  wxwcClick(e){
    // console.log(util.formatTime1(new Date))
    // console.log(e)
    verif.tips("请拍照上传维修完成图片")
    setTimeout(()=>{
      var imgs=verif.imgClick()
      imgs.then(res=>{
          
         //console.log(res.imgs)
         http.confirmEndApi({
          data:{
            repairId:e.currentTarget.dataset.item.repairId,
            endTime:util.formatTime1(new Date),
            result:res.imgs
          },
          success:resa=>{
           // console.log(resa)
            if(resa.code == 200){
              verif.tips("成功")
            }else{
              verif.tips("失败，请稍后重新尝试")
            }
            setTimeout(()=>{
              this.wxdArr()
            },800)
          },
          fail:err=>{
            console.log(err)
          }
         })
        
      })
    },2000)
    
  },
  showModal1(e) {
    
    this.setData({
      modalName1: e.currentTarget.dataset.target,
      pdItem:e.currentTarget.dataset.item
    })
    //console.log(this.data.pdItem)
  },
  showModal2(e) {
    
    this.setData({
      modalName2: e.currentTarget.dataset.target,
      ddItem:e.currentTarget.dataset.item
    })
    //console.log(this.data.pdItem)
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  hideModals(e) {
    this.setData({
      modalName1: null
    })
  },
  jdInput(e){
   // console.log(e)
    this.setData({
      jdSreing:e.detail.value
    })
  },
  hideModal2(){
    this.setData({
      modalName2: null,
      jdSreing:""
    })
  },
  jdClick(){
    if(this.data.jdSreing == ""){
      verif.tips("请输入拒单理由")
    }else{
      http.schedulingApi({
        data:{
          repairId:this.data.ddItem.repairId,
          refuseReason:this.data.jdSreing
        },
        success:res=>{
          //console.log(res)
          if(res.code == 200){
            verif.tips("拒单成功")
          }else{
            verif.tips("拒单失败")
          }
          this.hideModal2()
          this.wxdArr()
        },
        fail:err=>{
          console.log(err)
        }
      })
    }
    
  },
  tabSelect(e) {
   // console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  pdClick(){
    // console.log(this.data.ddItem)
    // console.log(this.data.pdItem)
    // console.log(wx.getStorageSync('wxUser'))
    http.updaterepairApi({
      data:{
        repairId:this.data.ddItem.repairId,
        assignPeopleId:this.data.pdItem.userId,
        assignPeopleName:this.data.pdItem.name,
        propertyPeopleId:wx.getStorageSync('wxUser').id,
        propertyPeopleName:wx.getStorageSync('wxUser').name
      },
      success:res=>{
        //console.log(res)
        if(res.code == 200){
          verif.tips("派单成功")
          
        }else{
          verif.tips("派单失败")
        }
        this.hideModal()
        this.hideModals()
        this.wxdArr()
      },
      fail:err=>{
        console.log(err)
      }
    })
  },

  },
 
  /*组件生命周期*/ 
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {
      
      //console.log(util.formatTime1(new Date).split(' ')[0])
      
    },
    
    //在组件实例进入页面节点树时执行
    attached() { 
   
    },
    //在组件在视图层布局完成后执行
    ready() {
      this.setData({
        date0:util.formatTime1(new Date).split(' ')[0]
      })
      this.setData({
        wyUser:wx.getStorageSync('wyUser')
      })
      this.wxdArr()
      this.listpropertyArr()
    },
 
    //在组件实例被移动到节点树另一个位置时执行
    moved() {

    },
    //在组件实例被从页面节点树移除时执行
    detached() {
  
    },
    //每当组件方法抛出错误时执行
    error() {

    },
    /*组件所在页面的生命周期 */
   
   
  },
  pageLifetimes: {
    show: function () {

      // 页面被展示
      
    },
    hide: function () {
      // 页面被隐藏

    },
    resize: function (size) {
      // 页面尺寸变化
 
    }
  }
 
})
