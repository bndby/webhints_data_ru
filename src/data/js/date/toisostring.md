---
name: toISOString
theme: Date
lang: JS
title: Date.prototype.toISOString()
---

```js
dateObj.toISOString();
```

---

Метод **`toISOString()`** возвращает строку в формате ISO (расширенный формат ISO 8601), который можно описать следующим образом: `YYYY-MM-DDTHH:mm:ss.sssZ`. Часовой пояс всегда равен UTC, что обозначено суффиксом "Z".

## Параметры

---

Пример: использование метода `toISOString()`

```js
var today = new Date("05 October 2011 14:48 UTC");
console.log(today.toISOString()); // вернёт 2011-10-05T14:48:00.000Z
```

---

- [Date.prototype.toISOString()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
