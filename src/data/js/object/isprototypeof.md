---
name: isPrototypeOf
theme: Object
lang: JS
title: Object.prototype.isPrototypeOf()
---

```js
prototypeObj.isPrototypeOf(object);
```

---

Метод **`isPrototypeOf()`** проверяет, входит ли объект в цепочку прототипов другого объекта.

## Параметры

**`prototypeObj`**

: Объект, проверяемый на каждую ссылку в цепочке прототипов аргумента `object`.

**`object`**

: Объект, в чьей цепочке прототипов производится поиск.

---

```js
function Fee() {
  // ...
}

function Fi() {
  // ...
}
Fi.prototype = new Fee();

function Fo() {
  // ...
}
Fo.prototype = new Fi();

function Fum() {
  // ...
}
Fum.prototype = new Fo();

var fum = new Fum();
// ...

if (Fi.prototype.isPrototypeOf(fum)) {
  // здесь безопасно что-то делать
}
```

---

- [Object.prototype.isPrototypeOf()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)
