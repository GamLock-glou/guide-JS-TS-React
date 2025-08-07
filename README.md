🧩 TypeScript Utility Toolkit
A modular, typed utility library for TypeScript + React projects. Includes advanced type transformers, handy custom React hooks, and general-purpose utility functions — all with strong type safety and zero dependencies.

📁 Structure

```
src/
├── types/         // Advanced TypeScript type utilities
├── hooks/         // Custom reusable React hooks
├── utils/         // General-purpose JS/TS utility functions
├── worker/         // custom setInterval with worker
```

📦 Exports
🔡 Type Utilities

```
export { TConvertKeys } from './types/TConvertKeys';
export { TDotNotation } from './types/TDotNotation';
```

* TConvertKeys: Recursively converts object keys between snake_case and camelCase.
* TDotNotation: Extracts dot-notation keys from nested objects.

🪝 React Hooks

```
export { useDebounce } from './hooks/useDebounce';
export { useMediaQuery } from './hooks/useMediaQuery';
export { useOutsideClick } from './hooks/useOutsideClick';
export { usePagination } from './hooks/usePagination';
export { useUploadFile } from './hooks/useUploadFile';
export { useWindowBlankAction } from './hooks/useWindowBlankAction';
export { useArray } from './hooks/useArray';
export { useToggle } from './hooks/useToggle';
export { useEventListener } from './hooks/useEventListener';
export { useCopyToClipboard } from './hooks/useCopyToClipboard';
export { useOnScreen } from './hooks/useOnScreen';
```

🧠 Common use cases covered:
* Debounce values
* Handle pagination logic
* Detect outside clicks
* Upload and preview files
* Responsive logic via media queries
* Detect when an element appears in the viewport
* And more!

🛠 General Utilities

```
export { convertKeys } from './utils/convertKeys';
export { convertToQueryParams } from './utils/convertToQueryParams';
export { debounce } from './utils/debounce';
export { throttle } from './utils/throttle';
export { isPropertyOf } from './utils/isPropertyOf';
export { isEnumValue } from './utils/isEnumValue';
```

Includes:
* Key converters
* Query string serializer
* debounce and throttle functions
* Type-safe object and enum checks

🛠 Requirements
* React 18+
* TypeScript 4.5+
* Zero external dependencies