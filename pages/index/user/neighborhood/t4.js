// pages/index/t4/t4.js
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
import util from '../../../../utils/util'
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    botHeight:String
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
    imgUrl: app.globalData.imgUrl,
    rows:[],

    forF4:[],
    // 邻里圈分类功能tab
    TabCur: 0,
    TabCur1:0,
    scrollLeft:0,
    scrollLeft1:0,
    bqList:[
      {dictionariesName:'全部',dictionariesId:null}
    ],
    bqId:null,
    tabTrue:false,

    zhezhao:false,
    plkuang:null,
    bqList1:[],
    animation:'',
    textPadding:'padding:15rpx',
    textIf:true,
    InputBottom:0,
    InputBottomFalse:false,
    plSize:'',
    dzIndex:null,
    zplId:'',
    zplCur:'',
    xpluserids:'',
    xplName:'',
    xplIds:'',
    plng:null,
    contentText:'',
    indexCon:null,
    removeId:null,
    removeIdIndex:null,
    page:1
  },


  /**
   * 组件的方法列表
   */
  methods: {
    removeClickin(){
      http.removecommentApi({
        data:{
          ids:this.data.removeId
        },
        success:res=>{
          //console.log(res)
          var rows = this.data.rows
          if (Object.keys(res).length === 0) {
            rows.splice(this.data.removeIdIndex,1)
            verif.tips("删除成功")
            this.setData({
              rows:rows,
              modalName: null
            })
          }else{
            verif.tips("删除失败")
          }
        
        }
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    removeCLick(e) {
      //console.log(e)
      this.setData({
        modalName: e.currentTarget.dataset.target,
        removeId:e.currentTarget.dataset.id,
        removeIdIndex:e.currentTarget.dataset.i
      })
    },
    plnrshuru(e){
      this.setData({
        contentText:e.detail.value
      })
    },
    dianji(e){
     // console.log(e)
      this.setData({
        indexCon:e.currentTarget.dataset.i,
        plSize:'填写评论内容',
        zplId:e.currentTarget.dataset.id,
        zplCur:e.currentTarget.dataset.cur,
        plng:0,
        InputBottomFalse:true
      })
    },

    InputFocus(e) {
      //console.log(e)
      this.setData({
        InputBottom: e.detail.height
      })
      
    },
    inputBlur(){
      this.setData({
        InputBottomFalse:false,
        InputBottom: 0
      })
    },
    inputClick(e){
 
      var i = e.currentTarget.dataset.i
      var rows = this.data.rows
      rows[i].contentpl = e.detail.value
      if(e.detail.value == ''){
        this.setData({
          textPadding:'padding:15rpx'
        })
      }else{
        this.setData({
          textPadding:'padding:0 15rpx'
        })
      }
      this.setData({
        rows:rows
      })
    },


    plzplClick(e){
   //   console.log(e)
      var cont = '回复'+e.currentTarget.dataset.items.commentPeopleName

      this.setData({
        indexCon:e.currentTarget.dataset.i,
        plSize:cont,
        zplId:e.currentTarget.dataset.id,
        zplCur:e.currentTarget.dataset.cur,
        xpluserids:e.currentTarget.dataset.items.commentPeopleId,
        xplName:e.currentTarget.dataset.items.commentPeopleName,
        xplIds:e.currentTarget.dataset.items.commentId,
        plng:1,
        InputBottomFalse:true
      })

      
    },
          // 邻里圈分类功能tab
          
  tabSelect(e) {
    //console.log(e)
    this.setData({
      TabCur1:0,
      bqList1:[],
      TabCur: e.currentTarget.dataset.i,
      scrollLeft: (e.currentTarget.dataset.i-1)*60,
    })
    if( e.currentTarget.dataset.i == 0){
      this.setData({
        bqId:e.currentTarget.dataset.id,
        rows:[]
      })
      this.llqList()
    }else{
      this.setData({
        rows:[]
      })
      this.llqbqArr1(e.currentTarget.dataset.code)
    }

  },
  llqbqArr1(code){
    wx.showLoading({
      title: '拼命加载中',
    })
    http.llqbqApi1({
      data:{
        code:code
      },
      success:res=>{
        //console.log(res)
        var bqList1 = this.data.bqList1
        for(var i in res){
          bqList1.push(res[i])
        }
       //console.log(bqList1)
        
        wx.hideLoading({
          success: (res) => {
            this.selectComponent("#haveTrue").falseClick()
          },
        })
        this.setData({
          bqList1:bqList1,
          bqId:res[0].dictionariesId,
          rows:[]
        })
        this.llqList()
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
  tabSelect1(e) {
    
    this.setData({
      
      bqId:e.currentTarget.dataset.id,
      TabCur1: e.currentTarget.dataset.i,
      scrollLeft1: (e.currentTarget.dataset.i-1)*60,
      rows:[]
    })

    this.llqList()
  },
    // 发布
    fabu:function(){
      if(verif.checkLogin()){
        if(wx.getStorageSync('xzvillage').houseList.length == 0){
          verif.tips("您不是小区业主不可发布内容")
        }else{
          wx.navigateTo({
            url: '/pages/index/user/Llq_pub/Llq_pub'
          })
        }
          
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

    dzClick(e){
      var that = this
    
      var rows = this.data.rows
      var i = e.currentTarget.dataset.i
      
      http.goodnumberApi({
        data:{
          goodId:e.currentTarget.dataset.id,
          goodPeopleId:wx.getStorageSync('wxUser').id,
          goodPeopleName:wx.getStorageSync('wxUser').name,
          goodTime:util.formatTime(new Date()),
          goodCommentId:e.currentTarget.dataset.id
        },
        success:res=>{
          if(res.code == 200){
              if(rows[i].goodState == '1'){
                rows[i].goodState = '0'
                rows[i].goodNumber--
              }else{
                
                rows[i].goodState = '1'
                rows[i].goodNumber++
                that.setData({
                  dzIndex: i
                })
                setTimeout(function() {
                  that.setData({
                    dzIndex: null
                  })
                }, 800)
              }
            this.setData({
              rows:rows
            })
          }
        },
        fail:err=>{
          console.log(err)
        }
      })
    },  
    plnrdzClick(e){

      var rows = this.data.rows
      
      http.goodnumberApi({
        data:{
          goodId:e.currentTarget.dataset.id,
          goodPeopleId:wx.getStorageSync('wxUser').id,
          goodPeopleName:wx.getStorageSync('wxUser').name,
          goodTime:util.formatTime(new Date()),
          goodCommentId:e.currentTarget.dataset.ids
        },
        success:res=>{
          console.log(res)
          if(rows[e.currentTarget.dataset.i].pinglunRows[e.currentTarget.dataset.in].goodState == '1'){
            rows[e.currentTarget.dataset.i].pinglunRows[e.currentTarget.dataset.in].goodState = 0
          }else{
            rows[e.currentTarget.dataset.i].pinglunRows[e.currentTarget.dataset.in].goodState = 1
          }
          
          this.setData({
            rows:rows
          })
        },
        fail:err=>{
          console.log(err)
        }
      })
    },
    scClick(e){
      var i = e.currentTarget.dataset.i
      var rows = this.data.rows
      http.collectionrecordApi({
        data:{
          collectionId:e.currentTarget.dataset.id,
          collectionPeopleId:wx.getStorageSync('wxUser').id,
          collectionResources:1
        },
        success:res=>{
          //console.log(res)
          if(res.code == 200){
            if(rows[i].collectionState == null||rows[i].collectionState == 0){
              rows[i].collectionState = 1
            }else{
              rows[i].collectionState = 0
            }
            this.setData({
              rows:rows
            })
          }
        },
        fail:err=>{
          console.log(err)
        }
      })
      
      
    },
    plClick(e){
      var i = e.currentTarget.dataset.i
      var rows = this.data.rows
      
      http.getlistCommentByMessageIdApi({
        data:{
          goodpeopleId:wx.getStorageSync('wxUser').id,
          commId:e.currentTarget.dataset.id,
          curPage:e.currentTarget.dataset.cur
        },
        success:res=>{
          console.log(res)
          rows[i].pinglunRows = res.rows
          if(res.rows.length != 0){
            if(rows[i].pinglun){
              rows[i].pinglun = false
            }else{
              rows[i].pinglun = true
            }
          }else{
            verif.tips('暂无评论，快来抢沙发吧!')
          }
          
          this.setData({
            rows:rows
          })
        },
        fail:err=>{
          console.log(err)
        },
        complete(lete) {
  
          console.log(lete)
        }
      })

      
    },
    sxt4Click(){
      console.log('sssss')
    },
    llqList(){

      wx.showLoading({
        title: '拼命加载中',
      })
      http.xinwenApi({
        data:{
          userId:wx.getStorageSync('wxUser').id,
          villageId:wx.getStorageSync('xzvillage').village.villageId,
          page:this.data.page
        },
        success:res=>{
         //console.log(res)
          var rows = res.rows
          var message1 = ''
          
          for(var i in rows){
  
            rows[i].pinglun = false
            rows[i].pinglunRows = []
            rows[i].pinglunCur = 1
            rows[i].contentpl = ''
            rows[i].textIf = true
 
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
         // console.log(rows)
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
          //console.log(res)
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
    },
    plsClick(e){

      var i = this.data.indexCon
      if(this.data.contentText == ''){
        verif.tips('请填写回复内容')
      }else{
        http.savecommentApi({
          data:{
            commId:this.data.zplId,
            contentReview:this.data.contentText,
            commentTime:util.formatTime(new Date()),
            commentPeopleId:wx.getStorageSync('wxUser').id,
            commentPeopleName:wx.getStorageSync('wxUser').name,
            beCommentedId:this.data.xplIds,
            beCommentPeopleId:this.data.xpluserids,
            beCommentPeopleName:this.data.xplName
          },
          success:res=>{
            //console.log(res)
            verif.tips('评论成功')
            var rows = this.data.rows
            http.getlistCommentByMessageIdApi({
              data:{
                commId:this.data.zplId,
                curPage:this.data.zplCur
              },
              success:res=>{
                //console.log(res)
                rows[i].pinglunRows = res.rows
                rows[i].commentNumber ++
                this.setData({
                  contentText:'',
                  rows:rows
                })
              },
              fail:err=>{
                console.log(err)
              },
              complete(lete) {
        
                console.log(lete)
              }
            })
          },
          fail:err=>{
            console.log(err)
          }
        })
      }
    },
    zhuPlClick(e){
      //console.log(wx.getStorageSync('wxUser'))
      var i = this.data.indexCon
      if(this.data.contentText == ''){
        verif.tips('请填写评论内容')
      }else{
        http.savecommentApi({
          data:{
            commId:this.data.zplId,
            contentReview:this.data.contentText,
            commentTime:util.formatTime(new Date()),
            commentPeopleId:wx.getStorageSync('wxUser').id,
            commentPeopleName:wx.getStorageSync('wxUser').name,
            beCommentedId:0,
            beCommentPeopleId:0,
            beCommentPeopleName:0
          },
          success:res=>{
            verif.tips('评论成功')
            var rows = this.data.rows
            http.getlistCommentByMessageIdApi({
              data:{
                commId:this.data.zplId,
                curPage:this.data.zplCur
              },
              success:res=>{
                //console.log(res)
                rows[i].pinglunRows = res.rows
                rows[i].contentpl = ""
                rows[i].commentNumber ++
                this.setData({
                  contentText:'',
                  rows:rows
                })
              },
              fail:err=>{
                console.log(err)
              },
              complete(lete) {
        
                console.log(lete)
              }
            })
          },
          fail:err=>{
            console.log(err)
          }
        })
      }
    },
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