---
name: push
theme: Array
lang: JS
title: Array.prototype.push()
---

```js
arr.push(element1, ..., elementN)
```

---

Метод **`push()`** добавляет один или более элементов в конец массива и возвращает новую длину массива.

## Параметры

**`elementN`**<br />
Элементы, добавляемые в конец массива.

## Возвращаемое значение

Новое значение свойства `length` объекта, для которого был вызван данный метод.

---

Следующий код создаёт массив `sports`, содержащий два элемента, а затем добавляет к нему ещё два элемента. Переменная `total` будет содержать новую длину массива.

```js
var sports = ["футбол", "бейсбол"];
var total = sports.push("американский футбол", "плавание");

console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
console.log(total); // 4
```

В этом примере используется функция `apply()` для помещения всех элементов из второго массива в первый.

```js
var vegetables = ["пастернак", "картошка"];
var moreVegs = ["сельдерей", "свёкла"];

// Сливает второй массив с первым
// Эквивалентно вызову vegetables.push('сельдерей', 'свёкла');
Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables); // ['пастернак', 'картошка', 'сельдерей', 'свёкла']
```

---

- [Array.prototype.push()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
