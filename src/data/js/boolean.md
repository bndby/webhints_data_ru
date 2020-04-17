---
name: Boolean
theme:
lang: JS
title: Boolean
---

```js
new Boolean([value]);
```

---

## Свойства

Boolean.length
Свойство length логического значения равно 1.

Boolean.prototype
Представляет прототип конструктора объекта Boolean.

Свойства, унаследованные из Function: arity, caller, constructor, length, name

## Методы

Глобальный объект Boolean не содержит собственных методов, однако, он наследует некоторые методы из цепочки прототипов:

Методы, унаследованные из Function: apply, call, toSource, toString

## Свойства экземпляра

**`Boolean.prototype.constructor`**

: Возвращает функцию, создающую экземпляр прототипа. По умолчанию, это функция `Boolean`.

Свойства, унаследованные из `Object`: `__parent__`, `__proto__`

## Методы экземпляра

**`Boolean.prototype.toSource()`**

: Возвращает строку, содержащую исходный код объекта `Boolean`; вы можете использовать эту строку для создания эквивалентного объекта. Переопределяет метод `Object.prototype.toSource()`.

**`Boolean.prototype.toString()`**

: Возвращает строку `true` или `false`, в зависимости от значения объекта. Переопределяет метод `Object.prototype.toString()`.

**`Boolean.prototype.valueOf()`**

: Возвращает примитивное значение объекта `Boolean`. Переопределяет метод `Object.prototype.valueOf()`.

Методы, унаследованные из `Object`: `__defineGetter__`, `__defineSetter__`, `hasOwnProperty`, `isPrototypeOf`, `__lookupGetter__`, `__lookupSetter__`, `__noSuchMethod__`, `propertyIsEnumerable`, `toLocaleString`, `unwatch`, `watch`

---

## Пример: создание объектов Boolean с начальным значением, равным false

```js
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean("");
var bfalse = new Boolean(false);
```

## Пример: создание объектов Boolean с начальным значением, равным true

```js
var btrue = new Boolean(true);
var btrueString = new Boolean("true");
var bfalseString = new Boolean("false");
var bSuLin = new Boolean("Су Лин");
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```

---

- [Boolean](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
