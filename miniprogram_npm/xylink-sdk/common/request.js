/**
 * 小鱼易连-小程序sdk request modules
 * 
 * @authors Luo-jinghui (luojinghui424@gmail.com)
 * @date  2018-11-22 17:10:18
 */

import './runtime';
import Log from './logger';
// dev环境
export const wsDomain = 'wss://prdtxlive.xylink.com';
// dev环境
export const requestDomain = 'https://prdtxlive.xylink.com';

const { brand, model, system } = wx.getSystemInfoSync();
const logger = new Log(true, true, false);

const version = 'v1';

/**
 * 请求request
 * @param {Object} obj 请求参数，包含method，url，data... 
 * @param {Boolean} obj.isPureUrl: 是否是纯净的url，不添加任何参数  默认是false
 * @param {Boolean} obj.isAddDomain: 是否在url中添加domain域名  默认是true
 * @param {Boolean} obj.isAddSK: 是否在url参数中添加js_code和grant_type  默认是false
 * @param {Object} obj.body: 请求body对象 默认是{}
 * @param {Boolean} obj.noLoading: 是否显示请求loading 默认是false，显示
 */
export const request = obj => {
	const requestId = Math.ceil(Math.random() * 1000);
	const domain = wx.getStorageSync('domain').requestDomain || requestDomain;
	const { isAddDomain = true, isPureUrl = false, data = {}, body = {}, isAddSK = false } = obj;
	const newData = Object.assign({}, data, body);
	const method = obj.method || 'GET';
	const header = Object.assign(
		{},
		{
			'content-type': 'application/json',
			'n-ua': `PL=mp-sdk&AV=1043&DR=&RL=&MF=${brand}&MO=${model}&OS=${system}&API=&LCLO=&LCLA=&CK=`
		},
		obj.header
	);

	let url = obj.url;

	if (isAddSK) {
		const { securityKey = '', appId = '' } = wx.getStorageSync('userInfo');

		url = `${url}?securityKey=${securityKey}&appId=${appId}`;
	}

	if (isAddDomain) {
		url = `${domain}/api/rest/${version}/wx/${url}`;
	}

	if (isPureUrl) {
		url = obj.url;
	}

	logger.log('ajax request:', `${requestId}  ${method}  ${url}`);
	logger.log('----------');

	return new Promise((resolve, reject) => {
		// 是否显示loading
		if (!obj.noLoading) {
			wx.showLoading({
				mask: true,
				title: '处理中'
			});
		}

		wx.request({
			url,
			data: newData,
			header,
			method,
			success(res) {
				logger.log(`ajax ${requestId} response2:`, res);

				resolve(res);
			},
			fail(e) {
				logger.log(`ajax ${requestId} response error:`, e);

				reject(e);
			},
			complete() {
				if (!obj.noLoading) {
					wx.hideLoading();
				}
			}
		});
	});
};
