---
name: reverse
theme: Array
lang: JS
title: Array.prototype.reverse()
---

```js
array.reverse();
```

```ts
reverse(): T[]; // ES5
```

---

Метод **`reverse()`** на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.

## Возвращаемое значение

Перевернутный массив

---

В следующем примере создаётся массив myArray, содержащий три элемента, а затем массив переворачивается.

```js
var myArray = ["один", "два", "три"];
myArray.reverse();

console.log(myArray); // ['три', 'два', 'один']
```

---

- [Array.prototype.reverse()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
