---
name: max
theme: Math
lang: JS
title: Math.max()
---

```js
Math.max([value1[, value2[, ...]]])
```

---

Метод **`Math.max()`** возвращает наибольшее из нуля или более чисел.

## Параметры

**`value1, value2, ...`**

: Числа.

---

Пример: использование метода `Math.max()`

```js
Math.max(10, 20); //  20
Math.max(-10, -20); // -10
Math.max(-10, 20); //  20
```

Нахождение максимального элемента в массиве

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

---

- [Math.max()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
