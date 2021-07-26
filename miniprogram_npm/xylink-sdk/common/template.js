/**
 * Meeting layout init template data
 *
 * @authors Luo-jinghui (luojinghui424@gmail.com)
 * @date  2019-02-02 11:36:08
 */

export const localPosition = {
  mini: [62, 75, 24, 25],
  max: [14, 0, 72, 100],
  hide: [-5, -5, 1, 1]
};

export const template = {
  "1+3": [
    {
      position: [14, 0, 72, 75],
      seat: 1,
      status: "pull",
      roster: {},
      playUrl: ""
    },
    {
      position: [38, 75, 24, 25],
      seat: 2,
      status: "pull",
      roster: {},
      playUrl: ""
    },
    {
      position: [14, 75, 24, 25],
      seat: 3,
      status: "pull",
      roster: {},
      playUrl: ""
    }
  ]
};

export const initHidePosition = [-5, -5, 0, 0];

export const hidePosition = [30, 90, 1, 1];
