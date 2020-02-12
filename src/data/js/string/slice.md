---
name: slice
theme: String
lang: JS
title: String.prototype.slice()
---

```js
str.slice([start[, end]])
```

```ts
slice(start?: number, end?: number): string; // ES5
```

---

Метод **`slice()`** извлекает часть строки и возвращает новую строку.

## Параметры

_`start`_<br />
Индекс, с которого начинать извлечение (нумерация начинается с нуля). Если отрицателен, то трактуется как `sourceLength + beginSlice`, где `sourceLength` — это длина строки (например, если параметр `beginSlice` равен `-3`, то он трактуется как `sourceLength - 3`).

_`end`_<br />
Необязательный параметр. Индекс, которым заканчивать извлечение (нумерация начинается с нуля). Если опущен, `slice()` извлечёт всё до конца строки. Если отрицателен, то трактуется как `sourceLength + endSlice`, где `sourceLength` — это длина строки.

---

```js
var str1 = "Приближается утро.";
var str2 = str1.slice(4, -2);

console.log(str2); // ВЫВОД: лижается утр
```

```js
var str = "Приближается утро.";
str.slice(-3); // вернёт 'ро.'
str.slice(-3, -1); // вернёт 'ро'
str.slice(0, -1); // вернёт 'Приближается утро'
```

---

- [String.prototype.slice()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
