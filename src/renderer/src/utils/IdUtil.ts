class IdUtil {
  private static sequence = 0;

  private static lastTimestamp = 0;

  static generateId(): string {
    let timestamp = Date.now();

    if (timestamp === this.lastTimestamp) {
      // eslint-disable-next-line no-bitwise
      this.sequence = (this.sequence + 1) & 0xfff; // 12位序列号
      if (this.sequence === 0) {
        // 序列号溢出，等待下一毫秒
        while (timestamp <= this.lastTimestamp) {
          timestamp = Date.now();
        }
      }
    } else {
      this.sequence = 0;
    }

    this.lastTimestamp = timestamp;

    // 组合：时间戳(42位) + 序列号(12位)
    // eslint-disable-next-line no-bitwise
    const id = (BigInt(timestamp) << BigInt(12)) | BigInt(this.sequence);
    return id.toString();
  }
}

export default IdUtil;
