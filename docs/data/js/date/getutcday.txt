---
name: getUTCDay
theme: Date
lang: JS
title: Date.prototype.getUTCDay()
---

```js
dateObj.getUTCDay();
```

---

Метод **`getUTCDay()`** возвращает день недели указанной даты по всемирному координированному времени, где `0` соответствует воскресенью.

## Возвращаемое значение

Значение, возвращённое методом `getDay()`, является целым числом, соответствующим дню недели: `0` соответствует воскресенью, `1` — понедельнику, `2` — вторнику и так далее.

---

Пример: использование метода `getUTCDay()`

```js
var today = new Date();
var weekday = today.getUTCDay();
```

---

- [Date.prototype.getUTCDay()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay)
