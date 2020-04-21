---
name: create
theme: Object
lang: JS
title: Object.create()
---

```js
Object.create(proto[, propertiesObject])
```

---

Метод **`Object.create()`** создаёт новый объект с указанными объектом прототипа и свойствами.

## Параметры

**`proto`**

: Объект, который станет прототипом вновь созданного объекта.

_`propertiesObject`_

: Если указан и не равен undefined, должен быть объектом, чьи собственные перечисляемые свойства (то есть такие, которые определены на самом объекте, а не унаследованы по цепочке прототипов) указывают дескрипторы свойств, добавляемых в новый объект. Имена добавляемых свойств совпадают с именами свойств в этом объекте. Эти свойства соответствуют второму аргументу метода `Object.defineProperties()`.

## Возвращаемые значения

Новый объект с заданным прототипом и свойствами

## Выбрасываемые исключения

Выбрасывает исключение `TypeError`, если параметр `proto` не является `null` или объектом.

---

Пример: использование аргумента `propertiesObject` с `Object.create()`

```js
var o;

// создаём объект с нулевым прототипом
o = Object.create(null);

o = {};
// эквивалентно этому:
o = Object.create(Object.prototype);

// В этом примере мы создаём объект с несколькими свойствами.
// (Обратите внимание, что второй параметр отображает ключи на *дескрипторы свойств*.)
o = Object.create(Object.prototype, {
  // foo является рядовым 'свойством-значением'
  foo: { writable: true, configurable: true, value: "привет" },
  // bar является свойством с геттером и сеттером (свойством доступа)
  bar: {
    configurable: false,
    get: function () {
      return 10;
    },
    set: function (value) {
      console.log("Установка `o.bar` в", value);
    },
    /* при использовании методов доступа ES5 наш код мог бы выглядеть так:
    get function() { return 10; },
    set function(value) { console.log('Установка `o.bar` в', value); } */
  },
});

function Constructor() {}
o = new Constructor();
// эквивалентно этому:
o = Object.create(Constructor.prototype);
// Конечно, если бы в функции Constructor был бы реальный код инициализации,
// метод с Object.create() не был бы эквивалентным

// создаём новый объект, чей прототип является новым пустым объектом
// и добавляем простое свойство 'p' со значением 42
o = Object.create({}, { p: { value: 42 } });

// по умолчанию свойства НЕ ЯВЛЯЮТСЯ записываемыми, перечисляемыми или настраиваемыми:
o.p = 24;
o.p;
// 42

o.q = 12;
for (var prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// для определения свойства ES3
o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  }
);
```

---

- [Object.create()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
