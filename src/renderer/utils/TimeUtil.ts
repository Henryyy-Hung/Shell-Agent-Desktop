class DateTimeUtil {
  /**
   * 获取当前 UTC 毫秒级时间戳
   */
  static utcTimestampMs(): number {
    return Date.now();
  }

  /**
   * 获取当前 UTC 秒级时间戳
   */
  static utcTimestampSec(): number {
    return Math.floor(Date.now() / 1000);
  }

  /**
   * 获取北京时间(+8) 毫秒级时间戳
   *
   * ⚠️ 一般情况下时间戳统一用 UTC 表示，
   * 这个方法加上偏移仅在特殊计算场景用。
   */
  static beijingTimestampMs(): number {
    return Date.now() + 8 * 60 * 60 * 1000;
  }

  /**
   * 获取北京时间(+8) 秒级时间戳
   */
  static beijingTimestampSec(): number {
    return Math.floor((Date.now() + 8 * 60 * 60 * 1000) / 1000);
  }

  /**
   * 将时间戳格式化为北京时间字符串
   * @param timestamp 毫秒级时间戳
   * @param fmt 格式模板（可选）
   */
  static formatToBeijing(
    timestamp: number,
    fmt?: Intl.DateTimeFormatOptions,
  ): string {
    return new Date(timestamp).toLocaleString('zh-CN', {
      timeZone: 'Asia/Shanghai',
      ...fmt,
    });
  }

  /**
   * 将 ISO 字符串或 Date 转为北京时间字符串
   */
  static dateToBeijingString(
    date: Date | string,
    fmt?: Intl.DateTimeFormatOptions,
  ): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleString('zh-CN', {
      timeZone: 'Asia/Shanghai',
      ...fmt,
    });
  }
}

export { DateTimeUtil };
