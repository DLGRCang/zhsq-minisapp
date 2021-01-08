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
    tanch:false,
    tupian:true,
    anniu:[
      {id:0,name:'蓝牙开门',xz:false},
      {id:1,name:'一键开门',xz:true},
      {id:2,name:'二维码开门',xz:false}
    ],
    xzId:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    djqiehuan(e){
      //console.log(e.currentTarget.dataset.id)
      var anniu = this.data.anniu
      for(var i in anniu){
        if(anniu[i].id == e.currentTarget.dataset.id){
          anniu[i].xz = true
        }else{
          anniu[i].xz = false
        }
      }
      
      this.setData({
        xzId:e.currentTarget.dataset.id,
        anniu:anniu
      })
    },
    tcClick(){
      this.setData({
        tanch:true
      })
      setTimeout(()=>{
        if(this.data.tupian){
          this.setData({
            tupian:false
          })
        }else{
          this.setData({
            tupian:true
          })
        }
        setTimeout(()=>{
          this.setData({
            tanch:false
          })
        },500)
      },500)
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
