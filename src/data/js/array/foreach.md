---
name: forEach
theme: Array
lang: JS
title: Array.prototype.forEach()
---

```js
arr.forEach(callback(currentValue[, index[, array]])[, thisArg]);
```

---

Метод **`forEach()`** выполняет указанную функцию один раз для каждого элемента в массиве.

## Синтаксис

## Параметры

**`callback`**

: Функция, которая будет вызвана для каждого элемента массива; в нее будет передано три аргумента:

**`currentValue`**

: Текущий обрабатываемый элемент в массиве.

_`index`_

: Индекс текущего обрабатываемого элемента в массиве.

_`array`_

: Массив, по которому осуществляется проход.

_`thisArg`_

: Значение, используемое в качестве `this` при вызове функции `callback`.

---

Конвертируем `for` в `forEach`

До

```js
const items = ["item1", "item2", "item3"];
const copy = [];

for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}
```

после

```js
const items = ["item1", "item2", "item3"];
const copy = [];

items.forEach(function(item) {
  copy.push(item);
});
```

---

- [Array.prototype.forEach()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
