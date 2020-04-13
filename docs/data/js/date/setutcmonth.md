---
name: setUTCMonth
theme: Date
lang: JS
title: Date.prototype.setUTCMonth()
---

```js
dateObj.setUTCMonth(monthValue[, dayValue])
```

---

Метод **`setUTCMonth()`** устанавливает месяц указанной даты по всемирному координированному времени.

## Параметры

**`monthValue`**

: Целое число от `0` до `11`, представляющее месяцы от января до декабря.

_`dayValue`_

: Необязательный параметр. Целое число от `1` до `31`, представляющее день месяца.

---

Пример: использование метода `setUTCMonth()`

```js
var theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

---

- [Date.prototype.setUTCMonth()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth)
