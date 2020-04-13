---
name: values
theme: Array
lang: JS
title: Array.prototype.values()
---

```js
arr.values();
```

---

Метод **`values()`** возвращает новый объект итератора массива `Array Iterator`, содержащий значения для каждого индекса в массиве.

---

```js
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr.values();
// ваш браузер должен поддерживать цикл for...of и переменные,
// объявленные через let в циклах for
for (let letter of eArr) {
  console.log(letter);
}
```

---

- [Array.prototype.values()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/values)
