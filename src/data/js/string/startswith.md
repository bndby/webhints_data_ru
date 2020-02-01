---
name: startsWith
theme: String
lang: JS
title: String.prototype.startsWith()
---

Метод **`startsWith()`** определяет, начинается ли строка с символов другой строки, возвращая, соотвественно, `true` или `false`.

## Синтаксис

```js
str.startsWith(searchString[, position])
```

```ts
str.startsWith(searchString: string, position: number = 0): boolean
```

## Параметры

**`searchString`**<br />
Символы, искомые в начале данной строки.

_`position`_<br />
Позиция в строке, с которой начинать поиск строки `searchString`; по умолчанию `0`.

---

```js
var str = "Быть или не быть, вот в чём вопрос.";

console.log(str.startsWith("Быть")); // true
console.log(str.startsWith("не быть")); // false
console.log(str.startsWith("не быть", 9)); // true
```

---

- [String.prototype.startsWith()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
