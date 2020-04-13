---
name: getTimezoneOffset
theme: Date
lang: JS
title: Date.prototype.getTimezoneOffset()
---

```js
dateObj.getTimezoneOffset();
```

---

Метод **`getTimezoneOffset()`** возвращает смещение часового пояса относительно часового пояса UTC в минутах для текущей локали.

## Возвращаемое значение

Возвращает смещение часового пояса, являющееся разностью в минутах между временем UTC и местным временем.

---

Пример: использование метода `getTimezoneOffset()`

```js
var x = new Date();
var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
```

---

- [Date.prototype.getTimezoneOffset()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)
