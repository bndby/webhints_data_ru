---
name: lastIndexOf
theme: String
lang: JS
title: String.prototype.lastIndexOf()
---

Метод **`lastIndexOf()`** возвращает индекс последнего вхождения указанного значения в строковый объект `String`, на котором он был вызван, или `-1`, если ничего не было найдено. Поиск по строке ведётся от конца к началу, начиная с индекса `fromIndex`.

## Синтаксис

```js
str.lastIndexOf(searchValue[, fromIndex])
```

## Параметры

`searchValue`
: Строка, представляющая искомое значение.

`fromIndex`
: Необязательный параметр. Местоположение внутри строки, откуда начинать поиск, нумерация индексов идёт слева направо. Может быть любым целым числом. Значение по умолчанию установлено в `str.length`. Если оно отрицательно, трактуется как `0`. Если `fromIndex > str.length`, параметр `fromIndex` будет трактоваться как `str.length`.

---

```js
"канал".lastIndexOf("а"); // вернёт 3
"канал".lastIndexOf("а", 2); // вернёт 1
"канал".lastIndexOf("а", 0); // вернёт -1
"канал".lastIndexOf("ч"); // вернёт -1

// Метод lastIndexOf() является регистрозависимым.
// Например, следующее выражение вернёт -1:

"Cиний кит, касатка".lastIndexOf("синий"); // вернёт -1
```

---

- [String.prototype.lastIndexOf()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
