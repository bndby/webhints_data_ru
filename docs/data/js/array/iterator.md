---
name: iterator
theme: Array
lang: JS
title: Array.prototype[@@iterator]()
---

```js
arr[Symbol.iterator]();
```

---

Начальное значение свойства **`@@iterator`** является тем же самым функциональным объектом, что и начальное значение, возвращаемое методом `values()`.

---

```js
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
```

---

- [`Array.prototype[@@iterator]()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
