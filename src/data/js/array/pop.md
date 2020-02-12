---
name: pop
theme: Array
lang: JS
title: Array.prototype.pop()
---

```js
arr.pop();
```

```ts
pop(): T | undefined; // ES5
```

---

Метод **`pop()`** удаляет последний элемент из массива и возвращает его значение.

## Возвращаемое значение

Последний элемент массива или `undefined`, если массив пуст.

---

Следующий код создаёт массив `myFish`, содержащий четыре элемента, а затем удаляет последний элемент.

```js
var myFish = ["ангел", "клоун", "мандарин", "хирург"];
console.log(myFish); // ['ангел', 'клоун', 'мандарин', 'хирург']

var popped = myFish.pop();
console.log(myFish); // ['ангел', 'клоун', 'мандарин']
console.log(popped); // 'хирург'
```

---

- [Array.prototype.pop()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
