---
name: find
theme: Array
lang: JS
title: Array.prototype.find()
---

Метод **`find()`** возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в `callback` функции. В противном случае возвращается `undefined`.

## Синтаксис

```js
arr.find(callback[, thisArg])
```

## Параметры

**`callback`**<br />
Функция, вызывающаяся для каждого значения в массиве, принимает три аргумента:

**`element`**
Текущий обрабатываемый элемент в массиве.

_`index`_
Индекс текущего обрабатываемого элемента в массиве.

_`array`_
Массив, по которому осуществляется проход.

_`thisArg`_
Значение, используемое в качестве `this` при выполнении функции `callback`.

## Возвращаемое значение

Значение элемента из массива, если элемент прошёл проверку, иначе `undefined`.

---

Следующий пример находит в массиве положительных чисел элемент, являющийся простым числом (либо возвращает `undefined`, если в массиве нет простых чисел).

```js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

---

- [Array.prototype.find()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
