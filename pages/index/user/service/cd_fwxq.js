import http from '../../../../utils/api'
import util from '../../../../utils/util'
import verif from '../../../../utils/verification'
Page({
  data: {
         // tab 切换
         tabArr: {
          curHdIndex: 0,
          curBdIndex: 0
        }, 
        rowsList:[],
    cardCur: 0,
    modalName:'',
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604661203084&di=1429902f0c8d780906cbc097f701cdcd&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170712%2Fdb384e2a81524e03bb62b96218aa07c3_th.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604661203081&di=ae59eb300a8f19a303b4d91fe3ca7beb&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180803%2F8fc59b76f6804cb68fd86509d9b67fea.jpeg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604661203077&di=89f53d6f8575a70822e652321c1122db&imgtype=0&src=http%3A%2F%2Fxcdfz.scdfz.org.cn%2FUpload%2Fmain%2FContentManage%2FArticle%2Fimage%2F61e5e4ceb32f40fcbca07fd6196525e8.jpeg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604661203169&di=7395c416e9fe1bc632acf66afea17cd1&imgtype=0&src=http%3A%2F%2Fpic.ibaotu.com%2Fspiders%2F360813-59c214527eee7.jpg'
    }],
   
    // timeList:[
    //   {id:0,time:"9:00-9:30",timeCss:'timeClass1'},
    //   {id:1,time:"9:30-10:00",timeCss:'timeClass1'},
    //   {id:2,time:"10:00-10:30",timeCss:'timeClass1'},
    //   {id:3,time:"10:30-11:00",timeCss:'timeClass1'},
    //   {id:4,time:"11:00-11:30",timeCss:'timeClass1'},
    //   {id:5,time:"11:30-12:00",timeCss:'timeClass1'},
    //   {id:6,time:"13:30-14:00",timeCss:'timeClass1'},
    //   {id:7,time:"14:00-14:30",timeCss:'timeClass1'},
    //   {id:8,time:"14:30-15:00",timeCss:'timeClass1'},
    //   {id:9,time:"15:00-15:30",timeCss:'timeClass1'},
    //   {id:10,time:"15:30-16:00",timeCss:'timeClass1'},
    //   {id:11,time:"16:00-16:30",timeCss:'timeClass1'},
    //   {id:12,time:"16:30-17:00",timeCss:'timeClass1'}
    // ],
    timea:null,
    timeb:null,
    pickers:0,
    pickerx:0,
    date:0
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

// ctimes(e){
//   var id = e.currentTarget.dataset.id
//   var timeList = this.data.timeList
//   if(timeList[id].timeCss != 'timeClass3'){
//     if(this.data.timea == null){
//       if(this.data.timeb != null){
//         this.setData({
//           timea:id
//         })
//         for(var i in timeList){
//           if(this.data.timea <= timeList[i].id){
//             if(this.data.timeb >= timeList[i].id){
//               //console.log(timeList[i].id)
//               timeList[i].timeCss = 'timeClass2'
//             }
//           }
//         }
//         this.setData({
//           timeList:timeList
//         })
//       }else{
//         timeList[id].timeCss = 'timeClass2'
//         this.setData({
//           timea:id,
//           timeList:timeList
//         })
//       }
//     }else{
//        if(this.data.timea == id){
//         if(this.data.timea != this.data.timeb){
//           timeList[id].timeCss = 'timeClass1'
//           this.setData({
//             timea:id+1,
//             timeList:timeList
//           })
//         }else{
//           for(var i in timeList){
//             if(timeList[i].timeCss != 'timeClass3'){
//               timeList[i].timeCss = 'timeClass1'
//             }
//           }
//           this.setData({
//             timea:null,
//             timeb:null,
//             timeList:timeList
//           })
//         }
//         if(this.data.timeb != null){
//           for(var i in timeList){
//             if(this.data.timea <= timeList[i].id){
//               if(this.data.timeb >= timeList[i].id){
//                 //console.log(timeList[i].id)
//                 timeList[i].timeCss = 'timeClass2'
//               }
//             }
//           }
//           this.setData({
//             timeList:timeList
//           })
  
//         }
//        }else{
//         if(id < this.data.timea && this.data.timeb == null){
//           this.setData({
//             timeb:this.data.timea,
//             timea:id
//           })
//           for(var i in timeList){
//             if(this.data.timea <= timeList[i].id){
//               if(this.data.timeb >= timeList[i].id){
//                 //console.log(timeList[i].id)
//                 timeList[i].timeCss = 'timeClass2'
//               }
//             }
//           }
//           this.setData({
//             timeList:timeList
//           })
//         }else if(id > this.data.timea && this.data.timeb == null){
//           this.setData({
//             timeb:id
//           })
          
//           for(var i in timeList){
//             if(this.data.timea <= timeList[i].id){
//               if(this.data.timeb >= timeList[i].id){
//                 //console.log(timeList[i].id)
//                 timeList[i].timeCss = 'timeClass2'
//               }
//             }
//           }
//           this.setData({
//             timeList:timeList
//           })
//         }else{
//           for(var i in timeList){
//             if(timeList[i].timeCss != 'timeClass3'){
//               timeList[i].timeCss = 'timeClass1'
//             }
            
//           }
//           this.setData({
//             timeList:timeList
//           })
//           if(id < this.data.timea){
//             this.setData({
//               timea:id
//             })
//             for(var i in timeList){
//               if(this.data.timea <= timeList[i].id){
//                 if(this.data.timeb >= timeList[i].id){
//                   //console.log(timeList[i].id)
//                   timeList[i].timeCss = 'timeClass2'
//                 }
//               }
//             }
//             this.setData({
//               timeList:timeList
//             })
//           }else{
//             this.setData({
//               timeb:id
//             })
//             for(var i in timeList){
//               if(this.data.timea <= timeList[i].id){
//                 if(this.data.timeb >= timeList[i].id){
//                   //console.log(timeList[i].id)
//                   timeList[i].timeCss = 'timeClass2'
//                 }
//               }
//             }
//             this.setData({
//               timeList:timeList
//             })
//           }
//         }
//        }
//     }
//   }else{
//     verif.tips('该时间段已过不可选择')
//   }
  
// },
yuyue(){
  this.setData({
    modalName: 'bottomModal'
  })
},
DateChange(e) {
  this.setData({
    date: e.detail.value
  })
  this.yuyue()
},
hideModal(e) {
  this.setData({
    modalName: null
  })
},

  onLoad(options) {
    this.towerSwiper('swiperList');
    this.cdDetailsArr(options.id)
    // 初始化towerSwiper 传已有的数组名即可
  },

  cdDetailsArr(id){
        // var pickers = util.formatTime(new Date())
        // var sjtrue = pickers.split(' ')[1]
        // var sjtrue0 = sjtrue.replace(':', '.')
        // var sjtrue1 = sjtrue0.replace(':', '.')
        // var sjtrue2 = parseFloat(sjtrue1)
        // console.log(sjtrue2)
        // var trueIn = 0

        // if('9' < sjtrue2 && sjtrue2 < '9.3'){
        //   trueIn = 0
        // }else if('9.3' < sjtrue2 && sjtrue2 < '10'){
        //   trueIn = 1
        // }else if('10' < sjtrue2 && sjtrue2 < '10.3'){
        //   trueIn = 2
        // }else if('10.3' < sjtrue2 && sjtrue2 < '11'){
        //   trueIn = 3
        // }else if('11' < sjtrue2 && sjtrue2 < '11.3'){
        //   trueIn = 4
        // }else if('11.3' < sjtrue2 && sjtrue2 < '12'){
        //   trueIn = 5
        // }else if('13.3' < sjtrue2 && sjtrue2 < '14'){
        //   trueIn = 6
        // }else if('14' < sjtrue2 && sjtrue2 < '14.3'){
        //   trueIn = 7
        // }else if('14.3' < sjtrue2 && sjtrue2 < '15'){
        //   trueIn = 8
        // }else if('15' < sjtrue2 && sjtrue2 < '15.3'){
        //   trueIn = 9
        // }else if('15.3' < sjtrue2 && sjtrue2 < '16'){
        //   trueIn = 10
        // }else if('16' < sjtrue2 && sjtrue2 < '16.3'){
        //   trueIn = 11
        // }else if('17' < sjtrue2){
        //   trueIn = 12
        // }

        // var timeList = this.data.timeList
        // for(var i in timeList){
        //   if(timeList[i].id < trueIn){
        //     timeList[i].timeCss = 'timeClass3'
        //   }
        // }
        // this.setData({
        //   timeList:timeList
        // })
        //console.log(trueIn)
    //console.log(id)
    
    wx.showLoading({
      title: '拼命加载中',
    })
    
    http.cdDetailsApi({
      data:{
        constructionsActivityId:'b5fb1159-1fa2-443f-a1a4-53d18721b4e0'
      },
      success:res=>{
        console.log(res)
        // console.log(res.openTime.split(' 至 ')[0])
         //console.log(res.openTime.split(' 至 ')[1])
        
        
         var time = new Date()
        time.setDate(time.getDate() + 1)
        var pickersM = util.formatTime(time)
        
        // var a = new Date('2020-01-01 9:00')
        // var b = new Date('2020-01-01 11:00')
        var timea = res.amopenTime.split('-')[0]
        var timeb = res.amopenTime.split('-')[1]
        var timesA = timea.split(":")[1]
        var timesB = timeb.split(":")[1]
        console.log(timesA)
        if(timesA){

        }
       
        
        
        this.setData({
          rowsList:res,
          pickers:pickersM,
          pickerx:res.openTime.split(' 至 ')[1],
        })
        wx.hideLoading()
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  
})