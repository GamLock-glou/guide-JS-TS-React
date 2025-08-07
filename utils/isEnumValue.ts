export const isEnumValue = <T extends Record<string, string | number>>(
  value: unknown,
  enumObj: T
): value is T[keyof T] => Object.values(enumObj).some((v) => v === value);
