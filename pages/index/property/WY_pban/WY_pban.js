// pages/index/WY_pban/WY_pban.js
import verif from '../../../../utils/verification'
import util from '../../../../utils/util'
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
    dateT: '',
    dateC:'2020-12-25',
    names:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

    DateChange(e) {
      this.setData({
        dateT: e.detail.value
      })
    },
  
    qhjiaose(){
      if(verif.checkLogin()){
        wx.navigateTo({
          url: '/pages/index/UserSelection/UserSelection'
        })
      }
      
    },

    pbArr(){
      wx.request({
        url: 'http://127.0.0.1:8083/zhsq/api/arrange/listpagearrange', // 就是拼接上前缀,此接口域名是开放接口，可访问
        method: 'get', // 判断请求类型，除了值等于'post'外，其余值均视作get 其他的请求类型也可以自己加上的
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          console.log(res)
        },
        fail(err) {
          console.log(err)
        }
      })
    }

  },
 
  /*组件生命周期*/ 
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {
     // 获取用户信息
      this.pbArr()
   
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

      // console.log(util.formatTime1(new Date).split(' ')[0])
      this.setData({
        dateT:util.formatTime1(new Date).split(' ')[0],
        time:util.formatTime1(new Date).split(' ')[1]
      })
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
