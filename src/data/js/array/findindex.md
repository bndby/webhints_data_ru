---
name: findIndex
theme: Array
lang: JS
title: Array.prototype.findIndex()
---

```js
arr.findIndex(callback(element[, index[, array]])[, thisArg])
```

---

Метод **`findIndex()`** возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается `-1`.

## Параметры

**`callback`**<br />
Функция, вызывающаяся для каждого значения в масиве, принимает три аргумента:

**`element`**<br />
Текущий обрабатываемый элемент в массиве.

_`index`_<br />
Индекс текущего обрабатываемого элемента в массиве.

_`array`_<br />
Массив, по которому осуществляется проход.

_`thisArg`_<br />
Необязательный параметр. Значение, используемое в качестве `this` при выполнении функции `callback`.

---

Следующий пример находит в массиве индекс элемента, являющийся простым числом (либо возвращает -1, если в массиве нет простых чисел).

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

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, не найдено
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```

---

- [Array.prototype.findIndex()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
