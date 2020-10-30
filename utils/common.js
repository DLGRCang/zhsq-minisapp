function checkLogin(){
  wx.getSetting({
    success:res=>{
     // console.log(res)
      if (res.authSetting['scope.userInfo']){
        //console.log('1')
        return true;
        
      }else{
          //console.log("2")
          wx.navigateTo({
            url: "/pages/login/login"
          })
      }
    }
  })
}

export default{
  checkLogin
}