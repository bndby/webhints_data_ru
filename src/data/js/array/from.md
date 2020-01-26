---
name: from
title: Array.from()
theme: array
lang: js
keys:
---

# Array.from()

Метод **`Array.from()`** создаёт новый экземпляр `Array` из массивоподобного или итерируемого объекта.

## Пример

```js
console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```
