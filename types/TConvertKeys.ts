// Converts a string from snake_case to camelCase (recursively)
type TSnakeToCamelCase<StringType extends string> =
  StringType extends `${infer FirstPart}_${infer SecondPart}`
    ? `${FirstPart}${Capitalize<TSnakeToCamelCase<SecondPart>>}`
    : StringType;

// Converts a string from camelCase to snake_case (recursively)
// Adds underscores before uppercase letters and lowercases them
type TCamelToSnakeCase<StringType extends string> =
  StringType extends `${infer FirstChar}${infer Rest}`
    ? FirstChar extends Lowercase<FirstChar>
      ? `${FirstChar}${TCamelToSnakeCase<Rest>}`
      : `_${Lowercase<FirstChar>}${TCamelToSnakeCase<Rest>}`
    : StringType;

// Determines which case conversion to apply based on the Direction type
// - If Direction is 'camel', converts snake_case to camelCase
// - If Direction is 'snake', converts camelCase to snake_case
type TConvertCase<
  StringType extends string,
  Direction extends 'snake' | 'camel',
> = Direction extends 'camel'
  ? TSnakeToCamelCase<StringType>
  : TCamelToSnakeCase<StringType>;

// Recursively converts keys in arrays of objects
// Applies TConvertKeys to each array element
type TConvertArrayKeys<Type, Direction extends 'snake' | 'camel'> =
  Type extends Array<infer ArrayItemType>
    ? Array<TConvertKeys<ArrayItemType, Direction>>
    : Type;

// Converts object keys based on the chosen direction (camel/snake)
// Applies TConvertCase to each key and recursively processes values
type TConvertObjectKeys<Type, Direction extends 'snake' | 'camel'> = {
  [Key in keyof Type as TConvertCase<Key & string, Direction>]: TConvertKeys<
    Type[Key],
    Direction
  >;
};

// Entry point for recursive key transformation
// - If it's an array, applies conversion to each item
// - If it's an object, applies conversion to its keys
// - If it's a primitive, returns it as-is
export type TConvertKeys<Type, Direction extends 'snake' | 'camel' = 'camel'> =
  Type extends Array<unknown>
    ? TConvertArrayKeys<Type, Direction>
    : Type extends object
      ? TConvertObjectKeys<Type, Direction>
      : Type;


