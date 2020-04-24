---
name: is
theme: Object
lang: JS
title: Object.is()
---

```js
var isSame = Object.is(value1, value2);
```

---

Метод **`Object.is()`** определяет, являются ли два значения одинаковыми значениями.

## Параметры

**`value1`**

: Первое сравниваемое значение.

**`value2`**

: Второе сравниваемое значение.

---

```js
Object.is("foo", "foo"); // true
Object.is(window, window); // true

Object.is("foo", "bar"); // false
Object.is([], []); // false

var test = { a: 1 };
Object.is(test, test); // true

Object.is(null, null); // true

// Специальные случаи
Object.is(0, -0); // false
Object.is(-0, -0); // true
Object.is(NaN, 0 / 0); // true
```

---

- [Object.is()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
