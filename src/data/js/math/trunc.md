---
name: trunc
theme: Math
lang: JS
title: Math.trunc()
---

```js
Math.trunc(x);
```

---

Функция **`Math.trunc()`** возвращает целую часть числа путём удаления всех дробных знаков.

## Параметры

**`x`**

: Число.

## Возвращаемое значение

Целая часть данного числа.

---

Использование `Math.trunc()`

```js
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(0.123); //  0
Math.trunc(-0.123); // -0
Math.trunc("-1.123"); // -1
Math.trunc(NaN); // NaN
Math.trunc("foo"); // NaN
Math.trunc(); // NaN
```

---

- [Math.trunc()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
