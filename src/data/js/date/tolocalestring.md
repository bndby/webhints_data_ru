---
name: toLocaleString
theme: Date
lang: JS
title: Date.prototype.toLocaleString()
---

```js
dateObj.toLocaleString([locales[, options]])
```

---

Метод **`toLocaleString()`** возвращает строку с языко-зависимым представлением даты. Новые аргументы `locales` и `options` позволяют приложениям определять язык, чьи соглашения по форматированию должны использоваться, а также менять поведение этого метода.

## Параметры

_`locales`_<br />
Необязательный параметр. Строка с языковой меткой BCP 47, либо массив таких строк. Разрешены следующие ключи расширения Unicode:

- `nu`<br />
  Используемая система нумерации. Возможные значения включают в себя: "arab", "arabext", "bali", "beng", "deva", "fullwide", "gujr", "guru", "hanidec", "khmr", "knda", "laoo", "latn", "limb", "mlym", "mong", "mymr", "orya", "tamldec", "telu", "thai", "tibt".
- `ca`<br />
  Используемый календарь. Возможные значения включают в себя: "buddhist", "chinese", "coptic", "ethioaa", "ethiopic", "gregory", "hebrew", "indian", "islamic", "islamicc", "iso8601", "japanese", "persian", "roc".

_`options`_<br />
Необязательный параметр. Объект с некоторыми или всеми из следующих свойств:

- `localeMatcher`<br />
  Используемый алгоритм сопоставления локалей. Возможными значениями являются "lookup" и "best fit"; значением по умолчанию является "best fit".
- `timeZone`<br />
  Используемый часовой пояс. Единственным значением, которые реализации обязаны распознавать, является "UTC"; значением по умолчанию является часовой пояс по умолчанию среды выполнения. Реализации также могут распознавать названия часовых поясов из базы данных часовых поясов IANA, например "Asia/Shanghai", "Asia/Kolkata" или "America/New_York".
- `hour12`<br />
  Определяет, использовать ли 12-ти часовой формат времени (в противовес 24-х часовому). Возможными значениями являются `true` и `false`; значение по умолчанию зависит от локали.
- `formatMatcher`<br />
  Используемый алгоритм сопоставления форматов. Возможными значениями являются "basic" и "best fit"; значением по умолчанию является "best fit". Смотрите следующий абзац, объясняющий, как использовать это свойство.

Следующие свойства описывают компоненты даты/времени, используемые в форматированном выводе, и их желаемые представления. Реализации должны поддерживать, как минимум, следующие подмножества:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Также реализации могут поддерживать другие подмножества и запросы будут сравниваться со всеми доступными подмножествами представлений для поиска наилучшего соответствия. Для такого сравнения доступно два алгоритма, нужный из которых выбирается свойством formatMatcher: чётко определённый алгоритм "basic" и зависящий от реализации алгоритм "best fit".

- `weekday`<br />Представление дней недели. Возможными значениями являются "narrow", "short" и "long".
- `era`<br />Представление эр. Возможными значениями являются "narrow", "short" и "long".
- `year`<br />Представление лет. Возможными значениями являются "numeric" и "2-digit".
- `month`<br />Представление месяцев. Возможными значениями являются "numeric", "2-digit", "narrow", "short" и "long".
- `day`<br />Представление дней. Возможными значениями являются "numeric" и "2-digit".
- `hour`<br />Представление часов. Возможными значениями являются "numeric" и "2-digit".
- `minute`<br />Представление минут. Возможными значениями являются "numeric" и "2-digit".
- `second`<br />Представление секунд. Возможными значениями являются "numeric" и "2-digit".
- `timeZoneName`<br />Представление названий часовых поясов. Возможными значениями являются "short" и "long".

Значением по умолчанию для каждой компоненты даты-времени является `undefined`, однако, если все свойства `weekday`, `year`, `month` и `day` равны `undefined`, то их значения предполагаются равными "numeric".

---

Пример: использование метода `toLocaleString()`

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// Вывод toLocaleString() без аргументов зависит от реализации,
// локали по умолчанию и часового пояса по умолчанию
console.log(date.toLocaleString());
// → "12/11/2012, 7:00:00 PM", если код запущен с локалью en-US и часовым поясом America/Los_Angeles
```

Пример: использование аргумента `options`

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Запрашиваем день недели вместе с длинным форматом даты
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
console.log(date.toLocaleString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// Приложение может захотеть использовать UTC и показать это
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleString("en-US", options));
// → "Thursday, December 20, 2012, GMT"

// Иногда даже в США нужен 24-х часовой формат времени
console.log(date.toLocaleString("en-US", { hour12: false }));
// → "12/19/2012, 19:00:00"
```

---

- [Date.prototype.toLocaleString()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
