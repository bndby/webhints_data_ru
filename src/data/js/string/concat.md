---
name: concat
theme: String
lang: JS
title: String.prototype.concat()
---

Метод **`concat()`** объединяет текст из двух или более строк и возвращает новую строку.

## Синтаксис

```js
str.concat(string2, string3[, ..., stringN])
```

## Параметры

**`string2...stringN`**<br />
Строки, объединяемые в эту строку.

---

```js
var hello = "Привет, ";
console.log(hello.concat("Кевин", ", удачного дня."));

/* Привет, Кевин, удачного дня. */
```

---

- [String.prototype.concat()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
