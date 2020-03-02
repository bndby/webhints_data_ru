---
name: sort
theme: Array
lang: JS
title: Array.prototype.sort()
---

```js
arr.sort(compareFunction(a, b));
```

```ts
sort(compareFn?: (a: T, b: T) => number): this; // ES5
```

---

Метод **`sort()`** на месте сортирует элементы массива и возвращает отсортированный массив.

## Параметры

_`compareFunction`_<br />
Указывает функцию, определяющую порядок сортировки. Если опущен, массив сортируется в соответствии со значениями кодовых точек каждого символа Unicode, полученных путём преобразования каждого элемента в строку.

## Возвращаемое значение

Отсортированный массив. Так как массив сортируется на месте не нужно создавать новую переменную.

---

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]
```

---

- [Array.prototype.sort()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
