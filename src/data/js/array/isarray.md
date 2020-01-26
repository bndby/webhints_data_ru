---
name: isArray
title: Array.isArray()
theme: array
lang: js
keys:
---

# Array.isArray()

Метод **`Array.isArray()`** возвращает `true`, если объект является массивом и `false`, если он массивом не является.

- `obj` - Объект для проверки.

**Возвращаемое значение** `true` если объект является `Array`; иначе, `false`.

## Пример

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
