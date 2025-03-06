'use client';

import { useState } from 'react';

import { printSomething } from '../utils/print-something';
import { TinyWorld } from './tiny-world';

import type { DummyType } from '../types';

const dummy: DummyType = {
  name: 'John',
  age: 30,
};

export const HelloWorld = () => {
  const [count, setCount] = useState(0);

  printSomething('Hello World');

  printSomething(dummy);

  return (
    <div className="flex flex-col items-center gap-y-2">
      <h1>Hello World</h1>
      <TinyWorld />
    </div>
  );
};
