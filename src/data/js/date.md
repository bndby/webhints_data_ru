---
name: Date
theme:
lang: JS
title: Date
---

```js
new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minute[, second[, millisecond]]]]]);
```

---

## Свойства

**`Date.prototype`**

: Позволяет добавлять свойства к объекту `Date`.

**[`Date.length`](/js/date/length/)**

: Значение свойства `Date.length` равно `7`. Это количество аргументов, обрабатываемых конструктором.

Свойства, унаследованные из `Function`:

: `arity`, `caller`, `constructor`, `length`, `name`

## Статические методы

**[`Date.now()`](/js/date/now/)**

: Возвращает числовое значение, соответствующее текущему времени — количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.

**[`Date.parse()`](/js/date/parse/)**

: Разбирает строковое представление даты и возвращает количество миллисекунд с 1 января 1970 года 00:00:00 по местному времени.

**[`Date.UTC()`](/js/date/utc/)**

: Принимает те же самые параметры, что и самый длиный вариант конструктора (то есть, от 2 до 7) и возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.

Методы, унаследованные из `Function`:

: `apply`, `call`, `toSource`, `toString`

## Методы экземпляра

**[`Date.prototype.getDate()`](/js/date/getdate/)**

: Возвращает день месяца (`1`-`31`) указанной даты по местному времени.

**[`Date.prototype.getDay()`](/js/date/getday/)**

: Возвращает день недели (`0`-`6`) указанной даты по местному времени.

**[`Date.prototype.getFullYear()`](/js/date/getfullyear/)**

: Возвращает год (4 цифры для 4-х значного года) указанной даты по местному времени.

**[`Date.prototype.getHours()`](/js/date/gethours/)**

: Возвращает часы (`0`-`23`) указанной даты по местному времени.

**[`Date.prototype.getMilliseconds()`](/js/date/getmilliseconds/)**

: Возвращает миллисекунды (`0`-`999`) указанной даты по местному времени.

**[`Date.prototype.getMinutes()`](/js/date/getminutes/)**

: Возвращает минуты (`0`-`59`) указанной даты по местному времени.

**[`Date.prototype.getMonth()`](/js/date/getmonth/)**

: Возвращает месяц (`0`-`11`) указанной даты по местному времени.

**[`Date.prototype.getSeconds()`](/js/date/getseconds/)**

: Возвращает секунды (`0`-`59`) указанной даты по местному времени.

**[`Date.prototype.getTime()`](/js/date/gettime/)**

: Возвращает числовое значение указанной даты как количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC (отрицательное значение для даты до этого момента).

**[`Date.prototype.getTimezoneOffset()`](/js/date/gettimezoneoffset/)**

: Возвращает смещение часового пояса в минутах для текущей локали.

**[`Date.prototype.getUTCDate()`](/js/date/getutcdate/)**

: Возвращает день месяца (`1`-`31`) указанной даты по всемирному координированному времени.

**[`Date.prototype.getUTCDay()`](/js/date/getutcday/)**

: Возвращает день недели (`0`-`6`) указанной даты по всемирному координированному времени.

**[`Date.prototype.getUTCFullYear()`](/js/date/getutcfullyear/)**

: Возвращает год (4 цифры для 4-х значного года) указанной даты по всемирному координированному времени.

**[`Date.prototype.getUTCHours()`](/js/date/getutchours/)**

: Возвращает часы (`0`-`23`) указанной даты по всемирному координированному времени.

**[`Date.prototype.getUTCMilliseconds()`](/js/date/getutcmilliseconds/)**

: Возвращает миллисекунды (`0`-`999`) указанной даты по всемирному координированному времени.

**[`Date.prototype.getUTCMinutes()`](/js/date/getutcminutes/)**

: Возвращает минуты (`0`-`59`) указанной даты по всемирному координированному времени.

**[`Date.prototype.getUTCMonth()`](/js/date/getutcmonth/)**

: Возвращает месяц (`0`-`11`) указанной даты по всемирному координированному времени.

**[`Date.prototype.getUTCSeconds()`](/js/date/getutcseconds/)**

: Возвращает секунды (`0`-`59`) указанной даты по всемирному координированному времени.

**[`Date.prototype.setDate()`](/js/date/setdate/)**

: Устанавливает день месяца указанной даты по местному времени.

**[`Date.prototype.setFullYear()`](/js/date/setfullyear/)**

: Устанавливает полный год (4 цифры для 4-х значного года) указанной даты по местному времени.

**[`Date.prototype.setHours()`](/js/date/sethours/)**

: Устанавливает часы указанной даты по местному времени.

**[`Date.prototype.setMilliseconds()`](/js/date/setmilliseconds/)**

: Устанавливает миллисекунды указанной даты по местному времени.

**[`Date.prototype.setMinutes()`](/js/date/setminutes/)**

: Устанавливает минуты указанной даты по местному времени.

**[`Date.prototype.setMonth()`](/js/date/setmonth/)**

: Устанавливает месяц указанной даты по местному времени.

**[`Date.prototype.setSeconds()`](/js/date/setseconds/)**

: Устанавливает секунды указанной даты по местному времени.

**[`Date.prototype.setTime()`](/js/date/settime/)**

: Устанавливает объект `Date` во время, представляемое количеством миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC (отрицательное значение устанавливает даты до этого момента).

**[`Date.prototype.setUTCDate()`](/js/date/setutcdate/)**

: Устанавливает день месяца указанной даты по всемирному координированному времени.

**[`Date.prototype.setUTCFullYear()`](/js/date/setutcfullyear/)**

: Устанавливает полный год (4 цифры для 4-х значного года) указанной даты по всемирному координированному времени.

**[`Date.prototype.setUTCHours()`](/js/date/setutchours/)**

: Устанавливает часы указанной даты по всемирному координированному времени.

**[`Date.prototype.setUTCMilliseconds()`](/js/date/setutcmilliseconds/)**

: Устанавливает миллисекунды указанной даты по всемирному координированному времени.

**[`Date.prototype.setUTCMinutes()`](/js/date/setutcminutes/)**

: Устанавливает минуты указанной даты по всемирному координированному времени.

**[`Date.prototype.setUTCMonth()`](/js/date/setutcmonth/)**

: Устанавливает месяц указанной даты по всемирному координированному времени.

**[`Date.prototype.setUTCSeconds()`](/js/date/setutcseconds/)**

: Устанавливает секунды указанной даты по всемирному координированному времени.

**[`Date.prototype.setYear()`](/js/date/setyear/)**

: Устанавливает год (обычно 2-3 цифры) указанной даты по всемирному координированному времени. Вместо него используйте метод `setFullYear()`.

**[`Date.prototype.toDateString()`](/js/date/todatestring/)**

: Возвращает часть, содержащую только дату объекта `Date` в качестве человеко-читаемой строки.

**[`Date.prototype.toISOString()`](/js/date/toisostring/)**

: Преобразует дату в строку, следуя расширенному формату ISO 8601.

**[`Date.prototype.toJSON()`](/js/date/tojson/)**

: Возвращает строку, представляющую объект `Date`, используя метод `toISOString()`. Предназначен для использования методом JSON.`stringify()`.

**[`Date.prototype.toGMTString()`](/js/date/togmtstring/)**

: Возвращает строку, представляющую объект `Date`, на основе часового пояса GMT (всемирное время). Вместо него используйте метод `toUTCString()`.

**[`Date.prototype.toLocaleDateString()`](/js/date/tolocaledatestring/)**

: Возвращает строку с датой, чьё представление зависит от системных настроек локали.

**[`Date.prototype.toLocaleFormat()`](/js/date/tolocaleformat/)**

: Преобразует дату в строку, используя строку форматирования.

**[`Date.prototype.toLocaleString()`](/js/date/tolocalestring/)**

: Возвращает строку, чьё представление зависит от настроек локали. Переопределяет метод `Object.prototype.toLocaleString()`.

**[`Date.prototype.toLocaleTimeString()`](/js/date/tolocaletimestring/)**

: Возвращает строку со временем, чьё представление зависит от системных настроек локали.

**[`Date.prototype.toSource()`](/js/date/tosource/)**

: Возвращает строковое представление исходного кода эквивалентного объекта `Date`; вы можете использовать это значение для создания нового объекта. Переопределяет метод `Object.prototype.toSource()`.

**[`Date.prototype.toString()`](/js/date/tostring/)**

: Возвращает строковое представление указанного объекта `Date`. Переопределяет метод `Object.prototype.toString()`.

**[`Date.prototype.toTimeString()`](/js/date/totimestring/)**

: Возвращает часть, содержащую только время объекта `Date` в качестве человеко-читаемой строки.

**[`Date.prototype.toUTCString()`](/js/date/toutcstring/)**

: Преобразует дату в строку, используя часовой пояс UTC.

**[`Date.prototype.valueOf()`](/js/date/valueof/)**

: Возвращает примитивное значение объекта `Date`. Переопределяет метод `Object.prototype.valueOf()`.

Методы, унаследованные из `Object`:

: `__defineGetter__`, `__defineSetter__`, `hasOwnProperty`, `isPrototypeOf`, `__lookupGetter__`, `__lookupSetter__`, `__noSuchMethod__`, `propertyIsEnumerable`, `unwatch`, `watch`

---

Пример/ несколько способов создания объекта `Date`

```js
var today = new Date();
var birthday = new Date("December 17, 1995 03:24:00");
var birthday = new Date("1995-12-17T03:24:00");
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);
```

Следующие примеры показывают, как определить разницу во времени между двумя датами в JavaScript:

```js
// Используя объекты Date
var start = Date.now();

// Событие, для которого замеряется время, происходит тут:
doSomethingForALongTime();
var end = Date.now();
// затраченное время в миллисекундах
var elapsed = end - start;
// Используя встроенные методы
var start = new Date();

// Событие, для которого замеряется время, происходит тут:
doSomethingForALongTime();
var end = new Date();
// затраченное время в миллисекундах
var elapsed = end.getTime() - start.getTime();
// Проверяет функцию и возвращает её возвращаемое значение
function printElapsedTime(fTest) {
  var nStartTime = Date.now(),
    vReturn = fTest(),
    nEndTime = Date.now();

  console.log(
    "Затраченное время: " + String(nEndTime - nStartTime) + " миллисекунд"
  );
  return vReturn;
}

yourFunctionReturn = printElapsedTime(yourFunction);
```

Получить количество секунд с начало эпохи Unix

```js
var seconds = Math.floor(Date.now() / 1000);
```

---

- [Date](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date)
