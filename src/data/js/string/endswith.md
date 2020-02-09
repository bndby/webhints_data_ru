---
name: endsWith
theme: String
lang: JS
title: String.prototype.endsWith()
---

```js
str.endsWith(searchString[, position])
```

---

Метод **`endsWith()`** определяет, заканчивается ли строка символами другой строки, возвращая, соотвественно, `true` или `false`.

## Параметры

**`searchString`**<br />
Символы, искомые в конце данной строки.

_`position`_<br />
Необязательный параметр. Искать внутри данной строки, как если бы эта строка была указанной длины; по умолчанию установлен в реальную длину строки, обрезается по диапазону, устанавливаемому длиной этой строки.

---

```js
var str = "Быть или не быть, вот в чём вопрос.";

console.log(str.endsWith("вопрос.")); // true
console.log(str.endsWith("быть")); // false
console.log(str.endsWith("быть", 16)); // true
```

---

- [String.prototype.endsWith()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
