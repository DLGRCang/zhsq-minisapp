/**
 * 小鱼易连-打印日志
 * @authors Luo-jinghui (luojinghui424@gmail.com)
 * @date  2018-11-23 14:26:04
 */

class Log {
	/**
   * 初始化log选项
	 * 
   * @param {Boolean} isConsole 是否打印console.log
   * @param {Boolean} isLogger 是否写入到本地log文件
   */
	constructor(isConsole = true, isLogger = false, isInit = true) {
		this.initLoggerInfo();

		this.isLogger = isLogger;
		this.isConsole = isConsole;
    this.isInit = isInit;
	}

	initLoggerInfo() {
		this.systemInfo = wx.getSystemInfoSync();
		this.logger = wx.getLogManager(1);

		if (this.isInit) {
      this.logger.log("Init system info: ", this.systemInfo, "info");
    }
	}

	setDebug(isConsole, isLogger) {
		this.isConsole = isConsole;
		this.isLogger = isLogger;
	}

	/**
   * log方法
   * @param {String} title log所对对应的key
   * @param {any} data log所对应的value
   * @param {String} type log类型，默认info，可选'info','log','warn','debug'
   * @param  {any} rest 其他数据
   */
	log(title = '', data = '', type = 'info', ...rest) {
		if (this.isConsole) {
			console.log(title, data, ...rest);
		}

		if (this.isLogger) {
			switch (type) {
			case 'info':
				this.logger.info(title, data, ...rest);
				break;
			case 'log':
				this.logger.log(title, data, ...rest);
				break;
			case 'warn':
				this.logger.warn(title, data, ...rest);
				break;
			case 'debug':
				this.logger.debug(title, data, ...rest);
				break;
			default:
				this.logger.log(title, data, ...rest);
				break;
			}
		}
	}
}

export default Log;
