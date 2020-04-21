---
name: defineProperty
theme: Object
lang: JS
title: Object.defineProperty()
---

```js
Object.defineProperty(obj, prop, descriptor);
```

---

Метод **`Object.defineProperty()`** определяет новое или изменяет существующее свойство непосредственно на объекте, возвращая этот объект.

## Параметры

**`obj`**

: Объект, на котором определяется свойство.

**`prop`**

: Имя определяемого или изменяемого свойства.

**`descriptor`**

: Дескриптор определяемого или изменяемого свойства.

---

Пример: создание свойства

```js
var o = {}; // Создаём новый объект

// Пример добавления свойства к объекту через defineProperty()
// с дескриптором данных
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// Свойство 'a' существует в объекте o и имеет значение, равное 37

// Пример добавления свойства к объекту через defineProperty()
// с дескриптором доступа
var bValue = 38;
Object.defineProperty(o, "b", {
  get: function () {
    return bValue;
  },
  set: function (newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// Свойство 'b' существует в объекте o и имеет значение, равное 38
// Значение свойства o.b теперь идентично значению bValue до тех пор,
// пока свойство o.b не будет переопределено

// Вы не можете смешать два этих подхода:
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get: function () {
    return 0xdeadbeef;
  },
});
// Выкинет исключение TypeError: свойство value применимо только в
// дескрипторах данных, свойство get применимо только в дескрипторах
// доступа
```

Пример: пользовательские сеттеры и геттеры

```js
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, "temperature", {
    get: function () {
      console.log("get!");
      return temperature;
    },
    set: function (value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

---

- [Object.defineProperty()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
