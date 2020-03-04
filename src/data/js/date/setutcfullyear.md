---
name: setUTCFullYear
theme: Date
lang: JS
title: Date.prototype.setUTCFullYear()
---

```js
dateObj.setUTCFullYear(yearValue[, monthValue[, dayValue]])
```

---

Метод **`setUTCFullYear()`** устанавливает полный год указанной даты по всемирному координированному времени.

## Параметры

**`yearValue`**<br />
Целое число, определяющее значение года, например, `1995`.

_`monthValue`_<br />
Необязательный параметр. Целое число от `0` до `11`, представляющее месяцы от января до декабря.

_`dayValue`_<br />
Необязательный параметр. Целое число от `1` до `31`, представляющее день месяца. Если вы определите параметр `dayValue`, вы также должны определить параметр `monthValue`.

---

Пример: использование метода `setUTCFullYear()`

```js
var theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```

---

- [Date.prototype.setUTCFullYear()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear)
