---
name: setDate
theme: Date
lang: JS
title: Date.prototype.setDate()
---

```js
dateObj.setDate(dayValue);
```

---

Метод **`setDate()`** устанавливает день месяца указанной даты по местному времени.

## Параметры

**`dayValue`**<br />
Целое число, представляющее номер дня в месяце.

## Возвращаемое значение

В результате выполнения функция `setDate()` изменяет текущий объект (`Date`) и возвращает количество миллисекунд от начала эпохи (1 января 1970 00:00:00 UTC) для полученного значения объекта.

---

Пример: использование метода `setDate()`

```js
var theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24); // 1962-07-24
theBigDay.setDate(32); // 1962-08-01
```

---

- [Date.prototype.setDate()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)
