---
name: getMinutes
theme: Date
lang: JS
title: Date.prototype.getMinutes()
---

```js
dateObj.getMinutes();
```

---

Метод **`getMinutes()`** возвращает минуты указанной даты по местному времени.

## Возвращаемое значение

Значение, возвращённое методом `getMinutes()`, является целым числом от `0` до `59`.

---

Пример: использование метода `getMinutes()`

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var minutes = Xmas95.getMinutes();

console.log(minutes); // 15
```

---

- [Date.prototype.getMinutes()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)
