---
name: setHours
theme: Date
lang: JS
title: Date.prototype.setHours()
---

```js
dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
```

---

Метод **`setHours()`** устанавливает часы указанной даты по местному времени и возвращает количество миллисекунд, прошедших с 1 января 1970 00:00:00 по UTC до времени, представляемого обновлённым экземпляром `Date`.

## Параметры

**`hoursValue`**

: Целое число от `0` до `23`, представляющее часы.

_`minutesValue`_

: Необязательный параметр. Целое число от `0` до `59`, представляющее минуты.

_`secondsValue`_

: Необязательный параметр. Целое число от `0` до `59`, представляющее секунды. Если вы определите параметр `secondsValue`, вы также должны определить параметр `minutesValue`.

_`msValue`_

: Необязательный параметр. Целое число от `0` до `999`, представляющее миллисекунды. Если вы определите параметр `msValue`, вы также должны определить параметры `minutesValue` и `secondsValue`.

---

Пример: использование метода `setHours()`

```js
var theBigDay = new Date();
theBigDay.setHours(7);
```

---

- [Date.prototype.setHours()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)
