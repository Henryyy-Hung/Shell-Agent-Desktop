class EnumUtils {
  /**
   * 拿到所有 key（枚举名）
   */
  static keys<E extends object>(enm: E): Array<keyof E> {
    return Object.keys(enm) as Array<keyof E>;
  }

  /**
   * 拿到所有 value
   */
  static values<E extends object>(enm: E): Array<E[keyof E]> {
    return Object.values(enm) as Array<E[keyof E]>;
  }

  /**
   * 拿到所有 [key, value]
   */
  static members<E extends object>(enm: E): Array<[keyof E, E[keyof E]]> {
    return Object.entries(enm) as Array<[keyof E, E[keyof E]]>;
  }

  /**
   * 返回传入 key 或 value 在枚举里的“序号”
   * @param enm 枚举对象
   * @param member 枚举的 key (name) 或 value
   * @returns 从 0 开始的索引，找不到返回 -1
   */
  static ordinalOf<E extends object>(
    enm: E,
    member: keyof E | E[keyof E],
  ): number {
    const ks = this.keys(enm);
    const vs = this.values(enm);
    // 尝试当 key 找
    const idxKey = ks.indexOf(member as keyof E);
    if (idxKey >= 0) return idxKey;
    // 再尝试当 value 找
    return vs.indexOf(member as E[keyof E]);
  }

  /**
   * 根据 key 拿 value
   */
  static valueOf<E extends object>(enm: E, key: keyof E): E[keyof E] {
    return enm[key];
  }
}

export default EnumUtils;
