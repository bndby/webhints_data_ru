---
name: slice
theme: Array
lang: JS
title: Array.prototype.slice()
---

```js
arr.slice([begin[, end]])
```

---

Метод **`slice()`** возвращает новый массив, содержащий копию части исходного массива.

## Параметры

**`begin`**<br />
Индекс, по которому начинать извлечение.

**`end`**<br />
Индекс, по которому заканчивать извлечение.

## Возвращаемое значение

Новый массив содержащий извлеченные элементы

---

```js
// Пример: наши хорошие друзья цитрусовые среди фруктов
var fruits = ["Банан", "Апельсин", "Лимон", "Яблоко", "Манго"];
var citrus = fruits.slice(1, 3);

// citrus содержит ['Апельсин', 'Лимон']
```

Метод `slice()` также может использоваться для преобразования массивоподобных объектов / коллекций в новый массив `Array`.

```js
function list() {
  return Array.prototype.slice.call(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

---

- [Array.prototype.slice()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
