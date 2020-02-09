---
name: flatMap
theme: Array
lang: JS
title: Array.prototype.flatMap()
---

```js
var new_array = arr.flatMap(callback(currentValue[, index[, array]])[, thisArg])
```

---

Метод **`flatMap()`** сначала применяет функцию к каждому элементу, а затем преобразует полученый результат в плоскую структуру и помещает в новый массив.

Это идентично `map` функции, с последующим применением функции `flat` с параметром `depth` равным `1`.

## Параметры

**`callback`**<br />
Функция которая производит элементы нового массива, принимает три аргумента:

**`currentValue`**<br />
Текущий обрабатываемый элемент массива.

_`index`_<br />
Индекс обрабатываемого элемента в массиве.

_`array`_<br />
Массив по которому осуществляется обход.

_`thisArg`_<br />
Значение используемое в качестве `this` при вызове функции `callback`.

## Возвращаемое значение

Новый массив, каждый элемент которого является результатом выполнения функции `callback` и "поднят" на уровень `1`.

---

`map` и `flatMap`

```js
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// выравнивается только один уровень
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

---

- [Array.prototype.flatMap()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
