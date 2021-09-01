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

//上传附件
const imgClick = function (){

  return new Promise((resolve, reject) => {
    wx.chooseImage({
      success (res) {
        const tempFilePaths = res.tempFilePaths[0]

        var base;

        var str = tempFilePaths.substring(tempFilePaths.length-6)
        var code1 = str.match(/\.(.*)/)[1];//取 ?id=后面所有字符串
        //console.log(tempFilePaths)

        //https://www.yjhlcity.com
        wx.uploadFile({
          url: 'https://www.yjhlcity.com/zhsq/app/file/uploadimage',
          filePath: tempFilePaths,
          name: 'image',
          header: {
            'token':wx.getStorageSync('token')
          },
          formData: {
            'file':tempFilePaths,
            'fileType':code1,
            //'fileGrant':code1
          },
          success (resd){
            var data = JSON.parse(resd.data)
            //console.log(data.data)
            var imgs = data.data
            //console.log(base)
            resolve({imgs,base})
       
          },
          fail (err){
            console.log(err)
          }
        })
       
      },
      fail:err=>{
        console.log(err)
      }
    })
  });
  
}

//上传附件Base64
const imgClickBse = function (){

  return new Promise((resolve, reject) => {
    wx.chooseImage({
      success (res) {
        //console.log(res)
        if(res.tempFiles[0].path.split(".")[1] == "jpg"){
          if(res.tempFiles[0].size <= 200000){
      
            for (var x = 0; x < res.tempFilePaths.length; x++) {
              wx.getFileSystemManager().readFile({
                filePath: res.tempFilePaths[x], //选择图片返回的相对路径
                encoding: "base64",//这个是很重要的
                success: resm => { //成功的回调
                  //console.log(resm)
                //返回base64格式
                //base = resm.data
                const tempFilePaths = res.tempFilePaths[0]
          
                var base = resm.data;
                resolve({tempFilePaths,base})
                }
              })
            }
            
            // var str = tempFilePaths.substring(tempFilePaths.length-6)
            // var code1 = str.match(/\.(.*)/)[1];//取 ?id=后面所有字符串
            // wx.uploadFile({
            //   url: 'https://www.yjhlcity.com/zhsq/app/file/uploadimage',
            //   filePath: tempFilePaths,
            //   name: 'image',
            //   header: {
            //     'token':wx.getStorageSync('token')
            //   },
            //   formData: {
            //     'file':tempFilePaths,
            //     'fileType':code1,
            //     //'fileGrant':code1
            //   },
            //   success (resd){
            //     var data = JSON.parse(resd.data)
            //     //console.log(data.data)
            //     var imgs = data.data
            //     //console.log(base)
            //     
          
            //   },
            //   fail (err){
            //     console.log(err)
            //   }
            // })
          }else{
            tips("图片不能超过200K")
          }
          
        }else{
          tips("图片格式错误")
        }
        

        
       
      },
      fail:err=>{
        console.log(err)
      }
    })
  });
  
}

//上传附件Base64
const imgClickBseseven = function (){

  return new Promise((resolve, reject) => {
    wx.chooseImage({
      success (res) {
        //console.log(res)
        const tempFilePaths = res.tempFilePaths[0]
        var base;
        if(res.tempFiles[0].path.split(".")[1] == "jpg"){
          if(res.tempFiles[0].size <= 200000){
      
            for (var x = 0; x < res.tempFilePaths.length; x++) {
              wx.getFileSystemManager().readFile({
                filePath: res.tempFilePaths[x], //选择图片返回的相对路径
                encoding: "base64",//这个是很重要的
                success: resm => { //成功的回调
                  //console.log(resm)
                //返回base64格式
                //base = resm.data
                //const tempFilePaths = res.tempFilePaths[0]
          
                base = resm.data;
                
                }
              })
            }
            
            var str = tempFilePaths.substring(tempFilePaths.length-6)
            var code1 = str.match(/\.(.*)/)[1];//取 ?id=后面所有字符串
            wx.uploadFile({
              url: 'https://www.yjhlcity.com/zhsq/app/file/uploadimage',
              filePath: tempFilePaths,
              name: 'image',
              header: {
                'token':wx.getStorageSync('token')
              },
              formData: {
                'file':tempFilePaths,
                'fileType':code1,
                //'fileGrant':code1
              },
              success (resd){
                var data = JSON.parse(resd.data)
                //console.log(data.data)
                var imgs = data.data
                //console.log(base)
                resolve({imgs,base})
          
              },
              fail (err){
                console.log(err)
              }
            })
          }else{
            tips("图片不能超过200K")
          }
          
        }else{
          tips("图片格式错误")
        }
        

        
       
      },
      fail:err=>{
        console.log(err)
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

//消息提示框
const tips = function(data){
  wx.showToast({
    title: data,
    icon: 'none',
    duration: 2000
  })
  
}

//成功提示框
const success = function(data){
  wx.showToast({
    title: data,
    icon: 'success',
    duration: 2000
  })
}

//校验登录
function checkLogin(){
  //console.log(wx.getStorageSync('user'))
  if(wx.getStorageSync('wxUser') == ''){
          wx.navigateTo({
            url: "/pages/login/login"
          })
  }else{
    return true;
  }
}

// function ifLogin(){
//  wx.getSetting({
//     success:res=>{
//      // console.log(res)
//       if (res.authSetting['scope.userInfo']&&wx.getStorageSync('wxUser') == ''){
//         wx.navigateTo({
//           url: "/pages/login/login"
//         })
//       }else{
//         checkLogin()
//       }
//     }
//   })
// }

export default{
  checkIdCard,
  checkPhone,
  checkEmail,
  pageBack,
  imgClick,
  imgClickBse,
  tips,
  success,
  checkLogin,
  imgClickBseseven
}