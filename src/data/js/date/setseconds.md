---
name: setSeconds
theme: Date
lang: JS
title: Date.prototype.setSeconds()
---

```js
dateObj.setSeconds(secondsValue[, msValue])
```

---

Метод **`setSeconds()`** устанавливает секунды указанной даты по местному времени.

## Параметры

**`secondsValue`**

: Целое число от `0` до `59`, представляющее количество секунд.

_`msValue`_

: Необязательный параметр. Число от `0` до `999`, представляющее количество миллисекунд.

---

Пример: использование метода `setSeconds()`

```js
var theBigDay = new Date();
theBigDay.setSeconds(30);
```

---

- [Date.prototype.setSeconds()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds)
