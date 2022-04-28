
export const STR_CALL_LOCAL_NET_DISCONNECT = "网络中断，呼叫已断开";
export const STR_EXCEPTION_CALL_EXIST = "您正在呼叫中，请稍后重试";
export const STR_CALL_FAIL_UNKNOW_REASON = "呼叫异常，请稍后重试";
export const STR_CALL_TIME_OUT = "对方没有应答，请稍后再试";
export const STR_CALL_INVALID_NEMONO = "无效的终端号，请重新输入";
export const STR_CALL_USER_NOT_ALLOWED =
  "对方终端不允许外人拨打，请与对方确认后再拨";
export const STR_NEN_NORMAL_CONF_SESSION_EXCEED =
  "当前会议人数已超限，请加入企业通讯录，可支持更多方会议。";
export const STR_CALL_NOT_ALLOW_NEMO_CALL = "对方终端不允许陌生人呼叫";
export const STR_CONFMGMT_CONFOVER = "会控结束整个会议";
export const STR_CONFMGMT_KICKOUT = "会控踢掉当前的小程序";
export const STR_MEETING_LOCKED = "会议已经被锁定，无法加入";
export const STR_NORMAL_CONF_SESSION_EXCEED = "您呼叫的会议已达到最大支持人数";
export const STR_NOT_ALLOW_CONFERENCE_CALL =
  "您呼叫的云会议室不允许通讯录外成员呼入，请联系云会议室管理员";
export const STR_NOT_ALLOW_CONFERENCE_ANONYMOUS_CALL =
  "您呼叫的云会议室不允许匿名用户呼入，请联系云会议室管理员";

export const FailEnumMap = {
  LOCAL_NET_DISCONNECT: STR_CALL_LOCAL_NET_DISCONNECT,
  SIGNAL_TIMEOUT: STR_CALL_LOCAL_NET_DISCONNECT,
  MEDIA_TIMEOUT: STR_CALL_LOCAL_NET_DISCONNECT,
  EXCEPTION_CALL_EXIST: STR_EXCEPTION_CALL_EXIST,
  EXCEPTION_CALL_NOT_EXIST: STR_CALL_FAIL_UNKNOW_REASON,
  EXCEPTION_UNKNOWN: STR_CALL_FAIL_UNKNOW_REASON,
  TIME_OUT: STR_CALL_TIME_OUT,
  INVALID_NEMONO: STR_CALL_INVALID_NEMONO,
  USER_NOT_ALLOWED: STR_CALL_USER_NOT_ALLOWED,
  NEN_NORMAL_CONF_SESSION_EXCEED: STR_NEN_NORMAL_CONF_SESSION_EXCEED,
  NOT_ALLOW_NEMO_CALL: STR_CALL_NOT_ALLOW_NEMO_CALL,
  CONFMGMT_CONFOVER: STR_CONFMGMT_CONFOVER,
  CONFMGMT_KICKOUT: STR_CONFMGMT_KICKOUT,
  MEETING_LOCKED: STR_MEETING_LOCKED,
  NORMAL_CONF_SESSION_EXCEED: STR_NORMAL_CONF_SESSION_EXCEED,
  LARGE_CONF_SESSION_EXCEED: STR_NORMAL_CONF_SESSION_EXCEED,
  NOT_ALLOW_CONFERENCE_CALL: STR_NOT_ALLOW_CONFERENCE_CALL,
  NOT_ALLOW_CONFERENCE_ANONYMOUS_CALL: STR_NOT_ALLOW_CONFERENCE_ANONYMOUS_CALL
};