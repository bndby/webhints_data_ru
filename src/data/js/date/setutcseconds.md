---
name: setUTCSeconds
theme: Date
lang: JS
title: Date.prototype.setUTCSeconds()
---

```js
dateObj.setUTCSeconds(secondsValue[, msValue])
```

---

Метод **`setUTCSeconds()`** устанавливает секунды указанной даты по всемирному координированному времени.

## Параметры

**`secondsValue`**

: Целое число от `0` до `59`, представляющее количество секунд.

_`msValue`_

: Необязательный параметр. Число от `0` до `999`, представляющее количество миллисекунд.

---

Пример: использование метода `setUTCSeconds()`

```js
var theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

---

- [Date.prototype.setUTCSeconds()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds)
