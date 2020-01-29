---
name: fromCodePoint
theme: String
lang: JS
title: String.fromCodePoint()
---

Статический метод **`String.fromCodePoint()`** возвращает строку, созданную из указанной последовательности кодовых точек.

## Синтаксис

```js
String.fromCodePoint(num1[, ...[, numN]])
```

## Параметры

`num1, ..., numN` - Последовательность кодовых точек.

---

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"

String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

---

- [String.fromCodePoint()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)
