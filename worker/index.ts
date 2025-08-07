// worker.ts
let counter = 0;
let intervalId: number | null = null;

self.onmessage = (event) => {
  const { start = 0, delay = 1000 } = event.data;
  counter = start;

  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    counter++;
    self.postMessage(counter);
  }, delay);
};

self.onerror = (e) => {
  console.error('Worker error:', e);
};


// utils/createWorkerInterval.ts
type WorkerInterval = {
  stop: () => void;
  worker: Worker;
};

export function createWorkerInterval(
  start: number,
  delay: number,
  onTick: (count: number) => void,
): WorkerInterval {
  const worker = new Worker(new URL('./counter.worker.ts', import.meta.url));

  worker.onmessage = (event: MessageEvent<number>) => {
    onTick(event.data);
  };

  worker.postMessage({ start, delay });

  const stop = () => {
    worker.terminate();
  };

  return { stop, worker };
}


// example in React
// import React, { useEffect, useRef, useState } from 'react';
// import CounterWorker from './worker';

// const CounterWithWorker = () => {
//   const workerRef = useRef<Worker | null>(null);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     workerRef.current = new CounterWorker();

//     // Обработка сообщений из воркера
//     workerRef.current.onmessage = (event: MessageEvent<number>) => {
//       setCount(event.data);
//     };

//     // Запускаем с 5 и интервалом 1000 мс
//     workerRef.current.postMessage({ start: 5, delay: 1000 });

//     return () => {
//       // Очищаем воркер при размонтировании компонента
//       if (workerRef.current) {
//         workerRef.current.terminate();
//         workerRef.current = null;
//       }
//     };
//   }, []);

//   return <div>Counter: {count}</div>;
// };

// export default CounterWithWorker;
