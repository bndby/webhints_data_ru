---
name: unshift
theme: Array
lang: JS
title: Array.prototype.unshift()
---

```js
arr.unshift([element1[, ...[, elementN]]])
```

```ts
unshift(...items: T[]): number; // ES5
```

---

Метод **`unshift()`** добавляет один или более элементов в начало массива и возвращает новую длину массива.

## Параметры

_`elementN`_<br />

Элементы, добавляемые в начало массива.

## Возвращаемое значение

Новое свойство `length` объекта, над которым был вызван метод `unshift`.

---

```js
var arr = [1, 2];

arr.unshift(0); // результат вызова равен 3, новой длине массива
// arr равен [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr равен [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr равен[[-3], -2, -1, 0, 1, 2]
```

---

- [Array.prototype.unshift()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
