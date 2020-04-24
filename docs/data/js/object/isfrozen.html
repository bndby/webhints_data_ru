---
name: isFrozen
theme: Object
lang: JS
title: Object.isFrozen()
---

```js
Object.isFrozen(obj);
```

---

Метод **`Object.isFrozen()`** определяет, был ли объект заморожен.

## Параметры

**`obj`**

: Проверяемый объект.

---

```js
// Новый объект является расширяемым, так что он не заморожен.
assert(Object.isFrozen({}) === false);

// Пустой не расширяемый объект по определению заморожен.
var vacuouslyFrozen = Object.preventExtensions({});
assert(Object.isFrozen(vacuouslyFrozen) === true);

// Новый объект с одним свойством является расширяемым, поэтому он не заморожен.
var oneProp = { p: 42 };
assert(Object.isFrozen(oneProp) === false);

// Предотвращение расширения объекта всё ещё не делает его замороженным,
// поскольку свойство всё ещё остаётся настраиваемым (и записываемым).
Object.preventExtensions(oneProp);
assert(Object.isFrozen(oneProp) === false);

// ...но при удалении этого свойства объект становится замороженным по определению.
delete oneProp.p;
assert(Object.isFrozen(oneProp) === true);

// Не расширяемый объект с не записываемым, но всё ещё настраиваемым свойством, не является замороженным.
var nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", { writable: false }); // делаем свойство не записываемым
assert(Object.isFrozen(nonWritable) === false);

// Изменение свойства на не настраиваемое делает объект замороженным.
Object.defineProperty(nonWritable, "e", { configurable: false }); // делаем свойство не настраиваемым
assert(Object.isFrozen(nonWritable) === true);

// Не расширяемый объект с не настраиваемым, но всё ещё записываемым свойством, также не является замороженным.
var nonConfigurable = { release: "кракен!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", { configurable: false });
assert(Object.isFrozen(nonConfigurable) === false);

// Изменение свойства на не записываемое делает объект замороженным.
Object.defineProperty(nonConfigurable, "release", { writable: false });
assert(Object.isFrozen(nonConfigurable) === true);

// Не расширяемый объект с настраиваемым свойством доступа не является замороженным.
var accessor = {
  get food() {
    return "ням";
  },
};
Object.preventExtensions(accessor);
assert(Object.isFrozen(accessor) === false);

// ...но сделав это свойство не настраиваемым, объект становится замороженным.
Object.defineProperty(accessor, "food", { configurable: false });
assert(Object.isFrozen(accessor) === true);

// Самым же простым способом заморозить объект можно через вызов на нём метода Object.freeze.
var frozen = { 1: 81 };
assert(Object.isFrozen(frozen) === false);
Object.freeze(frozen);
assert(Object.isFrozen(frozen) === true);

// По определению, замороженный объект является не расширяемым.
assert(Object.isExtensible(frozen) === false);

// Также, по определению, замороженный объект является запечатанным.
assert(Object.isSealed(frozen) === true);
```

---

- [Object.isFrozen()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)
