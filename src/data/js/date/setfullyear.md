---
name: setFullYear
theme: Date
lang: JS
title: Date.prototype.setFullYear()
---

```js
dateObj.setFullYear(yearValue[, monthValue[, dayValue]])
```

---

Метод **`setFullYear()`** устанавливает полный год указанной даты по местному времени.

## Параметры


**`yearValue`**
Целое число, определяющее значение года, например, `1995`.

*`monthValue`*
Необязательный параметр. Целое число от `0` до `11`, представляющее месяцы от января до декабря.

*`dayValue`*
Необязательный параметр. Целое число от `1` до `31`, представляющее день месяца. Если вы определите параметр `dayValue`, вы также должны определить параметр `monthValue`.

## Возвращаемое значение

Текущее время в милисекундах для нового значения даты — такое же значение как и у метода `getTime()` для текущего объекта после вызова `setFullYear()`.

---

Пример: использование метода `setFullYear()`

```js
var theBigDay = new Date();
theBigDay.setFullYear(1997);
```

---

- [Date.prototype.setFullYear()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)