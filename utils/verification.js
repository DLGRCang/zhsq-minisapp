//身份证号校验
const checkIdCard = function (data) {
  if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(data))) {
    wx.showToast({
      title: '身份证号有误',
      icon: 'none'
    });
    return false;
  } else {
    return true;
  }
}
//手机号校验
const checkPhone = function (data) {
  if (!(/^1[345678]\d{9}$/.test(data))) {
    wx.showToast({
      title: '电话号码有误',
      icon: 'none'
    });
    return false;
  } else {
    return true;
  }
}
//邮箱校验
const checkEmail = function (data) {
  if (!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(data))) {
    wx.showToast({
      title: '邮箱有误',
      icon: 'none'
    });
    return false;
  } else {
    return true;
  }
}

const imgClick = function (){
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      success (res) {
        const tempFilePaths = res.tempFilePaths[0]
        var str = tempFilePaths.substring(tempFilePaths.length-6)
        var code1 = str.match(/\.(.*)/)[1];//取 ?id=后面所有字符串
        
        wx.uploadFile({
          url: 'http://172.16.20.81:9000/fileService/uploadFTP/zhsq/linliquan', //仅为示例，非真实的接口地址
          filePath: tempFilePaths,
          name: 'file',
          formData: {
            'file':tempFilePaths,
            'fileType':code1,
            'fileGrant':code1
          },
          success (resd){

            var data = JSON.parse(resd.data)
        
            var imgs = data.data[0].fileID
          
            resolve(imgs)
       
          }
        })
       
      }
    })
  });
  
}

//退一步
const pageBack = function () {
  wx.navigateBack({
    delta: 1
  });
}

export default{
  checkIdCard,
  checkPhone,
  checkEmail,
  pageBack,
  imgClick
}