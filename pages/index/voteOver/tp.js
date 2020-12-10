const app = getApp();
import http from '../../../utils/api'
import verif from '../../../utils/verification'
import util from '../../../utils/util'
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
      }
    })
  },

  dxClick(e){
    var x = ''
    if(e.currentTarget.dataset.indexa == 0){
      x='a'
    }else if(e.currentTarget.dataset.indexa == 1){
      x='b'
    }else if(e.currentTarget.dataset.indexa == 2){
      x='c'
    }else if(e.currentTarget.dataset.indexa == 3){
      x='d'
    }else if(e.currentTarget.dataset.indexa == 4){
      x='e'
    }else if(e.currentTarget.dataset.indexa == 5){
      x='f'
    }else if(e.currentTarget.dataset.indexa == 6){
      x='g'
    }else if(e.currentTarget.dataset.indexa == 7){
      x='h'
    }

    this.setData({
      rowsdx:x +':'+ e.currentTarget.dataset.item.split(':')[1]
    })
  },
  tpClick(e){
    console.log(e)
    wx.showLoading({
      title: '拼命加载中',
    })
    var time = util.formatTime(new Date)
    
        if(this.data.rowsdx == null){
          verif.tips('请选择投票内容')
        }else{
          http.tpanApi({
            data:{
              voteId:e.currentTarget.dataset.id,
              votePeopleId:'aaa',
              voteTime:time,
              voteOption:this.data.rowsdx,
              votePeopleName:'德力'
            },
            success:res=>{
              wx.hideLoading({
                success: (res) => {
                  verif.tips('投票成功')
                },
              })
            },
            fail:err=>{

            }
          })
       
        }

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