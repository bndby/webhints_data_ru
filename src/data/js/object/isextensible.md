---
name: isExtensible
theme: Object
lang: JS
title: Object.isExtensible()
---

```js
Object.isExtensible(obj);
```

---

Метод **`Object.isExtensible()`** определяет, является ли объект расширяемым (то есть, можно ли к нему добавлять новые свойства).

## Параметры

**`obj`**

: Проверяемый объект.

---

```js
// Новые объекты являются расширяемыми.
var empty = {};
assert(Object.isExtensible(empty) === true);

// ...но это может быть изменено.
Object.preventExtensions(empty);
assert(Object.isExtensible(empty) === false);

// Запечатанные объекты по определению не расширяемы.
var sealed = Object.seal({});
assert(Object.isExtensible(sealed) === false);

// Замороженные объекты также по определению не расширяемы.
var frozen = Object.freeze({});
assert(Object.isExtensible(frozen) === false);
```

---

- [Object.isExtensible()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)
