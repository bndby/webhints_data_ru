---
name: shift
theme: Array
lang: JS
title: Array.prototype.shift()
---

```js
arr.shift();
```

---

Метод **`shift()`** удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.

---

```js
var myFish = ["ангел", "клоун", "мандарин", "хирург"];

console.log("myFish до: " + myFish);
//myFish до: ангел,клоун,мандарин,хирург

var shifted = myFish.shift();

console.log("myFish после: " + myFish);
//myFish после: клоун,мандарин,хирург

console.log("Удалён этот элемент: " + shifted);
//Удалён этот элемент: ангел
```

---

- [Array.prototype.shift()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
