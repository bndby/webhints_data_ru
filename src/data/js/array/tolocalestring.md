---
name: toLocaleString
theme: Array
lang: JS
title: Array.prototype.toLocaleString()
---

```js
arr.toLocaleString();
```

```ts
toLocaleString(): string; // ES5
```

---

Метод **`toLocaleString()`** возвращает строковое представление элементов массива. Элементы преобразуются в строки с использованием своих собственных методов `toLocaleString` и эти строки разделяются локале-зависимой строкой (например, запятой «`,`»).

---

```js
var number = 1337;
var date = new Date();
var myArr = [number, date, "foo"];

var str = myArr.toLocaleString();

console.log(str);
// напечатает '1337,6.12.2013 19:37:35,foo',
// если работает под германской локалью (de-DE) с временной зоной Европа/Берлин
```

---

- [Array.prototype.toLocaleString()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)
