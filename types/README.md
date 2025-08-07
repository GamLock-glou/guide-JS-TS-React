🧩 Type Utilities
A small collection of advanced TypeScript type utilities for transforming object keys and generating dot-notation paths.

🔁 TConvertKeys
Transforms object keys recursively between snake_case and camelCase.
✅ Usage:
```
import { TConvertKeys } from './TConvertKeys';

type ApiResponse = {
  user_id: number;
  user_name: string;
  nested_data: {
    created_at: string;
  };
};

type CamelCased = TConvertKeys<ApiResponse, 'camel'>;
/*
{
  userId: number;
  userName: string;
  nestedData: {
    createdAt: string;
  };
}
*/

type SnakeCased = TConvertKeys<CamelCased, 'snake'>;
/*
{
  user_id: number;
  user_name: string;
  nested_data: {
    created_at: string;
  };
}
*/

```

🕳 TDotNotation
Generates dot-notation strings for nested object keys.

```
import { TDotNotation } from './TDotNotation';

type Example = {
  user: {
    id: number;
    profile: {
      email: string;
    };
  };
  isActive: boolean;
};

type Keys = TDotNotation<Example>;
/*
  "user"
  | "user.id"
  | "user.profile"
  | "user.profile.email"
  | "isActive"
*/
```

📘 Notes
* TConvertKeys supports both objects and arrays.
* Key conversion is recursive and type-safe.
* TDotNotation skips deep recursion into arrays by design.

🛠 Requirements
* TypeScript 4.5+
* No runtime code — types only