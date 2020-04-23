---
name: preventExtensions
theme: Object
lang: JS
title: Object.preventExtensions()
---

```js
Object.preventExtensions(obj);
```

---

Метод **`Object.preventExtensions()`** предотвращает добавление новых свойств к объекту (то есть, предотвращает расширение этого объекта в будущем).

## Параметры

**`obj`**

: Объект, который нужно сделать нерасширяемым.

## Возвращаемое значение

Объект, который делается нерасширяемым.

---

```js
// Object.preventExtensions возвращает объект, который нужно сделать нерасширяемым.
var obj = {};
var obj2 = Object.preventExtensions(obj);
assert(obj === obj2);

// Объекты по умолчанию являются расширяемыми.
var empty = {};
assert(Object.isExtensible(empty) === true);

// ...но это может быть изменено.
Object.preventExtensions(empty);
assert(Object.isExtensible(empty) === false);

// Object.defineProperty выбрасывает исключение при добавлении нового свойства в нерасширяемый объект.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", { value: 8675309 }); // выбросит TypeError

// В строгом режиме, попытки добавить новые свойства к нерасширяемому объекту, будут выбрасывать исключение TypeError.
function fail() {
  "use strict";
  nonExtensible.newProperty = "ОШИБКА"; // выбросит TypeError
}
fail();

// РАСШИРЕНИЕ (работает только в движках, поддерживающих свойство __proto__
// (которое является устаревшим. Используйте вместо него метод Object.getPrototypeOf)):
// нерасширяемые объекты неизменны.
var fixed = Object.preventExtensions({});
fixed.__proto__ = { oh: "hai" }; // выбросит TypeError
```

---

- [Object.preventExtensions()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)
