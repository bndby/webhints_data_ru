---
name: toTimeString
theme: Date
lang: JS
title: Date.prototype.toTimeString()
---

```js
dateObj.toTimeString();
```

---

Метод **`toTimeString()`** возвращает часть, содержащую только время объекта `Date` в виде человеко-читаемой строки на американском английском.

---

Пример: базовое использование метода `toTimeString()`

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString()); // напечатает Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toTimeString()); // напечатает 14:39:07 GMT-0600 (PDT)
```

---

- [Date.prototype.toTimeString()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString)
