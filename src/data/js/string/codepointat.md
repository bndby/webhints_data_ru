---
name: codePointAt
theme: String
lang: JS
---

# String.prototype.codePointAt()

Метод **`codePointAt()`** возвращает неотрицательное целое число, являющееся закодированным в UTF-16 значением кодовой точки.

```js
str.codePointAt(pos);
```

- `pos` - Позиция элемента в строке, чья кодовоя точка возвращается функцией.

---

```js
"ABC".codePointAt(1); // 66
"\uD800\uDC00".codePointAt(0); // 65536

"XYZ".codePointAt(42); // undefined
```

---

- [MDN String.prototype.codePointAt()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
