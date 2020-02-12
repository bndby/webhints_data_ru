---
name: some
theme: Array
lang: JS
title: Array.prototype.some()
---

```js
arr.some(callback(element[, index[, array]])[, thisArg])
```

```ts
some(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean; // ES5
```

---

Метод **`some()`** проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

## Параметры

**`callback`**<br />
Функция проверки каждого элемента, принимает три аргумента:

**`element`**<br />
Текущий обрабатываемый элемент массива.

_`index`_<br />
Индекс текущего обрабатываемого элемента массива.

_`array`_<br />
Массив, по которому осуществляется проход.

_`thisArg`_<br />
Значение, используемое в качестве `this` при выполнении функции `callback`.

## Возвращаемое значение

`true`, если функция проверки возвращает truthy значение хотя бы для одного элемента массива. Иначе, `false`.

Метод возвращает `false` при любом условии для пустого массива.

---

Следующий пример проверяет наличие в массиве элемента, который больше `10`.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

Стрелочные функции предоставляют более краткий синтаксис для подобных проверок.

```js
[2, 5, 8, 1, 4].some(elem => elem > 10); // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true
```

---

- [Array.prototype.some()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
