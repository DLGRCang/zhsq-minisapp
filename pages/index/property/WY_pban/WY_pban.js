// pages/index/WY_pban/WY_pban.js
import verif from '../../../../utils/verification'
import util from '../../../../utils/util'
import http from '../../../../utils/api'
const app = getApp()
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
    windowHeight:app.globalData.windowHeight,
    dateT: '',
    dateC:'2020-12-25',
    names:'',
    page:1,
    rows:[],
    botTrue:true,
    isLoad:false
  },

  /**
   * 组件的方法列表
   */
  methods: {

    DateChange(e) {
      this.setData({
        page:1,
        rows:[],
        dateT: e.detail.value
      })
      //console.log('aaa')
      this.pbArr()
    },
  
    qhjiaose(){
      if(verif.checkLogin()){
        wx.navigateTo({
          url: '/pages/index/UserSelection/UserSelection'
        })
      }
      
    },
    getAddInfo(){
      this.pbArr()
    },
    pbArr(){
      wx.showLoading({
        title: '拼命加载中',
      })
      //console.log(this.data.dateT)
      http.listArrangeDataApi({
        data:{
          page:this.data.page,
          timeDate:this.data.dateT
        },
        success:res=>{
          //console.log(res)
          
          var rows = this.data.rows
          var data = res.rows

          if(data.length == 0){
            this.setData({
              isLoad:true
            })
          }else{

            this.setData({
              isLoad:false,
              botTrue:true
            })
            for(var i in data){
              data[i].namesA = data[i].names.split(',')
              var namesB = []
              var namesC = []
              for(var m in data[i].namesA){
                namesB.push(data[i].namesA[m].split(' ')[0])
                namesC.push(data[i].namesA[m].split(' ')[1])
                data[i].namesB = namesB
                data[i].namesC = namesC
              }
              rows.push(data[i])
            }
          }
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").falseClick()
            },
          })
          //console.log(rows)
          this.setData({
            rows:rows
          })
        },
        fail:err=>{
          wx.hideLoading({
            success: (res) => {
              this.selectComponent("#haveTrue").trueClick()
            },
          })
        }
      })
 
    },
    botClick(){
      if(this.data.botTrue){
        this.setData({
          page:this.data.page + 1,
          botTrue:false
        })
        setTimeout(()=>{
          this.pbArr()
        },500)
        
        console.log(this.data.page)
      }

     
    }

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
        wxUser:wx.getStorageSync('wxUser').userInfo
      })
      if(wx.getStorageSync('wyUser') == 2){
        this.setData({
          names : '物业管理人员'
        })
      }else if(wx.getStorageSync('wyUser') == 3){
        this.setData({
          names : '物业技术人员'
        })
      }

       //console.log(util.formatTime1(new Date).split(' ')[0])
      this.setData({
        dateT:util.formatTime1(new Date).split(' ')[0],
        time:util.formatTime1(new Date).split(' ')[1]
      })
      this.pbArr()
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
