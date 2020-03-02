---
name: getDate
theme: Date
lang: JS
title: Date.prototype.getDate()
---

```js
dateObj.getDate();
```

---

Метод **`getDate()`** возвращает день месяца указанной даты по местному времени.

## Возвращаемое значение

Значение, возвращённое методом `getDate()`, является целым числом от `1` до `31`.

---

Пример: использование метода `getDate()`

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var day = Xmas95.getDate();

console.log(day); // 25
```

---

- [Date.prototype.getDate()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)
