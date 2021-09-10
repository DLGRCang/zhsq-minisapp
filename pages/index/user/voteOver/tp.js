const app = getApp();
import http from '../../../../utils/api'
import verif from '../../../../utils/verification'
import util from '../../../../utils/util'
Page({
  data: {
    ColorList: app.globalData.ColorList,
    color:'red',

    rows:[],
    rowsdx:null,
    tjRows:[]
  },
  onLoad(options) {
    let that = this;
    setTimeout(function() {
      that.setData({
        loading: true
      })
    }, 500)
    this.xqList(options.id)
  },
  xqList(id){
    http.tpxqApi({
      data:{
        voteId:id
      },
      success:res=>{
        //console.log(res)
            
          var rows = res
          var voteOption1 = []
          voteOption1.push(rows.voteOption.split(';'))
          rows.voteOption1 = voteOption1
        //console.log(JSON.parse(res.test))
        //console.log(rows)
        this.setData({
          rows:rows
        })
      },
      fail:err=>{
        
        console.log(err)
      }
    }),
    http.tpxqslApi({
      data:{
        voteId:id
      },
      success:res=>{
        
        this.setData({
          tjRows:res
        })
        //console.log(res)
      },
      fail:err=>{

            

        console.log(err)
      }
    })
  },

  dxClick(e){
    var x = ''
    if(e.currentTarget.dataset.indexa == 0){
      x='A'
    }else if(e.currentTarget.dataset.indexa == 1){
      x='B'
    }else if(e.currentTarget.dataset.indexa == 2){
      x='C'
    }else if(e.currentTarget.dataset.indexa == 3){
      x='D'
    }else if(e.currentTarget.dataset.indexa == 4){
      x='E'
    }else if(e.currentTarget.dataset.indexa == 5){
      x='F'
    }else if(e.currentTarget.dataset.indexa == 6){
      x='G'
    }else if(e.currentTarget.dataset.indexa == 7){
      x='H'
    }

    this.setData({
      rowsdx:x +':'+ e.currentTarget.dataset.item.split(':')[1]
    })
  },
  tpClick(e){
    var time = util.formatTime(new Date)
        if(this.data.rowsdx == null){
          verif.tips('请选择投票内容')
        }else{
          http.tpanApi({
            data:{
              voteId:e.currentTarget.dataset.id,
              votePeopleId:wx.getStorageSync('wxUser').id,
              voteTime:time,
              voteOption:this.data.rowsdx,
              votePeopleName:wx.getStorageSync('wxUser').name
            },
            success:res=>{
              console.log(res)
              if(res.code == "200"){
                    
                    verif.tips('投票成功')
              }else{
                    
                    verif.tips('请勿重复投票')
              }
              
            },
            fail:err=>{
                  
            }
          })
       
        }

  },
  getAddInfo(){
    this.onLoad()
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  SetColor(e) {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },
  SetActive(e) {
    this.setData({
      active: e.detail.value
    })
  },
  navTui(){
    wx.navigateBack({
      delta: 1
    })
  }
})