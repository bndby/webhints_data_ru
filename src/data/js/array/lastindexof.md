---
name: lastIndexOf
theme: Array
lang: JS
title: Array.prototype.lastIndexOf()
---

```js
arr.lastIndexOf(searchElement[, fromIndex = arr.length])
```

```ts
lastIndexOf(searchElement: T, fromIndex?: number): number; // ES5
```

---

Метод **`lastIndexOf()`** возвращает последний индекс, по которому данный элемент может быть найден в массиве или `-1`, если такого индекса нет. Массив просматривается от конца к началу, начиная с индекса `fromIndex`.

## Параметры

**`searchElement`**<br />
Искомый элемент в массиве.

_`fromIndex`_<br />
Индекс, с которого начинать поиск в обратном направлении.

---

В следующем примере метод `lastIndexOf()` используется для поиска значений в массиве.

```js
var array = [2, 5, 9, 2];
array.lastIndexOf(2); // 3
array.lastIndexOf(7); // -1
array.lastIndexOf(2, 3); // 3
array.lastIndexOf(2, 2); // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3
```

---

- [Array.prototype.lastIndexOf()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
