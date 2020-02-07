---
name: keys
theme: Array
lang: JS
title: Array.prototype.keys()
---

Метод **`keys()`** возвращает новый итератор массива `Array Iterator`, содержащий ключи каждого индекса в массиве.

## Синтаксис

```js
arr.keys();
```

---

Пример: базовое использование

```js
var arr = ["a", "b", "c"];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Пример: итератор, возвращаемый методом keys(), не пропускает дырки в массиве

```js
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // [0, 2]
console.log(denseKeys); // [0, 1, 2]
```

---

- [Array.prototype.keys()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
