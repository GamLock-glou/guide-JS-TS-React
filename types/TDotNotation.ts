// Produces dot-notation paths for nested keys of a type `T`
// For example: { user: { name: string } } => 'user.name'
// Does not go deeper into arrays — only into nested objects
export type TDotNotation<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends object
    ? T[K] extends Array<unknown>
      ? `${Prefix}${Extract<K, string>}` // stop at array, return its key
      : TDotNotation<T[K], `${Prefix}${Extract<K, string>}.`> // go deeper into nested object
    : `${Prefix}${Extract<K, string>}` // for primitive types, return full path
}[keyof T];