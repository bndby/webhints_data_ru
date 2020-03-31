---
name: matchAll
theme: String
lang: JS
title: String.prototype.matchAll()
---

```js
str.matchAll(regexp);
```

---

Метод **`matchAll()`** возвращает итератор по всем результатам при сопоставлении строки с регулярным выражением.

## Параметры

**`regexp`**

: Объект регулярного выражения. Если объект `obj` не-RegExp, он неявно преобразуется в `RegExp` с помощью `new RegExp(obj)`.

---

```js
const regexp = RegExp("foo*", "g");
const str = "table football, foosball";

while ((matches = regexp.exec(str)) !== null) {
  console.log(`Found ${matches[0]}. Next starts at ${regexp.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
}
```

```js
var regexp = /t(e)(st(\d?))/g;
var str = 'test1test2';

str.match(regexp);
// Array ['test1', 'test2']
With matchAll you can access them:

let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

---

- [String.prototype.matchAll()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
