---
name: trim
theme: String
lang: JS
title: String.prototype.trim()
---

Метод **`trim()`** удаляет пробельные символы с начала и конца строки. Пробельными символами в этом контексте считаются все собственно пробельные символы (пробел, табуляция, неразрывный пробел и прочие) и все символы конца строки (`LF`, `CR` и прочие).

Метод `trim()` не изменяет значение самой строки.

## Синтаксис

```js
str.trim();
```

---

```js
var orig = "   foo  ";
console.log(orig.trim()); // 'foo'

// Другой пример, в котором .trim() убирает
// пробельные символы только с одной стороны.

var orig = "foo    ";
console.log(orig.trim()); // 'foo'
```

---

- [String.prototype.trim()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
