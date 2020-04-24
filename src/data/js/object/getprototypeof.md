---
name: getPrototypeOf
theme: Object
lang: JS
title: Object.getPrototypeOf()
---

```js
Object.getPrototypeOf(obj);
```

---

Метод **`Object.getPrototypeOf()`** возвращает прототип (то есть, внутреннее свойство `[[Prototype]]`) указанного объекта.

## Параметры

**`obj`**

Объект, чей прототип будет возвращён.

---

```js
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

```
> Object.getPrototypeOf('foo')
TypeError: "foo" is not an object  // код ES5
> Object.getPrototypeOf('foo')
String.prototype                   // код ES6
```

---

- [Object.getPrototypeOf()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
