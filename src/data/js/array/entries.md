---
name: entries
theme: Array
lang: JS
title: Array.prototype.entries()
---

Метод **`entries()`** возвращает новый объект итератора массива `Array Iterator`, содержащий пары ключ / значение для каждого индекса в массиве.

## Синтаксис

```js
arr.entries();
```

---

```js
var arr = ["a", "b", "c"];
var eArr = arr.entries();

console.log(eArr.next().value); // [0, 'a']
console.log(eArr.next().value); // [1, 'b']
console.log(eArr.next().value); // [2, 'c']
```

---

- [Array.prototype.entries()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
