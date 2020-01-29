---
name: repeat
theme: String
lang: JS
title: String.prototype.repeat()
---

Метод **`repeat()`** конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.

## Синтаксис

```js
str.repeat(count);
```

## Параметры

**`count`**
: Целое число от `0` до `+∞`: `[0, +∞)`, определяющее число повторений строки во вновь создаваемой и возвращаемой строке.

---

```js
"абв".repeat(-1); // RangeError
"абв".repeat(0); // ''
"абв".repeat(1); // 'абв'
"абв".repeat(2); // 'абвабв'
"абв".repeat(3.5); // 'абвабвабв' (количество будет преобразовано в целое число)
"абв".repeat(1 / 0); // RangeError

({ toString: () => "абв", repeat: String.prototype.repeat }.repeat(2));
// 'абвабв' (метод repeat() является обобщённым методом)
```

---

- [String.prototype.repeat()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
