---
name: endsWith
theme: String
lang: JS
---

# String.prototype.endsWith()

Метод **`endsWith()`** определяет, заканчивается ли строка символами другой строки, возвращая, соотвественно, `true` или `false`.

```js
str.endsWith(searchString[, position])
```

- `searchString` - Символы, искомые в конце данной строки.
- `position` - Необязательный параметр. Искать внутри данной строки, как если бы эта строка была указанной длины; по умолчанию установлен в реальную длину строки, обрезается по диапазону, устанавливаемому длиной этой строки.

Этот метод позволяет вам определять, заканчивается ли или нет строка символами другой строки.

---

```js
var str = "Быть или не быть, вот в чём вопрос.";

console.log(str.endsWith("вопрос.")); // true
console.log(str.endsWith("быть")); // false
console.log(str.endsWith("быть", 16)); // true
```

---

- [MDN String.prototype.endsWith()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)