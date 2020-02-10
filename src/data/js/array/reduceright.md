---
name: reduceRight
theme: Array
lang: JS
title: Array.prototype.reduceRight()
---

```js
array.reduceRight(callback(previousValue, currentValue[, index[, array]])[, initialValue])
```

---

Метод **`reduceRight()`** применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.

## Параметры

**`callback`**<br />
Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:

**`previousValue`**<br />
Значение, возвращённое предыдущим выполнением функции `callback`, либо значение `initialValue`, если оно предоставлено.

**`currentValue`**<br />
Текущий обрабатываемый элемент массива.

_`index`_<br />
Индекс текущего обрабатываемого элемента массива.

_`array`_<br />
Массив, для которого была вызвана функция `reduceRight`.

_`initialValue`_<br />
Объект, используемый в качестве первого аргумента при первом вызове функции `callback`.

---

Суммирование всех значений в массиве

```js
var total = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
// total == 6
```

Разворачивание массива массивов

```js
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduceRight(function(a, b) {
  return a.concat(b);
}, []);
// flattened равен [4, 5, 2, 3, 0, 1]
```

---

- [Array.prototype.reduceRight()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)
