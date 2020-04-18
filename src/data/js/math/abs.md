---
name: abs
theme: Math
lang: JS
title: Math.abs()
---

```js
Math.abs(x);
```

---

Метод **`Math.abs()`** возвращает абсолютное значение числа.

## Параметры

**`x`**

: Число.

---

Пример: поведение метода `Math.abs()`

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

---

- [Math.abs()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
