import { TConvertKeys } from '../types';

export const toCamelCase = (str: string): string =>
  str.replace(/_([a-z0-9])/g, (_, letter) => letter.toUpperCase());

const toSnakeCase = (str: string): string =>
  str.replace(/([A-Z])/g, '_$1').toLowerCase();

// Recursive function to convert all keys in an object or array from snake_case to camelCase
export const convertKeys = <T, D extends 'snake' | 'camel' = 'camel'>(
  obj: T,
  direction?: D,
): TConvertKeys<T, D> => {
  const convertKey = direction === 'snake' ? toSnakeCase : toCamelCase;

  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeys(item, direction)) as TConvertKeys<
      T,
      D
    >;
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        convertKey(key),
        convertKeys(value, direction),
      ]),
    ) as TConvertKeys<T, D>;
  }

  return obj as TConvertKeys<T, D>;
};
