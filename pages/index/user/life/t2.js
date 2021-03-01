import http from '../../../../utils/api'
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    dataTab:[
      {label:"全部",value:0}
    ],
    TabCur:0,
    scrollLeft:0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://yiqi.sucstep.com:9000/fileService/downloadFTP/private/1dd78dfb78cf48479cdc3680a1bbb063',
      name:'康师傅香菇面',
      price:'2.5'
    }, {
      id: 1,
        type: 'image',
        url: 'http://yiqi.sucstep.com:9000/fileService/downloadFTP/private/6b8bc699cd4d4e47b10279323730fd8c',
      name:'笨鸡蛋',
      price:'5.5'
    }, {
      id: 2,
      type: 'image',
      url: 'http://yiqi.sucstep.com:9000/fileService/downloadFTP/private/9436263f18384596978b528c75b8352b',
      name:'美汁源果粒橙',
      price:'10'
    }, {
      id: 3,
      type: 'image',
      url: 'http://yiqi.sucstep.com:9000/fileService/downloadFTP/private/59c7a182d87748738dfdcbf102170a3e',
      name:'凤爪',
      price:'7',
    }],
    cur:1,
      type:0,
      rows:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabSelect(e) {
      this.setData({
        type:e.currentTarget.dataset.ids,
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
      this.listpageshoplisArr()
    },
   // 搜索页面跳转
  Search:function(){
    wx.navigateTo({
      url: '/pages/index/business/Search/Search'
    })
  },
  // 生活跳转详情页面
  life_details:function(e){
    //console.log(e)
    wx.navigateTo({
      url: '/pages/index/user/life_details/life_details?item='+JSON.stringify(e.currentTarget.dataset.item)
    })
  },
  listpageshoplisArr(){

    http.listpageshoplisApi({
      data:{
        type:this.data.type,
        page:this.data.cur,
        villageid:wx.getStorageSync('xzvillage')[0].villageId,
        number:0
      },
      success:res=>{
        console.log(res)
        this.setData({
          rows:res.rows
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  getGoodsCategoryTreeByOneArr(){
    http.getGoodsCategoryTreeByOneApi({
      data:{
        level:0
      },
      success:res=>{
      //  console.log(res)
        var dataTab = this.data.dataTab
        for(var i in res){
          dataTab.push(res[i])

        }
       
        this.setData({
          dataTab:dataTab
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
  }
  },
 
  /*组件生命周期*/ 
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {
  
     this.listpageshoplisArr()
      this.getGoodsCategoryTreeByOneArr()
    },
    
    //在组件实例进入页面节点树时执行
    attached() { 
   
    },
    //在组件在视图层布局完成后执行
    ready() {

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
