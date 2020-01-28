---
name: from
theme: Array
lang: js
title: Array.from()
---

Метод **`Array.from()`** создаёт новый экземпляр `Array` из массивоподобного или итерируемого объекта.

## Синтаксис

```js
Array.from(arrayLike[, mapFn[, thisArg]])
```

## Параметры

`arrayLike` - Массивоподобный или итерируемый объект, преобразуемый в массив.

`mapFn` - Необязательный. Отображающая функция, вызываемая для каждого элемента массива.

`thisArg` - Необязательный. Значение, используемое в качестве `this` при выполнении функции `mapFn`.

---

```js
console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

---

- [Array.from()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
