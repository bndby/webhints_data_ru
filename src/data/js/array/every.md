---
name: every
theme: Array
lang: JS
title: Array.prototype.every()
---

```js
arr.every(callback(currentValue[, index[, array]])[, thisArg])
```

```ts
every(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean; // ES5
```

---

Метод **`every()`** проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

Метод возвращает `true` при любом условии для пустого массива.

## Параметры

**`callback`**<br />
Функция проверки каждого элемента, принимает три аргумента:

**`currentValue`**<br />
Текущий обрабатываемый элемент массива.

_`index`_<br />
Индекс текущего обрабатываемого элемента массива.

_`array`_<br />
Массив, по которому осуществляется проход.

_`thisArg`_<br />
Необязательный параметр. Значение, используемое в качестве `this` при выполнении функции `callback`.

## Возвращаемое значение

`true` если функция проверки возвращает `truthy` значение для каждого элемента массива. Иначе, `false`.

---

Следующий пример проверяет, являются ли все элементы массива числами, большими 10.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

Стрелочные функции предоставляют более краткий синтаксис для подобных проверок.

```js
[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true
```

---

- [Array.prototype.every()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
