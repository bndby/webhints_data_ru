---
name: log
theme: Math
lang: JS
title: Math.log()
---

```js
Math.log(x);
```

---

Метод **`Math.log()`** возвращает натуральный (по основанию `e`) логарифм числа

## Параметры

**`x`**

: Число.

---

Пример: использование метода `Math.log()`

```js
Math.log(-1); // NaN, выход за пределы диапазона
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
```

Пример: использование метода M`ath.log()` с различными основаниями

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

---

- [Math.log()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/log)
