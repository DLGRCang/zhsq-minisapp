// pages/index/user/airClass/airClass.js
import xylink from 'xylink-sdk/common/room.js';
import { FailEnumMap, STR_CALL_FAIL_UNKNOW_REASON } from './enum.js';
import http from '../../../../utils/api';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    videoList:[
      {id:0,url:"https://v-cdn.zjol.com.cn/280443.mp4",title:"标题1"},
      {id:0,url:"https://v-cdn.zjol.com.cn/276982.mp4",title:"标题2"},
      {id:0,url:"https://v-cdn.zjol.com.cn/276984.mp4",title:"标题3"},
      {id:0,url:"https://v-cdn.zjol.com.cn/276985.mp4",title:"标题4"}
    ],
    muted: false,
		devicePosition: 'front',
		meetingLoading: true,
		camera: true,
		onHold: false, // 是否通话等待
		avatar: 'defaultAvatar', // 用户头像
		template: {
			layout: 'auto',
			mode: '2-1',
			detail: []
    },
    userName:'',
    video:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
     // 缓存sdk <xylink-sdk/>组件节点context，为后续调用组件内部方法用
 this.xylinkRoom = this.selectComponent('#xylink');

 // 可选执行，设置是否进行内部事件的console和写入logger文件中，用于分析问题使用
 // 默认都不开启，设置为true开启
 this.xylinkRoom.setDebug(true, true);
 this.xyToken(options.video)

  },

  xyToken(video){
    
    http.videocommunicationApi({
      success:res=>{
        //console.log(JSON.parse(res.data))
        var resa = JSON.parse(res.data)
        //console.log(resa)
        this.setData({
          userName:resa.userName
        })
        wx.setStorageSync('xyuserName', resa.userName)
        xylink.login(resa.token, (response) => {
          if (response.code === 200) {
            const cn = response.data.callNumber;
            this.callNumber = cn;
            wx.showToast({
              title: "初始化登录成功",
              icon: "success",
              duration: 2000,
              mask: true,
            });
            if(video == 0){
              xylink.makeCall(9081048468, '', wx.getStorageSync('wxUser').name, this.onGetCallStatus);
            }else{
              xylink.makeCall(9081083950, '', wx.getStorageSync('wxUser').name, this.onGetCallStatus);
            }
          }
        });
      }
    })
  },

  onGetCallStatus(response) {
		// 响应makeCall状态，如果为200， 可以进行隐藏呼叫loading页面，执行start方法通知组件内部进行一系列操作
		// 比如连接socket，开启内部room事件向外发送
		const { code, message } = response;
		if (code === 200) {
			// 隐藏loading
			this.setData({
				meetingLoading: false
			});
			// 通知内部事件开始做入会准备，连接ws，启动roomEvent
			this.xylinkRoom.start();
		} else {
			xylink.showToast(message);
		}
	},
  onSwitchPosition() {
		const position = this.xylinkRoom.switchCamera();

		this.setData({
			devicePosition: position
		});
  },
  
  // 切换麦克风
	onChangeMuted() {
		this.setData({
			muted: !this.data.muted
		});
	},

  onSwitchCamera() {
		this.setData({
			camera: !this.data.camera
		});
	},

  onStopMeeting() {
    http.loginOutApi({
      data:{
        userName:this.data.userName
      },
      success:res=>{
        //console.log(res)
        wx.navigateBack({
          delta: 1
        });
      }
    })
	
	},

  openXyLink:function(){
    //   wx.navigateToMiniProgram({
    //               appId: 'wx5a161b9b42305c0a',
    //               path: 'pages/index/main?number=188188',
    //               success: function (res) { },
    //               fail: function (res) { }
    //             })
},
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
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
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
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
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
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})