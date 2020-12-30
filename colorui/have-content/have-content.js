// colorui/have-content/have-content.js
const app = getApp()

Component({
  //一些组件选项
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  //组件的对外属性，属性设置中可包含三个字段,type 表示属性类型、 value 表示属性初始值、 observer 表示属性值被更改时的响应函数    
  properties: {

  },
  //组件的内部数据，和 properties 一同用于组件的模版渲染
  data:{
    windowHeight:app.globalData.windowHeight,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    fudong:false,
    shuaxin:false
  },

  methods: {
    trueClick(){
     // console.log('aaa')
     setTimeout(()=>{
      this.setData({
        shuaxin:false
      })
    },1000)
      this.setData({
        fudong:true
      })
    },
    falseClick(){
      this.setData({
        fudong:false
      })
    },
    addInfo(){
      setTimeout(()=>{
        this.setData({
          shuaxin:true
        })
      },500)
      
      this.triggerEvent('addInfo')
    }
  },
  // 组件生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function(){},
  moved: function(){},
  detached: function(){},

})