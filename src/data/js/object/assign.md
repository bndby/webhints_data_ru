---
name: assign
theme: Object
lang: JS
title: Object.assign()
---

```js
Object.assign(target, ...sources);
```

---

Метод **`Object.assign()`** используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.

## Параметры

**`target`**

: Целевой объект.

**`sources`**

: Исходные объекты.

## Возвращаемое значение

Возвращается получившийся целевой объект.

---

### Пример: клонирование объекта

```js
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### Пример: слияние объектов

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект.
```

### Пример: наследуемые и неперечисляемые свойства не копируются

```js
var obj = Object.create(
  { foo: 1 },
  {
    // foo является унаследованным свойством.
    bar: {
      value: 2, // bar является неперечисляемым свойством.
    },
    baz: {
      value: 3,
      enumerable: true, // baz является собственным перечисляемым свойством.
    },
  }
);

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### Пример: копирование методов доступа

```js
var obj = {
  foo: 1,
  get bar() {
    return 2;
  },
};

var copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }, значением свойства copy.bar является значение, возвращаемое геттером obj.bar.

// Такой вариант функции присваивания позволяет копировать методы доступа.
function myAssign(target, ...sources) {
  sources.forEach((source) => {
    Object.defineProperties(
      target,
      Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {})
    );
  });
  return target;
}

var copy = myAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
```

---

- [Object.assign()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
