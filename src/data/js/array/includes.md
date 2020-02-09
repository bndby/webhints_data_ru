---
name: includes
theme: Array
lang: JS
title: Array.prototype.includes()
---

```js
arr.includes(searchElement[, fromIndex = 0])
```

---

Метод **`includes()`** определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого `true` или `false`.

## Параметры

**`searchElement`**<br />
Искомый элемент.

_`fromIndex`_<br />
Позиция в массиве, с которой начинать поиск элемента `searchElement`. При отрицательных значениях поиск производится начиная с индекса `array.length + fromIndex` по возрастанию. Значение по умолчанию равно `0`.

---

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

Если `fromIndex` больше или равен длине массива, то возвращается `false`. При этом поиск не производится.

```js
var arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

---

- [Array.prototype.includes()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
