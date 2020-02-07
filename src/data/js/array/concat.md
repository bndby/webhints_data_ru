---
name: concat
theme: Array
lang: JS
title: Array.prototype.concat()
---

Метод **`concat()`** возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

## Синтаксис

```js
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

## Параметры

**`valueN`**<br />
Массивы и/или значения, соединяемые в новый массив. Смотрите описание ниже.

## Возвращаемое значение

Новый экземпляр `Array`.

---

Следующий код соединяет два массива:

```js
var alpha = ["a", "b", "c"],
  numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric); // Результат: ['a', 'b', 'c', 1, 2, 3]
```

Следующий код соединяет три значения в массив:

```js
var alpha = ["a", "b", "c"];
var alphaNumeric = alpha.concat(1, [2, 3]);
console.log(alphaNumeric); // Результат: ['a', 'b', 'c', 1, 2, 3]
```

---

- [Array.prototype.concat()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)