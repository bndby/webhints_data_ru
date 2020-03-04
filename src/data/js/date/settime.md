---
name: setTime
theme: Date
lang: JS
title: Date.prototype.setTime()
---

```js
dateObj.setTime(timeValue);
```

---

Метод **`setTime()`** устанавливает время объекта `Date` в значение, представляемое количеством миллисекунд, прошедших с 1 января 1970 00:00:00 по UTC.

## Параметры

**`timeValue`**<br />
Целое число, представляющее количеством миллисекунд, прошедших с 1 января 1970 00:00:00 по UTC.

---

Пример: использование метода `setTime()`

```js
var theBigDay = new Date("July 1, 1999");
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

---

- [Date.prototype.setTime()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime)
