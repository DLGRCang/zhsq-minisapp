// pages/index/WY_ydcx/WY_ydcx.js
import util from '../../../../utils/util'
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    CustomBar:String
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    wyUser:null,
    date: '',
    // tab 切换
    tabArr: {
     curHdIndex: 0,
     curBdIndex: 0
   }, 
   xgList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

    fabu(){
      wx.navigateTo({
        url: '/pages/index/property/MY_ydxcCreate/MY_ydxcCreate'
      })
    },
    xuncha(e){
      var that = this
      wx.scanCode({
        onlyFromCamera: true,
        success (res) {
          
          http.updateStateApi({
            data:{
              propertyPatrollingPlanId:e.currentTarget.dataset.id,
              scanCodeTime:util.formatTime(new Date),
              scanCodeContent:res.result
            },
            success:res=>{
              console.log(res)
              if(res.code == 200){
                verif.tips("打卡成功")
                setTimeout(()=>{
                  that.xgArr()
                },800)
               
              }else{
                verif.tips(res.message)
              }
            },
            fail:err=>{
              console.log(err)
            }
          })
        }
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
     DateChange(e) {
       this.setData({
         date: e.detail.value
       })
       this.xgArr()
      },
      xgArr(){
        if(wx.getStorageSync('wyUser').roleId == "c9239296-0f3f-4b19-803c-f8050eabe863"){
          http.listpropertypatrollingplanApi({
            data:{
              curDate:this.data.date
            },
            success:res=>{
              this.setData({
                xgList:res
              })
            }
          })
        }else if(wx.getStorageSync('wyUser').roleId == "c54edb4e-9668-49c9-82ef-a417604d2b29"){
          http.selfPlanApi({
            data:{
              unifiedUserId:wx.getStorageSync('wxUser').id,
              curDate:this.data.date
            },
            success:res=>{
               console.log(res)
              this.setData({
                xgList:res.data.planList
              })
            }
          })
        }
        
      },
     
  },
 
  /*组件生命周期*/ 
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {
     // 获取用户信息

   
    },
    
    //在组件实例进入页面节点树时执行
    attached() { 
   
    },
    //在组件在视图层布局完成后执行
    ready() {
      this.setData({
        wyUser:wx.getStorageSync('wyUser')
      })
      //console.log(wx.getStorageSync('wxUser'))
      if(wx.getStorageSync('wyUser').roleId == "c9239296-0f3f-4b19-803c-f8050eabe863"){
        this.setData({
          date:util.formatTime1(new Date).split(' ')[0]
        })
      }else if(wx.getStorageSync('wyUser').roleId == "c54edb4e-9668-49c9-82ef-a417604d2b29"){
        this.setData({
          date:util.formatTime1(new Date).split(' ')[0],
        })
      }
      this.xgArr()
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
