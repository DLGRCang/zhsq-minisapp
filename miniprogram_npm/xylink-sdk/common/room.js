/**
 * 小鱼易连-小程序-sdk
 *
 * @authors Luo-jinghui (luojinghui424@gmail.com)
 * @date  2018-11-22 14:39:22
 */
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from './runtime';
import { request } from './request';

class Xylink {
	constructor() {
		this.init();
	}

	init() {
		const userInfo = wx.getStorageSync('userInfo');

		this.userInfo = userInfo;
		this.meetingInfo = {};
	}

	/**
   * 登录小鱼方法，必须在入会之前调用，获取小鱼系统的唯一标示`callNumber`,作为第三方和小鱼系统用户对应的依据
   * @token {String} 登录所需的参数：token
   * @cb {Function} 执行结束的回调函数,返回callNumber
   */
	async login(token, cb) {
		const sendUrl = `token?token=${token}`;
		const result = await request({
			url: sendUrl,
			method: 'PUT'
		});
		let resp = {};

		if (result.statusCode === 200 && result.data.code === 200) {
			const {
				appId = '',
				deviceSN,
				displayName = '',
				securityKey,
				userProfileID,
				callNumber
			} = result.data.device;
			const userInfo = {
				securityKey,
				userId: userProfileID,
				callNumber,
				appId,
				displayName,
				deviceSN,
				token
			};

			resp = {
				code: 200,
				data: {
					callNumber
				},
				message: 'success'
			};

			wx.setStorageSync('userInfo', userInfo);
			this.userInfo = userInfo;
		} else {
			const code = result.data.code ? result.data.code : 9000;

			resp = {
				code,
				data: result.data || {},
				message: result.errMsg || ''
			};
		}

		cb(resp);

		// const result2 = {
		// 	securityKey: '123123',
		// 	userId: '1111',
		// 	callNumber: '15353622534',
		// 	appId: 'wxwewerwewrewrw',
		//   token
		// };
	}

	_getCallRes(code, data, message) {
		return {
			code,
			data,
			message
		};
	}

	/**
   * 呼叫接口
   * 该接口执行呼叫，成功后即可进行入会相关操作。
   *
   * @number {Number} 云会议室号
   * @pwd {String} 云会议室入会密码,默认填写为""
   * @displayName {String} 入会人的名称
   * @cb {Function} 执行结束的回调函数，提示会议室信息状态（无效的号码，需要输入密码，网络错误...）
   */
	async makeCall(number, password, displayName, cb) {
		const { securityKey = '', userId = '' } = this.userInfo;
		const url = `callUrlInfoV2?number=${number}&securityKey=${securityKey}&userId=${userId}`;
		let response = {};
		this.meetingInfo = {
			number,
			password,
			displayName
		};

		const result = await request({
			url,
			method: 'GET'
		});

		console.log('call result: ', result);

		if (result.statusCode === 200 && result.data.deviceType === 'CONFNO') {
			// 如果enablePwd为false，则不需要入会密码
			if (!result.data.enablePwd) {
        response = this._getCallRes(200, {}, '验证成功，可以入会');  
				wx.setStorageSync('meeting', { number, password, displayName });
			} else if (password) {
				// 需要输入入会密码
				// 如果传入了密码，需要验证密码是否正确
				const result = this.verifyPassword(number, password);

				// 如果为true，入会密码正确
				if (result) {
          response = this._getCallRes(200, {}, '验证成功，可以入会');  

					wx.setStorageSync('meeting', { number, password, displayName });
				} else {
					// 否则密码错误，需要重新输入
          response = this._getCallRes(303, {}, '入会密码错误，请检查');  
				}
			} else {
				// 需要输入入会密码
        response = this._getCallRes(300, {}, '需要入会密码，请检查');  
			}
		} else if (result.statusCode === 200 && result.data.deviceType !== 'CONFNO' && result.data.deviceType) {
			console.log('暂不支持呼叫此类号码。。。');
      response = this._getCallRes(301, {}, '暂不支持呼叫此类号码');
		} else {
			console.log('会议号验证失败，请稍后再试');
			response = this._getCallRes(302, {}, '会议号验证失败，请稍后再试');
		}

		cb(response);
	}

	/**
   * 设置request domain
   * @param {String} newDomain
   */
	setDomain(wsDomain, requestDomain) {
		const domain = {
			wsDomain,
			requestDomain
		};
		wx.setStorageSync('domain', domain);
	}

	/**
   * 验证入会密码
   */
	async verifyPassword(number, password) {
		const url = 'cloudmeeting/validation';
		const result = await request({
			url,
			method: 'PUT',
			data: {
				number,
				password
			}
		});

		const verifyPw = result.statusCode === 200 && result.data !== 'CONFERENCE_PASSWORD_INVALID';
		return verifyPw;
	}

	/**
   * 统一显示toast
   * @param {String} message toast文本
   * @param {String} icon 图标
   * @param {Number} duration 持续时间
   */
	showToast(message, icon = 'none', duration = 2000) {
		wx.showToast({
			title: message,
			icon,
			duration
		});
	}
}

export default new Xylink();
