---
name: hypot
theme: Math
lang: JS
title: Math.hypot()
---

```js
Math.hypot([value1[, value2[, ...]]])
```

---

Метод **`Math.hypot()`** возвращает квадратный корень суммы квадратов своих аргументов.

## Параметры

**`value1, value2, ...`**

: Числа.

---

Пример: использование метода `Math.hypot()`

```js
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(3, 4, "foo"); // NaN, +'foo' => NaN
Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
Math.hypot(-3); // 3, то же самое, что и Math.abs(-3)
```

---

- [Math.hypot()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot)
