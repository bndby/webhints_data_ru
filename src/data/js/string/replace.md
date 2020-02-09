---
name: replace
theme: String
lang: JS
title: String.prototype.replace()
---

```js
str.replace(regexp|substr, newSubStr|function[, flags])
```

---

Метод **`replace()`** возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель. Шаблон может быть строкой или регулярным выражением, а заменитель может быть строкой или функцией, вызываемой при каждом сопоставлении.

## Параметры

**`regexp`**<br />
Объект регулярного выражения `RegExp`. Сопоставление заменяется возвращаемым значением второго параметра.

**`substr`**<br />
Строка, заменяемая на `newSubStr`. Обратите внимание, будет заменено только первое вхождение искомой строки.

**`newSubStr`**<br />
Строка, заменяющая подстроку из первого параметра. Поддерживает несколько специальных шаблонов замены.

**`function`**<br />
Функция, вызываемая для создания новой подстроки (помещаемой вместо подстроки из первого параметра).

_`flags`_<br />
Строка, задающая комбинацию флагов регулярного выражения.

---

```js
var re = /яблоки/gi;
var str = "Яблоки круглые и яблоки сочные.";
var newstr = str.replace(re, "апельсины");
console.log(newstr); // апельсины круглые и апельсины сочные.
```

```js
// Ночь перед Рождеством, Xmas - сокращение для Christmas
var str = "Twas the night before Xmas...";
var newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

```js
var re = /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+)/;
var str = "Джон Смит";
var newstr = str.replace(re, "$2, $1");
console.log(newstr); // Смит, Джон
```

---

- [String.prototype.replace()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
