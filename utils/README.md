🛠️ Utility Functions
A small set of typed utility functions to simplify everyday TypeScript and JavaScript operations.

📤 convertKeys
Converts object keys between snake_case and camelCase recursively.

✅ Usage:

```
convertKeys(data, 'camel'); // snake_case ➜ camelCase
convertKeys(data, 'snake'); // camelCase ➜ snake_case
```

🔗 convertToQueryParams
Converts an object to a URL query string.

✅ Usage:
```
convertToQueryParams({ page: 1, search: 'test' });
// Output: 'page=1&search=test'
```

⏳ debounce
Creates a debounced function that delays invoking the callback.

✅ Usage:

```
const debounced = debounce(() => console.log('Run!'), 500);
debounced();
```

⏱️ throttle
Creates a throttled function that only invokes the callback at most once per interval.

✅ Usage:

```
const throttled = throttle(() => console.log('Run!'), 1000);
throttled();
```

🧪 isPropertyOf
Type-safe check if a key exists on a given object.

✅ Usage:

```
const obj = { name: 'John' };
isPropertyOf(obj, 'name'); // true
isPropertyOf(obj, 'age');  // false (type-safe)
```

🎛️ isEnumValue
Type-safe check if a value is part of an enum.

✅ Usage:

```
enum Color { Red = 'red', Blue = 'blue' }

isEnumValue('red', Color); // true
isEnumValue('green', Color); // false
```

🛠 Requirements
* TypeScript 4.5+

* No external dependencies