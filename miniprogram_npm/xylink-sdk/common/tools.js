export const formatNumber = (n) => {
	const str = n.toString();
	return str[1] ? str : `0${str}`;
};

export const formatTime = (date) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();

	const t1 = [ year, month, day ].map(formatNumber).join('/');
	const t2 = [ hour, minute, second ].map(formatNumber).join(':');

	return `${t1} ${t2}`;
};

export const secondToDate = (result) => {
	const h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
	const m = Math.floor((result / 60) % 60) < 10 ? '0' + Math.floor((result / 60) % 60) : Math.floor((result / 60) % 60);
	const s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);
  const newTime = h + ':' + m + ':' + s;

	return newTime;
};

export const debounce = (fn, delay, atleast) => {
	let timer = null;
	let previous = null;

	return function (...args) {
		const now = +new Date();
		const context = this;

		clearTimeout(timer);
		if (!previous) {
			previous = now;
		}

		if (now - previous >= atleast) {
			fn.apply(context, args);
			// 重置上一次开始时间为本次结束时间
			previous = now;
		} else {
			timer = setTimeout(function () {
				fn.apply(context, args);
			}, delay);
		}
	};
};

export const throttle = function (fn, wait) {
	let lastTime = 0;

	return function (...args) {
		const nowTime = +new Date();
		const context = this;

		if (nowTime - lastTime > wait || !lastTime) {
			fn.apply(context, args);
			lastTime = nowTime;
		}
	};
};
