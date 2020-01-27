---
name: isArray
theme: Array
lang: js
---

# Array.isArray()

Метод **`Array.isArray()`** возвращает `true`, если объект является массивом и `false`, если он массивом не является.

- `obj` - Объект для проверки.

**Возвращаемое значение** `true` если объект является `Array`; иначе, `false`.

---

```js
// Все следующие вызовы вернут true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// Малоизвестный факт: Array.prototype сам является массивом:
Array.isArray(Array.prototype);

// Все следующие вызовы вернут false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```

---

- [MDN Array.isArray()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [TC39 Array.isArray()](https://tc39.es/ecma262/#sec-array.isarray)
