---
name: getFullYear
theme: Date
lang: JS
title: Date.prototype.getFullYear()
---

```js
dateObj.getFullYear();
```

---

Метод **`getFullYear()`** возвращает год указанной даты по местному времени.

## Возвращаемое значение

Значение, возвращённое методом `getFullYear()` является абсолютным числом. Для дат между `1000` и `9999` годом метод `getFullYear()` возвращает четырёхзначный номер, например, `1995`.

---

Пример: использование метода `getFullYear()`

```js
var today = new Date();
var year = today.getFullYear();
```

---

- [Date.prototype.getFullYear()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)
