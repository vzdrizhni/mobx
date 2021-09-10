import {observer, useLocalObservable } from "mobx-react";
import { countStore } from '../stores/CountStoreFunction';
import React, { useEffect } from 'react';
import { runInAction } from 'mobx';

const store = countStore();

const CounterFunction = observer((props) => {

  useEffect(() => {
    runInAction(() => {
        store.counter = props.initialCount ?? 0;
    })
  }, [props.initialCount])

  return (
    <div>
      <button onClick={store.dec}>-</button>
      <span>{store.counter}</span>
      <button onClick={store.inc}>+</button>
    </div>
  );
});

export default CounterFunction;
