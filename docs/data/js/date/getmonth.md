---
name: getMonth
theme: Date
lang: JS
title: Date.prototype.getMonth()
---

```js
dateObj.getMonth();
```

---

Метод **`getMonth()`** возвращает месяц указанной даты по местному времени, нумерация месяцев начинается с нуля для первого месяца в году.

## Возвращаемое значение

Значение, возвращённое методом `getMonth()`, является целым числом от `0` до `11`. `0` соответствует январю, `1` — февралю и так далее.

---

Пример: использование метода `getMonth()`

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var month = Xmas95.getMonth();

console.log(month); // 11
```

---

- [Date.prototype.getMonth()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)
