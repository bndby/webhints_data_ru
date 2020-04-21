---
name: freeze
theme: Object
lang: JS
title: Object.freeze()
---

```js
Object.freeze(obj);
```

---

Метод **`Object.freeze()`** замораживает объект: это значит, что он предотвращает добавление новых свойств к объекту, удаление старых свойств из объекта и изменение существующих свойств или значения их атрибутов перечисляемости, настраиваемости и записываемости. В сущности, объект становится эффективно неизменным. Метод возвращает замороженный объект.

## Параметры

**`obj`**

: Объект для заморозки.

## Возвращаемое значение

Замороженный объект

---

```js
var obj = {
  prop: function () {},
  foo: "bar",
};

// Можно добавлять новые свойства, существующие свойства можно изменять или удалять
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

// Оба объекта эквивалентны, а также возвращаемый объект будет заморожен.
// Необязательно сохранять возвращаемый объект при заморозке оригинала.
var o = Object.freeze(obj);

o === obj; // true
Object.isFrozen(obj); // === true;

// Теперь все изменения будут заканчиваться с ошибкой
obj.foo = "quux"; // тихо ничего не делает
obj.quaxxor = "the friendly duck"; // тихо не добавляет свойство

// ...а в строгом режиме такие попытки вызовут выброс исключения TypeError
function fail() {
  "use strict";
  obj.foo = "sparky"; // выбросит TypeError
  delete obj.quaxxor; // выбросит TypeError
  obj.sparky = "arf"; // выбросит TypeError
}

fail();

// Попытки внести изменения через метод Object.defineProperty также выбросят исключение
Object.defineProperty(obj, "ohai", { value: 17 }); // выбросит TypeError
Object.defineProperty(obj, "foo", { value: "eit" }); // выбросит TypeError
```

---

- [Object.freeze()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
