---
name: copyWithin
theme: Array
lang: JS
title: Array.prototype.copyWithin()
---

```js
arr.copyWithin(target, start, end);
```

---

Метод **`copyWithin()`** копирует последовательность элементов массива внутри него в позицию, начинающуюся по индексу `target`.

Копия берётся по индексам, задаваемым вторым и третьим аргументами `start` и `end`. Аргумент `end` является необязательным и по умолчанию равен длине массива.

## Параметры

**`target`**

: Начальный индекс позиции цели, куда копировать элементы.

**`start`**

: Начальный индекс позиции источника, откуда начинать копировать элементы.

_`end`_

: Необязательный параметр. Конечный индекс позиции источника, где заканчивать копировать элементы.

---

```js
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, -2, -1);
// [4, 2, 3, 4, 5]

[].copyWithin.call({ length: 5, 3: 1 }, 0, 3);
// {0: 1, 3: 1, length: 5}

// Типизированные массивы ES6 являются подклассами Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// На платформах, которые ещё не совместимы с ES6:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

---

- [Array.prototype.copyWithin()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
