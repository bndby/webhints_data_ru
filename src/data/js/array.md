---
name: Array
theme:
lang: JS
title: Array
---

```js
[element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
```

---

1

---

Создание массива

```js
var fruits = ["Яблоко", "Банан"];
console.log(fruits.length);
// 2
```

Доступ к элементу массива по индексу

```js
var first = fruits[0];
// Яблоко
var last = fruits[fruits.length - 1];
// Банан
```

Итерирование по массиву

```js
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
// Яблоко 0
// Банан 1
```

Добавление элемента в конец массива

```js
var newLength = fruits.push("Апельсин");
// ["Яблоко", "Банан", "Апельсин"]
```

Удаление последнего элемента массива

```js
var last = fruits.pop(); // удалим Апельсин (из конца)
// ["Яблоко", "Банан"];
```

Удаление первого элемента массива

```js
var first = fruits.shift(); // удалим Яблоко (из начала)
// ["Банан"];
```

Добавление элемента в начало массива

```js
var newLength = fruits.unshift("Клубника"); // добавляет в начало
// ["Клубника", "Банан"];
```

Поиск номера элемента в массиве

```js
fruits.push("Манго");
// ["Клубника", "Банан", "Манго"]
var pos = fruits.indexOf("Банан");
// 1
```

Удаление элемента с определённым индексом

```js
var removedItem = fruits.splice(pos, 1); // так можно удалить элемент
// ["Клубника", "Манго"]
```

Удаление нескольких элементов, начиная с определённого индекса

```js
var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
console.log(vegetables);
// ["Капуста", "Репа", "Редиска", "Морковка"]
var pos = 1,
  n = 2;
var removedItems = vegetables.splice(pos, n);
// так можно удалить элементы, n определяет количество элементов для удаления,
// начиная с позиции(pos) и далее в направлении конца массива.
console.log(vegetables);
// ["Капуста", "Морковка"] (исходный массив изменён)
console.log(removedItems);
// ["Репа", "Редиска"]
```

Создание копии массива

```js
var shallowCopy = fruits.slice(); // так можно создать копию массива
// ["Клубника", "Манго"]
```

---

- [Array](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
