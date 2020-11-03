var dateTimePicker = require('../../utils/dateTimePicker.js');
Page({
  data: {
    date: '2018-10-01',
    imgList: [],
    time: '12:00',
    dateTimeArray: null,
     imgList: [],
    dateTime: null,
    startYear: 2000,
    endYear: 2050,
    times:true
  },
  onLoad(){
    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // 精确到分的处理，将数组的秒去掉
    var lastArray = obj1.dateTimeArray.pop();
    var lastTime = obj1.dateTime.pop();
    
    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray,
      dateTimeArray1: obj1.dateTimeArray,
      dateTime1: obj1.dateTime
    });

  },

  changeDateTime(e) {
<<<<<<< HEAD

    this.setData({ dateTime1: e.detail.value,times:false });
  },
 // 照片功能
 ChooseImage() {
  wx.chooseImage({
    count: 9, //默认9
    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album'], //从相册选择
    success: (res) => {
      if (this.data.imgList.length != 0) {
        this.setData({
          imgList: this.data.imgList.concat(res.tempFilePaths)
        })
      } else {
        this.setData({
          imgList: res.tempFilePaths
        })
      }
    }
  });
},
ViewImage(e) {
  wx.previewImage({
    urls: this.data.imgList,
    current: e.currentTarget.dataset.url
  });
},
DelImg(e) {
  wx.showModal({
    title: '删除照片',
    content: '确定要删除该照片吗？',
    cancelText: '取消',
    confirmText: '删除',
    success: res => {
      if (res.confirm) {
        this.data.imgList.splice(e.currentTarget.dataset.index, 1);
        this.setData({
          imgList: this.data.imgList
        })
      }
    }
  })
   },
=======
    this.setData({ dateTime1: e.detail.value });
  },
  // 照片功能
  ChooseImage() {
    wx.chooseImage({
      count: 9, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '删除照片',
      content: '确定要删除该照片吗？',
      cancelText: '取消',
      confirmText: '删除',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
     },
     
>>>>>>> 21d068b12da57cd948d4c443c68cdd966079116c
})

