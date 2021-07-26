/**
 * Meeting layout function
 */

import { initHidePosition, template } from "./template";

export default class Screen {
  constructor(rosters, data) {
    const { INVITE, speaksInfo = [], meetingControl, logger, contentSenderPid = 0 } = data;
    const { mode = "1+3", onHold} = data.data;

    // 小程序和sdk有差异的地方，需要做改动。
    this.screen = data.data.screen || []; // screen
    this.onHold = onHold;
    this.rosters = rosters;
    this.myUserId = INVITE.userId; // myUserid
    this.speakers = speaksInfo; // sp Info
    this.chairmanUri = meetingControl.chairmanUri; // 主会场uri
    this.newScreen = [];
    this.contentSenderPid = contentSenderPid;
    this.cacheNewScreen = [];
    this.logger = logger;
    this.content = {};
    // 排好序的roster数据
    this.orderRoster = [];
    this.speakerInfo = this.getASP();
    this.initScreen = template[mode];

    // 生成排序roster数据
    this.setOrderRosters();

    // 根据拍好序的roster数据，生成一份最新的newScreen数据，用于和screen做diff对比
    this.createNewScreen();

    // 记录newScreen数据的length
    this.newScreenLen = this.newScreen.length;
  }

  // 获取Screen
  getScreen() {
    this.setScreeen();

    if (this.logger) {
      this.logger.log("Screen class screen: ", this.screen.concat());
    }

    return this.screen;
  }

  // 获取是否有content内容
  getContentItem() {
    return this.content;
  }

  // 获取排好序的roster数据
  getOrderRoster() {
    return this.orderRoster;
  }

  // 获取newScreen数据
  getNewScreen() {
    return this.newScreen;
  }

  // 设置Screen数据
  setScreeen() {
    // 如果初始orderRoster没有值，或者生成的newScreen没有值，则不进行生成layout操作
    if (this.orderRoster.length && this.newScreenLen) {
      this.updateScreen();

      // 如果是onhold，则将所有的屏幕进行移除
      if (this.onHold) {
        this.setHideScreen();
      }

      // 需要清理不用的数据
      this.clearUselessScreen();
    } else {
      this.screen = this.initScreen.concat();
    }
  }

  setHideScreen() {
    const screenLen = this.screen.length;

    for (let i = 0; i < screenLen; i++) {
      const item = this.screen[i];

      this.screen[i] = Object.assign({}, item, {
        hidePosition: initHidePosition
      });
    }
  }

  // 清理无用的useless
  clearUselessScreen() {
    const screenLen = this.screen.length;
    let count = 0;
    const initScreenLen = this.initScreen.length;
    const newScreenLen =
      this.newScreenLen >= initScreenLen ? this.newScreenLen : initScreenLen;

    for (let i = 0; i < screenLen; i++) {
      const item = this.screen[i];

      // 重置没有使用的占位数据
      if (!item || !item.deal) {
        this.screen[i] = {
          seat: item.seat,
          status: item.status,
          position: item.position || initHidePosition,
          roster: {},
          playUrl: ""
        };
      }

      // 判断是否大于当前newScreen的length，如果是，则清理这些数据
      if (item.deal || item.seat <= initScreenLen) {
        delete this.screen[i].deal;
        count++;

        if (count >= newScreenLen) {
          this.screen.length = i + 1;
          break;
        }
      }
    }
  }

  // 通过newScreen数据，更新screen中的数据
  // 可能的情况有：交换位置，新增位置，更新状态
  updateScreen() {
    const newScreenLen = this.newScreen.length;

    for (let i = 0; i < newScreenLen; i++) {
      const item = this.newScreen[i];
      const index = i + 1;
      const previousIndex = this.getIndexInScreenByUserid(item.roster, "old");

      // item userId不在Screen中
      if (previousIndex === -1) {
        this.updateScreenUseIndex(index, item);
      } else {
        this.updateScreenUseItem(previousIndex, index, item);
      }
    }
  }

  // item userId没有存在于Screen中
  updateScreenUseIndex(index, item) {
    const screenLen = this.screen.length;
    let previousScreenIndex = this.getIndexInScreenBySeat(index, "old");
    previousScreenIndex =
      previousScreenIndex === -1 ? screenLen : previousScreenIndex;
    const previousScreenItem = this.screen[previousScreenIndex];

    // 如果有item，则说明里面有值
    if (previousScreenItem && previousScreenItem.roster.userId) {
      const previousScreenRoster = previousScreenItem.roster;
      // 判断此值是否存在与newScreen中，存在则交换位置，否则直接更新
      const newScreenIndex = this.getIndexInScreenByUserid(
        previousScreenRoster,
        "new"
      );

      if (newScreenIndex === -1) {
        this.updateRoster(previousScreenIndex, item, index);
      } else {
        const cacheScreenIndex = this.getNewIndexInScreenByUserid();
        // 将seat：index的数据移动到缓存的新位置上，然后将seat：index的roster更新为最新的item值。

        this.exchangePosition(
          cacheScreenIndex,
          previousScreenIndex,
          previousScreenItem
        );
        this.updateRoster(cacheScreenIndex, item, index);
      }
    } else {
      // 否则，则这个值是undefined
      this.updateRoster(previousScreenIndex, item, index);
    }
  }

  // item userId存在于Screen中，则存在两种情况
  // 1. index是否与seat相同，则直接更新状态
  // 2. 不相同，则交换位置，更新状态
  updateScreenUseItem(previousIndex, index, item) {
    const previousSeat = this.screen[previousIndex].seat;

    if (index === previousSeat) {
      this.updateRoster(previousIndex, item, index);
    } else {
      const previousScreenIndex = this.getIndexInScreenBySeat(index, "old");

      if (previousScreenIndex !== -1) {
        this.exchangePosition(previousIndex, previousScreenIndex, item.roster);
        this.screen[previousIndex].deal = true;
      } else {
        const cacheScreenIndex = this.getNewIndexInScreenByUserid(index);

        this.exchangePosition(previousIndex, cacheScreenIndex, item.roster);
        this.updateRoster(previousIndex, item, index);
      }
    }
  }

  // 更新roster数据
  updateRoster(index, item, seat) {
    if (this.screen[index]) {
      this.screen[index].roster = item.roster;
      this.screen[index].deal = true;
      this.screen[index].seat = seat;
    } else {
      this.screen[index] = {
        roster: item.roster,
        deal: true,
        position: initHidePosition,
        playUrl: "",
        seat,
        status: "start"
      };
    }
  }

  // 根据替换位置的index，原位置的index交换两个screen的位置，并更新roster数据
  // replaceIndex: 需要挪动的index
  // mainScreenIndex: 需要被动挪动的index
  // mainNewScreenRoster: 需要挪动之后更新的roster的值
  exchangePosition(replaceIndex, mainScreenIndex, mainNewScreenRoster) {
    const { seat: targetSeat, position: targetPosition } = this.screen[
      replaceIndex
    ];
    const { seat: oriSeat, position: oriPosition } = this.screen[
      mainScreenIndex
    ];

    // 替换原位置数据
    this.screen[mainScreenIndex].seat = targetSeat;
    this.screen[mainScreenIndex].position = targetPosition;
    // 替换被移动的位置数据
    this.screen[replaceIndex].seat = oriSeat;
    this.screen[replaceIndex].position = oriPosition;
    this.screen[replaceIndex].roster = mainNewScreenRoster;
  }

  // 在screen中寻找一个新的空位
  getNewIndexInScreenByUserid(seat) {
    const screenLen = this.screen.length;
    const initScreenLen = this.initScreen.length;
    const newSeat = seat || screenLen + 1;
    let index = -1;

    for (let i = 0; i < screenLen; i++) {
      const item = this.screen[i];

      if (
        item.seat > initScreenLen &&
        (!item || (item && !item.roster.userId))
      ) {
        this.screen[i].seat = newSeat;
        index = i;

        break;
      }
    }

    if (index === -1) {
      this.screen.push({
        seat: newSeat,
        position: initHidePosition,
        roster: {},
        status: "start",
        playUrl: ""
      });
      index = this.screen.length - 1;
    }

    return index;
  }

  // 获取userId所对应在screen||newScreen中的索引值
  getIndexInScreenByUserid(roster = {}, status) {
    const userId = roster.userId;
    const screen = status === "old" ? this.screen : this.newScreen;
    const screenLen = screen.length;
    let index = -1;

    if (!userId) {
      return index;
    }

    for (let i = 0; i < screenLen; i++) {
      const item = screen[i];

      if (item && item.roster.userId === userId) {
        index = i;

        break;
      }
    }

    return index;
  }

  // 获取seat所对应在screen||newScreen中的索引值
  getIndexInScreenBySeat(seat, status) {
    const screen = status === "old" ? this.screen : this.newScreen;
    const screenLen = screen.length;
    let index = -1;

    for (let i = 0; i < screenLen; i++) {
      const item = screen[i];

      if (item && item.seat === seat) {
        index = i;

        break;
      }
    }

    return index;
  }

  // 根据roster数据，生成一份最新的screen数据
  // 新的screen数据只关心主屏的变化，其他的数据按照权重规则获取即可。
  createNewScreen() {
    const orderRosterLen = this.orderRoster.length;
    const initScreenLen = this.initScreen.length;

    for (let i = 0; i < orderRosterLen; i++) {
      const item = this.orderRoster[i];

      if (i === 0) {
        this.setItemInNewScreen(1, item);
        continue;
      }

      if (!item.audioTxMute || initScreenLen > i) {
        this.setItemInNewScreen(-1, item);
        continue;
      }

      if (item.audioTxMute) {
        break;
      }
    }

    console.log("newScreen: ", this.newScreen);
  }

  setItemInNewScreen(seat, item) {
    this.newScreen.push({
      seat,
      roster: item
    });
  }

  // 获取asp数据
  getASP() {
    const speakerLen = this.speakers.length;
    let speakerInfo = null;

    for (let i = 0; i < speakerLen; i++) {
      const speakerItem = this.speakers[i];

      if (speakerItem.isActiveSpeaker) {
        speakerInfo = speakerItem;
        break;
      }
    }

    return speakerInfo;
  }

  // 按照content，chairMain，AS，其他，排序roster数据
  setOrderRosters() {
    const rosters = this.rosters;
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
    let isAddOldRoster = true;

    for (let i = 0; i < rosterLen; i++) {
      const item = rosters[i];
      const isChairman =
        this.chairmanUri &&
        (this.chairmanUri === item.userId ||
          (item.deviceType === "h323" && this.chairmanUri === item.callUri));
      item["isActiveSpeaker"] = false;
      // 会控onhold时，需要静音播放
      if (this.onHold) {
        item["muted"] = true;
      } else {
        item["muted"] = false;
      }

      if (
        this.myUserId === item.userId ||
        (item.deviceType === "h323" && this.myUserId === item.callUri) ||
        item.deviceType === "record" ||
        (item.isContent && item.pid !== this.contentSenderPid)
      ) {
        continue;
      }

      // 保存content
      if (item.isContent && item.pid === this.contentSenderPid) {
        this.content = item;
        isAddOldRoster = false;

        rosterList["content"].push(item);
        continue;
      }

      // 保存主会场数据
      if (isChairman) {
        isAddOldRoster = false;

        rosterList["chairman"].push(item);
        continue;
      }

      // 保存asp
      if (this.speakerInfo && this.speakerInfo.userId === item.userId) {
        item["isActiveSpeaker"] = true;
        isAddOldRoster = false;

        rosterList["activeSpeaker"].push(item);
        continue;
      }

      if (!item.audioTxMute && !item.videoTxMute) {
        rosterList["audioVideoUnmute"].push(item);
        continue;
      }

      if (!item.audioTxMute && item.videoTxMute) {
        rosterList["audioUnmute"].push(item);
        continue;
      }

      if (item.audioTxMute && !item.videoTxMute) {
        rosterList["videoUnmute"].push(item);
        continue;
      }

      if (item.audioTxMute && item.videoTxMute) {
        rosterList["audioVideoMute"].push(item);
        continue;
      }
    }

    // 生成排好序的roster数据
    let orderRoster = [];
    for (const key in rosterList) {
      if ({}.hasOwnProperty.call(rosterList, key)) {
        orderRoster = orderRoster.concat(rosterList[key]);
      }
    }

    this.setOriMasterScreenItem(orderRoster, isAddOldRoster);
  }

  // 验证是否需要添加oldroster数据放置到首位
  setOriMasterScreenItem(orderRoster, isAdd) {
    const mainScreenIndex = this.getIndexInScreenBySeat(1, "old");
    const mainScreenRoster =
      (this.screen[mainScreenIndex] && this.screen[mainScreenIndex].roster) ||
      {};
    const mainScreenUserId = mainScreenRoster.userId || "";

    if (isAdd) {
      const index = this.getIndexInRoster(orderRoster, mainScreenUserId);

      // 如果不为-1，则说明需要将这个数据移动到首位
      if (index !== -1) {
        const backupRosterItem = orderRoster[index];

        orderRoster.splice(index, 1);
        orderRoster.unshift(backupRosterItem);
      }
    }

    // 记录下来最终排好序的roster数据
    this.orderRoster = orderRoster;
  }

  getIndexInRoster(roster, userId) {
    const rosterLen = roster.length;
    let index = -1;

    for (let i = 0; i < rosterLen; i++) {
      const item = roster[i];

      if (item.userId === userId) {
        index = i;
        break;
      }
    }

    return index;
  }
}
