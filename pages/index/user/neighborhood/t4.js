// pages/index/t4/t4.js
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    isStar: false, // 默认没有收藏
    isShare: true, // 默认有分享
    isShare: false, // 默认没有赞

    rows:[],

    forF4:[],
    // 邻里圈分类功能tab
    TabCur: 0,
    scrollLeft:0,
    bqList:[
      {dictionariesName:'全部',dictionariesId:null}
    ],
    bqId:null,
    tabTrue:false
  },


  /**
   * 组件的方法列表
   */
  methods: {
          // 邻里圈分类功能tab
  tabSelect(e) {
    
    this.setData({
      bqId:e.currentTarget.dataset.id,
      TabCur: e.currentTarget.dataset.i,
      scrollLeft: (e.currentTarget.dataset.i-1)*60,
      rows:[]
    })

    this.llqList()
  },
    // 发布
    fabu:function(){
      if(verif.checkLogin()){
          wx.navigateTo({
            url: '/pages/index/user/Llq_pub/Llq_pub'
          })
      }
    },

    lljClick:function(e){
 
      wx.navigateTo({
        url: '/pages/index/user/neighborhood-details/llq_xq?rows='+JSON.stringify(e.currentTarget.dataset.rows)
      })
    },
    // 点击收藏
    toStar () {
      var bol = this.data.isStar; // 获取状态
      this.setData({
        isStar:!bol // 改变状态
      })
      },
    // 点击分享
    toShare () {
      var bol = this.data.isShare; // 获取状态
      this.setData({
        isShare:!bol // 改变状态
      })
      },
    // 点赞/取消点赞
    toZan () {
      var bol = this.data.isZan; // 获取状态
      this.setData({
        isZan:!bol // 改变状态
      })
    },
    quanwen(e){
      //console.log(e.currentTarget.dataset.i)
      var rows = this.data.rows
      rows[e.currentTarget.dataset.i].pantrue = false
      this.setData({
        rows:rows
      })
    },
    squanwen(e){
      //console.log(e.currentTarget.dataset.i)
      var rows = this.data.rows
      rows[e.currentTarget.dataset.i].pantrue = true
      this.setData({
        rows:rows
      })
    },
    llqList(){
      wx.showLoading({
        title: '拼命加载中',
      })
      http.xinwenApi({
      
        success:res=>{
          
          //console.log(res)
          var rows = res.rows
          var message1 = ''
          
          for(var i in rows){
            rows[i].img = rows[i].file.split(',')
            if(rows[i].message.length > 100){
              message1 = rows[i].message.slice(0,100)
              
              rows[i].message1 = message1+'...'
              rows[i].pantrue = true
              rows[i].pantrue1 = true
            }else{
              rows[i].pantrue = false
              rows[i].pantrue1 = false
            }
            
          }
          //console.log(rows)
          if(this.data.bqId == null){
            this.setData({
              rows:rows
            })
          }else{
            var rows1 = []
         
            for(var i in rows){
              if(rows[i].type == this.data.bqId){
                rows1.push(rows[i])
              }
            }
            this.setData({
              rows:rows1
            })
          }
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").falseClick()
            },
          })
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
    llqbqArr(){
      wx.showLoading({
        title: '拼命加载中',
      })
      http.llqbqApi({
        success:res=>{
         
          var bqList = this.data.bqList
          for(var i in res){
            bqList.push(res[i])
          }
          //console.log(bqList)
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").falseClick()
            },
          })
          this.setData({
            bqList:bqList
          })
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
    scry(e){
      console.log(e)
    }
  },
  getAddInfo(){
    this.llqList()
      this.llqbqArr()
  },
  /*组件生命周期*/ 
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {
    },
    
    //在组件实例进入页面节点树时执行
    attached() { 
      
    },
    //在组件在视图层布局完成后执行
    ready() {
      this.llqList()
      this.llqbqArr()
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
   
  }
 
})