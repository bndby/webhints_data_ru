---
name: getSeconds
theme: Date
lang: JS
title: Date.prototype.getSeconds()
---

```js
dateObj.getSeconds();
```

---

Метод **`getSeconds()`** возвращает секунды указанной даты по местному времени.

## Возвращаемое значение

Значение, возвращённое методом `getSeconds()`, является целым числом от `0` до `59`.

---

Пример: использование метода `getSeconds()`

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var seconds = Xmas95.getSeconds();

console.log(seconds); // 30
```

---

- [Date.prototype.getSeconds()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)
