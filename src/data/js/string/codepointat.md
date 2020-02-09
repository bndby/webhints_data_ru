---
name: codePointAt
theme: String
lang: JS
title: String.prototype.codePointAt()
---

```js
str.codePointAt(pos);
```

---

Метод **`codePointAt()`** возвращает неотрицательное целое число, являющееся закодированным в UTF-16 значением кодовой точки.

## Параметры

**`pos`**<br />
Позиция элемента в строке, чья кодовоя точка возвращается функцией.

---

```js
"ABC".codePointAt(1); // 66
"\uD800\uDC00".codePointAt(0); // 65536

"XYZ".codePointAt(42); // undefined
```

---

- [String.prototype.codePointAt()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
