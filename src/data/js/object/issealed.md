---
name: isSealed
theme: Object
lang: JS
title: Object.isSealed()
---

```js
Object.isSealed(obj);
```

---

Метод **`Object.isSealed()`** определяет, является ли объект запечатанным.

## Параметры

**`obj`**

: Проверяемый объект.

---

```js
// По умолчанию объекты не запечатаны.
var empty = {};
assert(Object.isSealed(empty) === false);

// Если вы сделаете пустой объект не расширяемым, он по определению станет запечатанным.
Object.preventExtensions(empty);
assert(Object.isSealed(empty) === true);

// То же самое не верно для не пустого объекта, пока все его свойства не станут не настраиваемыми.
var hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
assert(Object.isSealed(hasProp) === false);

// Но сделав все его свойства не настраиваемыми, объект становится запечатанным.
Object.defineProperty(hasProp, "fee", { configurable: false });
assert(Object.isSealed(hasProp) === true);

// Простейшим способом запечатать объект, конечно, является использование метода Object.seal.
var sealed = {};
Object.seal(sealed);
assert(Object.isSealed(sealed) === true);

// Запечатанный объект по определению является не расширяемым.
assert(Object.isExtensible(sealed) === false);

// Запечатанный объект может быть замороженным, но это не всегда так.
assert(Object.isFrozen(sealed) === true); // все свойства также являются не записываемыми

var s2 = Object.seal({ p: 3 });
assert(Object.isFrozen(s2) === false); // свойство 'p' всё ещё записываемое

var s3 = Object.seal({
  get p() {
    return 0;
  },
});
assert(Object.isFrozen(s3) === true); // для свойств доступа значение имеет только их настраиваемость
```

---

- [Object.isSealed()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)
