---
name: map
theme: Array
lang: JS
title: Array.prototype.map()
---

```js
var new_array = arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

---

Метод **`map()`** создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

## Параметры

**`callback`**<br />
Функция, создающая элемент в новом массиве, принимает три аргумента:

**`currentValue`**<br />
Текущий обрабатываемый элемент массива.

_`index`_<br />
Индекс текущего обрабатываемого элемента в массиве.

_`array`_<br />
Массив, по которому осуществляется проход.

_`thisArg`_<br />
Значение, используемое в качестве `this` при вызове функции `callback`.

## Возвращаемое значение

Новый массив, где каждый элемент является результатом `callback` функции.

---

Следующий код берёт массив чисел и создаёт новый массив, содержащий квадратные корни чисел из первого массива.

```js
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]
```

Этот пример показывает, как использовать map на объекте строки `String` для получения массива байт в кодировке `ASCII`, представляющего значения символов:

```js
var map = Array.prototype.map;
var a = map.call("Hello World", function(x) {
  return x.charCodeAt(0);
});
// теперь a равен [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```

---

- [Array.prototype.map()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
