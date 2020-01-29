---
name: padStart
theme: String
lang: JS
title: String.prototype.padStart()
---

Метод **`padStart()`** заполняет текущую строку другой строкой (несколько раз, если нужно) так, что итоговая строка достигает заданной длины. Заполнение осуществляется в начале (слева) текущей строки.

## Синтаксис

```js
str.padStart(targetLength [, padString])
```

## Параметры

**`targetLength`**
: Длина итоговой строки после дополнения текущей строки. Если значение меньше, чем длина текущей строки, текущая строка будет возвращена без изменений.

`padString`
: Необязательный. Строка для заполнения текущей строки. Если эта строка слишком длинная для заданной длины, она будет обрезана. Значение по умолчанию - "&nbsp;" (`U+0020`).

---

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

---

- [String.prototype.padStart()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
