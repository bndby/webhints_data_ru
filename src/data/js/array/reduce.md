---
name: reduce
theme: Array
lang: JS
title: Array.prototype.reduce()
---

```js
array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

---

Метод **`reduce()`** применяет функцию `reducer` к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

## Параметры

**`callback`**<br />
Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:

**`accumulator`**<br />
Аккумулятор, аккумулирующий значение, которое возвращает функция `callback` после посещения очередного элемента, либо значение `initialValue`, если оно предоставлено.

**`currentValue`**<br />
Текущий обрабатываемый элемент массива.

_`index`_<br />
Индекс текущего обрабатываемого элемента массива.

_`array`_<br />
Массив, для которого была вызвана функция `reduce`.

_`initialValue`_<br />
Объект, используемый в качестве первого аргумента при первом вызове функции `callback`.

---

Суммирование всех значений в массиве

```js
var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6
```

Суммирование значений в массиве объектов

```js
var initialValue = 0;
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue
);
// sum == 6
```

Разворачивание массива массивов

```js
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce(function(a, b) {
  return a.concat(b);
});
// flattened равен [0, 1, 2, 3, 4, 5]
```

---

- [Array.prototype.reduce()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
