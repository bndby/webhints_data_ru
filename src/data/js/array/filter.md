---
name: filter
theme: Array
lang: JS
title: Array.prototype.filter()
---

```js
var newArray = arr.filter( callback(element[, index[, array]])[, thisArg])
```

---

Метод **`filter()`** создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

## Параметры

**`callback`**<br />
Функция, которая будет вызвана для каждого элемента массива. Если функция возвращает `true`, то элемент остаётся в массиве, если `false`, то удаляется. В функцию будет передано три аргумента:

**`element`**<br />
Текущий обрабатываемый элемент в массиве.

_`index`_<br />
Индекс текущего обрабатываемого элемента в массиве.

_`array`_<br />
Массив, по которому осуществляется проход.

_`thisArg`_<br />
Необязательный параметр. Значение, используемое в качестве `this` при вызове функции `callback`.

## Возвращаемое значение

Вернётся новый массив с элементами, которые проходят тест, то есть `callback` вернёт `true`. Если ни один элемент не пройдет тест, то будет возвращен пустой массив.

---

Следующий пример использует `filter()` для создания отфильтрованного массива, все элементы которого больше или равны `10`, а все меньшие `10` удалены.

```js
function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// массив filtered равен [12, 130, 44]
```

В следующем примере `filter()` используется для фильтрации содержимого массива на основе входных данных

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Элементы массива фильтруется на основе критериев поиска (query)
 */
const filterItems = query => {
  return fruits.filter(
    el => el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
};

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
```

---

- [Array.prototype.filter()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
