---
name: substring
theme: String
lang: JS
title: String.prototype.substring()
---

```js
str.substring(indexA[, indexB])
```

```ts
substring(start: number, end?: number): string; // ES5
```

---

Метод **`substring()`** возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.

## Параметры

**`indexA`**<br />
Целое число от `0` до длины строки, определяющее смещение в строке первого символа, который будет включён в результирующую подстроку.

_`indexB`_<br />
Необязательный параметр. Целое число от `0` до длины строки, определяющее смещение в строке первого символа, который не будет включён в результирующую подстроку.

---

```js
var anyString = "Mozilla";

// Отобразит 'Moz'
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));

// Отобразит 'lla'
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Отобразит 'Mozill'
console.log(anyString.substring(0, 6));

// Отобразит 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
```

---

- [String.prototype.substring()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
