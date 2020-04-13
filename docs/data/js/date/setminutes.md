---
name: setMinutes
theme: Date
lang: JS
title: Date.prototype.setMinutes()
---

```js
dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])
```

---

Метод **`setMinutes()`** устанавливает минуты указанной даты по местному времени.

## Параметры

**`minutesValue`**

: Целое число от `0` до `59`, представляющее минуты.

_`secondsValue`_

: Необязательный параметр. Целое число от `0` до `59`, представляющее секунды. Если вы определите параметр `secondsValue`, вы также должны определить параметр `minutesValue`.

_`msValue`_

: Необязательный параметр. Целое число от `0` до `999`, представляющее миллисекунды. Если вы определите параметр `msValue`, вы также должны определить параметры `minutesValue` и `secondsValue`.

## Возвращаемое значение

Количество миллисекунд между 1 января 1970 00:00:00 UTC и обновленной датой.

---

Пример: использование метода `setMinutes()`

```js
var theBigDay = new Date();
theBigDay.setMinutes(45);
```

---

- [Date.prototype.setMinutes()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes)
