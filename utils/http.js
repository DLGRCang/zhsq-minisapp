module.exports = {
  http(url, method, params) {
    //console.log(wx.getStorageSync('token'))
    let token = 'token' // 获取token，自行获取token和签名，token和签名表示每个接口都要发送的数据
    let sign = 'sign' // 获取签名 (后台怎么定义的，就传什么)
    let data = {
      // token,
      // sign
    }
    if (params.data) { // 在这里判断一下data是否存在，params表示前端需要传递的数据，params是一个对象，有三组键值对，data：表示请求要发送的数据，success：成功的回调，fail：失败的回调，这三个字段可缺可无，其余字段会忽略
      for (let key in params.data) { // 在这里判断传过来的参数值为null，就删除这个属性
        if (params.data[key] == null || params.data[key] == 'null') {
          delete params.data[key]
        }
      }
      data = { ...data, ...params.data }
    }
    
    //https://yiqi.sucstep.com

    //let token = "";
    if(wx.getStorageSync('wxUser').phone == "16666666666"){
      token = "QzNsNHZBdUZHSE9FdDZ4Z2YvRWJOVVA2eGxzQnJ3RG9zd1BHZ2NMSjZWTTN0TExIRStDMHZ5cjNWUytsd212Y1JtbDRrTWVyL0JTbVdSQnhQZ2h4SjBUYW16UE50NlFmYytLY3A3eGtmUzA5ZUd3RjYrTnpHRWRwSGZMWmJCaGh1bFFXT0lITjVKVWtveThVZXBWL2N4SEV5TERwSjQvY1BBZWljQUNtSlpYVHBmcGZtb0NEdWFYVVFnc1RuL3VuOTBYaFVFYU9QWGlkN0UzTHpZb2t0alJkZXdqZGlTZHAyNVo0L1doUWhQYnlpZDJ4TFRHM3NYMlJtSmZJdHljSTAxSEZpVG9JNEc1Mm5OdzZERzJyVVlaTThaeHhmdkFVbk5KbFUxdkNoeWJPdjdxcFhsYWo4akFiL1FRNC8ydFBXWjhIcytBRGk4dkliQlJDSHRVOGVSdkcyNk1CM0U5MzFES2ovendUWHpCdjllTFNkakJXems0b25SalBGY2diVjYzSDMrUUo0a1VCbjVjWENxaFVmaVlRMCt3NWdMZmFPRnZKdGx0WWg4cGhxZERJV2NCdHh5SmJNUzVZTU8wdzdNZHhrZlJvZDU2QmNkWDVvODh6M2lzbjMvZC9XY3hTYy9VTnlpeHVMcW9YM1NwUFoxb3lEUWZoU2dSRWgwMHFvbTBjKzF0V2lndnNTbWdSUSs4T0tpQ1dsejE2Snhkb29Ga3FOZW81UDB1Rkwya01BS1gweHhKWi81RHB1UzdxYmJhakF2RXVMY0p2RVNMcno3RWQ2R3FubW80R2wyTjlDRUplRzMxaURrNklLalVGZ2M0dWtLK1B2S0k3aCthcGtGeHVmQVRzeHNsMWcvNHNZSDhuL3djd2RrUWVVcmNUWXRUS1B1Q0QvUEpyRVl1cFJ5ek1ES0hFZU1oYTdQemxUblVGZUNNRFY5OU1VT3hjQXNqSW1YYTkvVDZvNitJaFBabk1zMVQrTElwTFJZdkdXcktCakFwdklxaU01T2dUSlFzbkU2eWt1Q2N4MUY0bi9jTElQQXYxWkJVc2txOFkxdmFhTXJsbkFiUCtoWk1oRFovbWhNbldrd25PTmg4MDM1UXNUR1grd09hY2crT3FVNnBGUm10SjlDeXQrY2pDZ3c5aDd1Z0FtUXMvdVRTT2tOR1o1THRZVkZqdEkwUE1hcTlaVk9Jc3pqU0hIVjlnV3p4cE9PeFlYNTV6MXY1NU90M3hyYzgxN1MrallsWW5PUms2QS9IcEc2SExEQ1g3R3NET2hRRzVMUXJOU2hJajd0RkJvQit2QWJFbnJLUFFXWG9BVW1Vc28yNWlORCtJZzBuTU9YdFJ3akxRR041TXZ4eG5HNndBTFE4TlVTTVZCN29NNXBZWkNINEJUV2VPVytJZUJHaitxUEVCTXNWY2lPdnkvTkFPQ3Fhekw1MTY2TC93NjRaY2NacExYZFhVWkpjbUswM1BmS1pDS2R6ZkE2Nzl1MXAvRjVPN3BvV1JqS3ZXb1RIL0ZYaDRwR1dWMFlESkFkZ25May8yRHpBWmhQQXUyalF6Rm5Rd0pEQWpnOFR5VnI5WDdLQ2gzaDVUMEUvNjkvQXhVRDU1WHpFYQ=="
    }else{
      token = wx.getStorageSync('token')
    }

    let yixing = "http://172.16.20.202:8083/"
    let login = "http://172.16.20.202:8002/"
    let menglei = "http://172.16.20.59:8003/zhsq/"
    let prod = "https://www.yjhlcity.com/"
     wx.showLoading({
       title: '拼命加载中',
     })
    wx.request({
      url: prod + url, // 就是拼接上前缀,此接口域名是开放接口，可访问
      method: method, // 判断请求类型，除了值等于'post'外，其余值均视作get 其他的请求类型也可以自己加上的
      data,
      header: {
        'content-type': 'application/json',
        'token':token
      },
      success(res) {
        //console.log(res)
        if(res.statusCode == 200){
          params.success && params.success(res.data)
          wx.hideLoading()
        }else{
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1000//持续的时间
          })
        }
        
      },
      fail(err) {
        wx.hideLoading()
        // wx.navigateTo({
        //   url: '/pages/haveContent/haveContent'
        // })
        params.fail && params.fail(err)
      },
      complete(lete) {
        wx.hideLoading()
        params.lete && params.lete(lete)
      }
    })
  }
}