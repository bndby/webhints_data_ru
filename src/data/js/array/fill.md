---
name: fill
theme: Array
lang: JS
title: Array.prototype.fill()
---

```js
arr.fill(value[, start = 0[, end = this.length]])
```

---

Метод **`fill()`** заполняет все элементы массива от начального до конечного индексов одним значением.

## Параметры

**`value`**<br />
Значение, заполняющее массив.

_`start`_<br />
Начальный индекс.

_`end`_<br />
Конечный индекс.

## Возвращаемое значение

Изменённый массив.

---

```js
[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3); // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]
[].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}

// Объекты заполняются по ссылке.
var arr = Array(3).fill({}); // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

---

- [Array.prototype.fill()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
