# Modern-Javascript
ES5 (2009) -> ES2019

```sh
yarn test
```

```sh
jest test
```

```sh
jest
```

## ES2017
### async and await

Easier asynchronous programming with [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and the ```await``` keyword.

```
async function catchFailure() {
  try {
    await Promise.reject(new Error('failure'));
  } catch {
    return 'exception caught';
  }
  return 'never ends';
}
willFail();
```
* Result

```{fulfilled: 'exception caught'}```

```
async function throwFailure() {
  throw new Error('failure');
}
throwFailure();
```
* Result

```{rejected: 'failure'}```

* async functions always return promises.
* await turns rejected promises into exceptions.
* Exceptions inside async functions are turned into rejected promises.



## ES2019
### Nullish Coalescing ```??```

Returning the first value that isn't null or undefined.

```value ?? default```
