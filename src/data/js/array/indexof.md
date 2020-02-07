---
name: indexOf
theme: Array
lang: JS
title: Array.prototype.indexOf()
---

Метод **`indexOf()`** возвращает первый индекс, по которому данный элемент может быть найден в массиве или `-1`, если такого индекса нет.

## Синтаксис

```js
arr.indexOf(searchElement[, fromIndex = 0])
```

## Параметры

**`searchElement`**<br />
Искомый элемент в массиве.

**`fromIndex`**<br />
Индекс, с которого начинать поиск.

---

В примере `indexOf()` используется для поиска значений в массиве.

```js
var array = [2, 5, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

---

- [Array.prototype.indexOf()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
