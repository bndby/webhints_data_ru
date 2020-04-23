---
name: getOwnPropertySymbols
theme: Object
lang: JS
title: Object.getOwnPropertySymbols()
---

```js
Object.getOwnPropertySymbols(obj);
```

---

Метод **`Object.getOwnPropertySymbols()`** возвращает массив всех символьных свойств, найденных непосредственно на переданном объекте.

## Параметры

**`obj`**

: Объект, чьи символьные будут возвращены.

## Возвращаемое значение

Массив всех свойств символа, найденных прямо на данном объекте.

---

```js
var obj = {};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols); // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]); // Symbol(a)
```

---

- [Object.getOwnPropertySymbols()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
