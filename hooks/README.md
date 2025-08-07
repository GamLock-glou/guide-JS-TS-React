🧩 Custom React Hooks
A collection of reusable and typed React hooks to simplify common UI and UX patterns.

🔁 useDebounce
Delays value updates until after a specified delay.

✅ Usage:
```
const debouncedValue = useDebounce(searchTerm, 500);
```

📱 useMediaQuery
Returns true or false based on a media query.

✅ Usage:

```
const isMobile = useMediaQuery('(max-width: 768px)');
```

🖱 useOutsideClick
Triggers a callback when a click occurs outside the given ref.

✅ Usage:

```
const ref = useRef(null);
useOutsideClick(ref, () => setOpen(false));
```

📚 usePagination
Handles pagination logic: current page, total pages, next/prev, etc.

✅ Usage:
```
const {
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  setPage,
} = usePagination({ total: 100, perPage: 10 });
```

📤 useUploadFile
Handles file selection and reading as text, data URL, or binary.

✅ Usage:

```
const { file, uploadFile, clearFile } = useUploadFile();

<input type="file" onChange={uploadFile} />
{file && <p>Uploaded: {file.name}</p>}
```

🪟 useWindowBlankAction
Opens a window.open(..., '_blank') and runs logic inside it (e.g., write content or redirect).

✅ Usage:

```
useWindowBlankAction(() => {
  const newWindow = window.open('', '_blank');
  if (newWindow) {
    newWindow.document.write('<h1>Hello World</h1>');
  }
});
```

🧱 useArray
Simple array operations: push, remove, clear, etc.

✅ Usage:

```
const { value, push, remove, clear } = useArray<number>([]);

push(1);
remove(0);
clear();
```

🔀 useToggle
Toggles a boolean value.

✅ Usage:

```
const [isOpen, toggle] = useToggle(false);

<button onClick={toggle}>Toggle</button>
```

🎧 useEventListener
Adds an event listener to window or any target.

✅ Usage:

```
useEventListener('resize', () => {
  console.log('Resized');
});
```

📋 useCopyToClipboard
Copies text to clipboard and returns copied state.

✅ Usage:

```
const [copied, copy] = useCopyToClipboard();

<button onClick={() => copy('Hello world')}>Copy</button>
{copied && <span>Copied!</span>}
```

👀 useOnScreen
Detects if an element is in the viewport using IntersectionObserver.

✅ Usage:

```
const [ref, isVisible] = useOnScreen<HTMLDivElement>();

<div ref={ref}>
  {isVisible ? 'Visible' : 'Not visible'}
</div>
```

🛠 Requirements
* React 18+
* TypeScript 4.5+
* No external dependencies


