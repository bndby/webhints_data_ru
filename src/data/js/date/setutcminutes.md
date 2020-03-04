---
name: setUTCMinutes
theme: Date
lang: JS
title: Date.prototype.setUTCMinutes()
---

```js
dateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]])
```

---

Метод **`setUTCMinutes()`** устанавливает минуты указанной даты по всемирному координированному времени.

## Параметры

**`minutesValue`**<br />
Целое число от `0` до `59`, представляющее минуты.

_`secondsValue`_<br />
Необязательный параметр. Целое число от `0` до `59`, представляющее секунды. Если вы определите параметр `secondsValue`, вы также должны определить параметр `minutesValue`.

_`msValue`_<br />
Необязательный параметр. Целое число от `0` до `999`, представляющее миллисекунды. Если вы определите параметр `msValue`, вы также должны определить параметры `minutesValue` и `secondsValue`.

---

Пример: использование метода `setUTCMinutes()`

```js
var theBigDay = new Date();
theBigDay.setUTCMinutes(43);
```

---

- [Date.prototype.setUTCMinutes()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes)
