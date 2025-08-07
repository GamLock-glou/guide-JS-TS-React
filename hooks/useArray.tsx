import { useState } from 'react';

export function useArray<T>(initial: T[] = []) {
  const [value, setValue] = useState<T[]>(initial);

  return {
    value,
    set: setValue,
    push: (item: T) => setValue(v => [...v, item]),
    remove: (index: number) => setValue(v => v.filter((_, i) => i !== index)),
    clear: () => setValue([]),
  };
}
