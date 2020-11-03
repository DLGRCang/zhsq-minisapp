var dateTimePicker = require('../../utils/dateTimePicker.js');
Page({
  data: {
    date: '2018-10-01',
    imgList: [],
    time: '12:00',
    dateTimeArray: null,
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


    this.setData({ dateTime1: e.detail.value,times:false });
  },

})

