// pages/index/partyBuilding/partyBuilding.js
import http from '../../../../utils/api'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
    windowHeight:app.globalData.windowHeight,
    CustomBar: app.globalData.CustomBar,
    dataTab:[
      {id:0,content:"工作动态",code:'djgzdt',cur:1},
      {id:1,content:"党员风采",code:'dyfc',cur:1},
      {id:2,content:"志愿者服务",code:'zyzfw',cur:1},
      {id:3,content:"扶贫帮困",code:'jzfp',cur:1},
      {id:4,content:"组织生活会",code:'zzshh',cur:1},
      {id:5,content:"支部党课",code:'zbdk',cur:1},
      {id:6,content:"主题党日",code:'ztdr',cur:1},
    ],
    TabCur: 0,
    scrollLeft:0,
    panduan:'0',
    rowsList:[],
    rows4:[],
    rowsXw0:[],
    rowsXw1:[],
    rowsXw2:[],
    rowsXw3:[],
    rowsXw4:[],
    rowsXw5:[],
    rowsXw6:[],
    isLoad:false,
    botTrue:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //this.partyArr()
    this.next()
    this.saven()
  },

  saven(){
    http.listassessmentmanageApi({
      success:res=>{
        console.log(res)
        http.saveusersintegralApi({
          data:{
            userUsername:wx.getStorageSync('wxUser').id,
            userIdcard:res[0].assessmentManageId,
            userAvatar:2
          },
          success:resa=>{
            console.log(resa)
          }
        })
      }
    })
  },
  getAddInfo(){
    this.onLoad()
  },
  partyArr(){

    http.partyApi({
      success:res=>{
        //console.log(res)
        this.setData({
          rowsList:res.rows[0]
        })
        //console.log(this.data.rowsList)

      },
      fail:err=>{

        console.log(err)
      }
    })
  } ,
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  xwDetails(e){
    //console.log(e.currentTarget.dataset.item)
    var item = encodeURIComponent(JSON.stringify(e.currentTarget.dataset.item))
    wx.navigateTo({
      url: '/pages/index/user/notice-details/notice-details?item='+item
    })
  },

  tabSelect(e) {
    //console.log(e)
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    this.next()
  },
  next(v){
    var that = this
    var code = ''
    var cur = 0
    for(var i in that.data.dataTab){
      
      if(that.data.dataTab[i].id == that.data.TabCur){

        cur = that.data.dataTab[i].cur
        code = that.data.dataTab[i].code
      }
    }
    //console.log(code)

    http.newsApi({
      data:{
        code:code,
        cur:cur
      },
      success:res=>{
       //console.log(res)

      if(v){
        setTimeout(()=>{
          if(that.data.TabCur == 0){
            var rowsXw0 = that.data.rowsXw0
            //console.log(res.rows)
            if(res.rows.length == 0){
              that.setData({
                isLoad:true
              })
            }else{
              that.setData({
                botTrue:true,
                isLoad:false
              })
              for(var i in res.rows){
                rowsXw0.push(res.rows[i])
              }
            }
            that.setData({
              rowsXw0:rowsXw0
            })
          }else if(that.data.TabCur == 1){
            var rowsXw1 = that.data.rowsXw1
            if(res.rows.length == 0){
              that.setData({
                isLoad:true
              })
            }else{
              that.setData({
                botTrue:true,
                isLoad:false
              })
              for(var i in res.rows){
                rowsXw1.push(res.rows[i])
              }
            }
            that.setData({
              rowsXw1:rowsXw1
            })
          }else if(that.data.TabCur == 2){
            var rowsXw2 = that.data.rowsXw2
            if(res.rows.length == 0){
              that.setData({
                isLoad:true
              })
            }else{
              that.setData({
                botTrue:true,
                isLoad:false
              })
              for(var i in res.rows){
                rowsXw2.push(res.rows[i])
              }
            }
            that.setData({
              rowsXw2:rowsXw2
            })
          }else if(that.data.TabCur == 3){
            var rowsXw3 = that.data.rowsXw3
            if(res.rows.length == 0){
              that.setData({
                isLoad:true
              })
            }else{
              that.setData({
                botTrue:true,
                isLoad:false
              })
              for(var i in res.rows){
                rowsXw3.push(res.rows[i])
              }
            }
            that.setData({
              rowsXw3:rowsXw3
            })
          }else if(that.data.TabCur == 4){
            var rowsXw4 = that.data.rowsXw4
            if(res.rows.length == 0){
              that.setData({
                isLoad:true
              })
            }else{
              that.setData({
                botTrue:true,
                isLoad:false
              })
              for(var i in res.rows){
                rowsXw4.push(res.rows[i])
              }
            }
            that.setData({
              rowsXw4:rowsXw4
            })
          }else if(that.data.TabCur == 5){
            var rowsXw5 = that.data.rowsXw5
            if(res.rows.length == 0){
              that.setData({
                isLoad:true
              })
            }else{
              that.setData({
                botTrue:true,
                isLoad:false
              })
              for(var i in res.rows){
                rowsXw5.push(res.rows[i])
              }
            }
            that.setData({
              rowsXw5:rowsXw5
            })
          }else if(that.data.TabCur == 6){
            var rowsXw6 = that.data.rowsXw6
            if(res.rows.length == 0){
              that.setData({
                isLoad:true
              })
            }else{
              that.setData({
                botTrue:true,
                isLoad:false
              })
              for(var i in res.rows){
                rowsXw6.push(res.rows[i])
              }
            }
            that.setData({
              rowsXw6:rowsXw6
            })
          }
        },1000)
      }else{

        if(that.data.TabCur == 0&&that.data.rowsXw0.length == 0){
          var rowsXw0 = that.data.rowsXw0
          if(res.rows.length == 0){
            that.setData({
              isLoad:true
            })
          }else{
            that.setData({
              botTrue:true,
              isLoad:false
            })
            for(var i in res.rows){
              rowsXw0.push(res.rows[i])
            }
          }
          that.setData({
            rowsXw0:rowsXw0
          })
        }else if(that.data.TabCur == 1&&that.data.rowsXw1.length == 0){
          var rowsXw1 = that.data.rowsXw1
          if(res.rows.length == 0){
            that.setData({
              isLoad:true
            })
          }else{
            that.setData({
              botTrue:true,
              isLoad:false
            })
            for(var i in res.rows){
              rowsXw1.push(res.rows[i])
            }
          }
          that.setData({
            rowsXw1:rowsXw1
          })
        }else if(that.data.TabCur == 2&&that.data.rowsXw2.length == 0){
          var rowsXw2 = that.data.rowsXw2
          if(res.rows.length == 0){
            that.setData({
              isLoad:true
            })
          }else{
            that.setData({
              botTrue:true,
              isLoad:false
            })
            for(var i in res.rows){
              rowsXw2.push(res.rows[i])
            }
          }
          that.setData({
            rowsXw2:rowsXw2
          })
        }else if(that.data.TabCur == 3&&that.data.rowsXw3.length == 0){
          var rowsXw3 = that.data.rowsXw3
          if(res.rows.length == 0){
            that.setData({
              isLoad:true
            })
          }else{
            that.setData({
              botTrue:true,
              isLoad:false
            })
            for(var i in res.rows){
              rowsXw3.push(res.rows[i])
            }
          }
          that.setData({
            rowsXw3:rowsXw3
          })
        }else if(that.data.TabCur == 4&&that.data.rowsXw4.length == 0){
          var rowsXw4 = that.data.rowsXw4
          if(res.rows.length == 0){
            that.setData({
              isLoad:true
            })
          }else{
            that.setData({
              botTrue:true,
              isLoad:false
            })
            for(var i in res.rows){
              rowsXw4.push(res.rows[i])
            }
          }
          that.setData({
            rowsXw4:rowsXw4
          })
        }else if(that.data.TabCur == 5&&that.data.rowsXw5.length == 0){
          var rowsXw5 = that.data.rowsXw5
          if(res.rows.length == 0){
            that.setData({
              isLoad:true
            })
          }else{
            that.setData({
              botTrue:true,
              isLoad:false
            })
            for(var i in res.rows){
              rowsXw5.push(res.rows[i])
            }
          }
          that.setData({
            rowsXw5:rowsXw5
          })
        }else if(that.data.TabCur == 6&&that.data.rowsXw6.length == 0){
          var rowsXw6 = that.data.rowsXw6
          if(res.rows.length == 0){
            that.setData({
              isLoad:true
            })
          }else{
            that.setData({
              botTrue:true,
              isLoad:false
            })
            for(var i in res.rows){
              rowsXw6.push(res.rows[i])
            }
          }
          that.setData({
            rowsXw6:rowsXw6
          })
        }
      }
      },
      fail:err=>{
 
        console.log(err)
      }
    })

  },

  cbott(e){
    //console.log(e)
    if(this.data.botTrue){
    var dataTab = this.data.dataTab
    for(var i in dataTab){
      if(dataTab[i].id == this.data.TabCur){
        dataTab[i].cur= dataTab[i].cur+1
      }
    }
    this.setData({
      dataTab:dataTab
    })
    //console.log(this.data.dataTab)
    var v = true
    this.next(v)
  }
  },

  xuexiList(){

    http.xxzlApi({
      success:res=>{
        this.setData({
          rows4:res
        })

        console.log(res)
      }
    })
  },
  scry(e){
   // console.log(e)
    if(this.data.rowsList.length == 0){
      if(e.detail.scrollTop > "132"){
        this.setData({
          topPos:true
        })
      }else{
        this.setData({
          topPos:false
        })
      }
    }else{
      if(e.detail.scrollTop > "305"){
        this.setData({
          topPos:true
        })
      }else{
        this.setData({
          topPos:false
        })
      }
    }
    
  },
  shequhd(){
    wx.navigateTo({
      url: '/pages/index/user/community/community'
    })
    
  },
  // 学习园地跳转
  studyyd(){
    wx.navigateTo({
      url: '/pages/index/user/Studyyd/Studyyd'
    })
  },
  // 社区党支部跳转
  studysqdzb(){
    wx.navigateTo({
      url: '/pages/index/user/partyBranch/partyBranch'
    })
  },
  changdifw(){
    wx.navigateTo({
      url: '/pages/index/user/field/cdfw'
    })
  },
  dangqunfw(){
    wx.navigateTo({
      url: '/pages/index/user/partyMasses/dqfw'
    })
  },
  djdt(){
    wx.navigateTo({
      url: '/pages/index/user/parrtyMap/parrtyMap'
    })
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
  onReachBottom: function (e) {
  
  },
  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})