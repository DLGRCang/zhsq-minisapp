/**
 * Meeting custom layout function
 */

import cloneDeep from 'clone-deep';
import { initHidePosition } from './template';

export default class CustomScreen {
	constructor(rosters, data) {
		const { INVITE, speaksInfo = [], meetingControl, logger } = data;
		const { onHold } = data.data;

		this.initScreen = data.data.template.detail || [];

		// 小程序和sdk有差异的地方，需要做改动。
		// this.customScreen = data.data.customScreen || []; // screen
		this.customScreen = []; // screen
		this.onHold = onHold;

		this.rosters = cloneDeep(rosters) || [];
		this.myUserId = INVITE.userId; // myUserid
		this.speakers = speaksInfo; // sp Info
		this.chairmanUri = meetingControl.chairmanUri; // 主会场uri

		this.logger = logger;
		this.content = {};
		// 排好序的roster数据
		this.orderRosters = [];

		// 生成排序roster数据
		this.setOrderRosters();
	}

	// 获取Screen
	getScreen() {
		this.setScreeen();

		if (this.logger) {
			this.logger.log('class getCustomScreen: ', this.customScreen);
		}

		return this.customScreen;
	}

	// 获取是否有content内容
	getContent() {
		return this.content;
	}

	// 设置Screen数据
	setScreeen() {
		this.customScreen = cloneDeep(this.initScreen);

		console.log('class get clone temaplte detail: ', this.customScreen);

		// 如果初始orderRoster没有值，或者生成的newScreen没有值，则不进行生成layout操作
		this.updateScreen();
		this.setOtherScreen();
	}

	setOtherScreen() {
		const rostersOrderSome = cloneDeep(this.getAudioUnmuteRosters());

		const screen = cloneDeep(this.customScreen);

		const result = [];
		const rosterLength = rostersOrderSome.length;

		for (let m = 0; m < rosterLength; m++) {
			const rItem = rostersOrderSome[m];

			const isInScreen = screen.every((item) => item.callNumber !== rItem.callNumber || item.isContent);

			if (isInScreen) {
				result.push({
					callNumber: rItem.callNumber,
					name: rItem.displayName,
					position: initHidePosition,
					roster: rItem
				});
			}
		}

		this.logger.log('other custom layout new screen: ', result, 'info');

		this.customScreen = this.customScreen.concat(result);
	}

	// 按照content，chairMain，AS，其他，排序roster数据
	setOrderRosters() {
		const rosters = cloneDeep(this.rosters);
		const rosterLen = rosters.length;
		const rosterList = {
			content: [],
			chairman: [],
			activeSpeaker: [],
			audioVideoUnmute: [],
			audioUnmute: [],
			videoUnmute: [],
			audioVideoMute: []
		};

		for (let i = 0; i < rosterLen; i++) {
			const item = rosters[i];
			const isChairman =
				this.chairmanUri &&
				(this.chairmanUri === item.userId || (item.deviceType === 'h323' && this.chairmanUri === item.callUri));
			item['isActiveSpeaker'] = false;

			// 会控onhold时，需要静音播放
			if (this.onHold) {
				item['muted'] = true;
			} else {
				item['muted'] = false;
			}

			if (
				this.myUserId === item.userId ||
				(item.deviceType === 'h323' && this.myUserId === item.callUri) ||
				item.deviceType === 'record'
			) {
				continue;
			}

			// 保存content
			if (item.isContent) {
				this.content = item;

				rosterList['content'].push(item);
				continue;
			}

			// 保存主会场数据
			if (isChairman) {
				rosterList['chairman'].push(item);
				continue;
			}

			if (!item.audioTxMute && !item.videoTxMute) {
				rosterList['audioVideoUnmute'].push(item);
				continue;
			}

			if (!item.audioTxMute && item.videoTxMute) {
				rosterList['audioUnmute'].push(item);
				continue;
			}

			if (item.audioTxMute && !item.videoTxMute) {
				rosterList['videoUnmute'].push(item);
				continue;
			}

			if (item.audioTxMute && item.videoTxMute) {
				rosterList['audioVideoMute'].push(item);
				continue;
			}
		}

		// 生成排好序的roster数据
		let orderRosters = [];
		for (const key in rosterList) {
			if ({}.hasOwnProperty.call(rosterList, key)) {
				orderRosters = orderRosters.concat(rosterList[key]);
			}
		}

		this.orderRosters = orderRosters;
	}

	// 获取audioUnmute roster
	getAudioUnmuteRosters() {
		const audioUnmuteRosters = this.orderRosters.filter((item) => !item.audioTxMute);

		return audioUnmuteRosters;
	}

	// roster -> custom
	updateScreen() {
		const rosters = cloneDeep(this.rosters);
		const layout = cloneDeep(this.customScreen);
		const layoutLen = layout.length;

		for (let i = 0; i < layoutLen; i++) {
			const item = layout[i];
			const index = this.getIndexInRosters(rosters, item);

			if (item) {
				layout[i].roster = rosters[index];
			}

			// if (this.isClearContentItem(item)) {
			//   console.log("删除content");
			//   const index = layout.indexOf(item);
			//   layout.splice(index, 1);
			// }
		}

		this.logger.log('class custom layout new screen: ', layout);

		this.customScreen = layout;
	}

	isClearContentItem(item) {
		return item && item.isContent && !item.roster;
	}

	// 根据param
	getIndexInRosters(rosters, item) {
		let index = -1;
		const { callNumber, isContent } = item;

		if (!callNumber) {
			return index;
		}

		if (item && isContent) {
			for (let i = 0; i < rosters.length; i++) {
				if (rosters[i]['callNumber'] === callNumber && rosters[i].isContent) {
					index = i;

					break;
				}
			}
		} else {
			for (let i = 0; i < rosters.length; i++) {
				if (rosters[i]['callNumber'] === callNumber && !rosters[i].isContent) {
					index = i;

					break;
				}
			}
		}
		return index;
	}
}
