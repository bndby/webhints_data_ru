---
name: setMonth
theme: Date
lang: JS
title: Date.prototype.setMonth()
---

```js
dateObj.setMonth(monthValue[, dayValue])
```

---

Метод **`setMonth()`** устанавливает месяц указанной даты по местному времени.

## Параметры

**`monthValue`**<br />
Целое число от `0` до `11`, представляющее месяцы от января до декабря.

_`dayValue`_<br />
Необязательный параметр. Целое число от `1` до `31`, представляющее день месяца.

---

Пример: использование метода `setMonth()`

```js
var theBigDay = new Date();
theBigDay.setMonth(6);
```

---

- [Date.prototype.setMonth()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth)
