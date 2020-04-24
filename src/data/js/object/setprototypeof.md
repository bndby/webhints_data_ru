---
name: setPrototypeOf
theme: Object
lang: JS
title: Object.setPrototypeOf()
---

```js
Object.setPrototypeOf(obj, prototype);
```

---

Метод **`Object.setPrototypeOf()`** устанавливает прототип (то есть, внутреннее свойство `[[Prototype]]`) указанного объекта в другой объект или `null`.

## Параметры

**`obj`**

: Объект, которому устанавливается прототип.

**`prototype`**

: Новый прототип объекта (объект или `null`).

---

Пример: присоединение цепочки к прототипу

```js
var dict = Object.setPrototypeOf({}, null);
```

---

- [Object.setPrototypeOf()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
