---
name: forEach
theme: Array
lang: JS
title: Array.prototype.forEach()
---

Метод **`forEach()`** выполняет указанную функцию один раз для каждого элемента в массиве.

## Синтаксис

```js
arr.forEach(
  function callback(currentValue[, index[, array]]) {
  //your iterator
}[, thisArg]);
```

## Параметры

**`callback`**<br />
Функция, которая будет вызвана для каждого элемента массива; в нее будет передано три аргумента:

**`currentValue`**<br />
Текущий обрабатываемый элемент в массиве.

**`index`**<br />
Индекс текущего обрабатываемого элемента в массиве.

**`array`**<br />
Массив, по которому осуществляется проход.

**`thisArg`**<br />
Значение, используемое в качестве `this` при вызове функции `callback`.

## Возвращаемое значение

`undefined`.

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
