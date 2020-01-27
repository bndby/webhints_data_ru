---
name: includes
theme: String
lang: JS
---

# String.prototype.includes()

Метод **`includes()`** проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно `true` или `false`.

```js
str.includes(searchString[, position])
```

- `searchString` - Строка для поиска в данной строке.
- `position` - Необязательный. Позиция в строке, с которой начинать поиск строки `searchString`, по умолчанию `0`.

Возвращает `true`, если искомая строка была найдена в данной строке; иначе `false`.

---

```js
var str = "Быть или не быть вот в чём вопрос.";

console.log(str.includes("Быть")); // true
console.log(str.includes("вопрос")); // true
console.log(str.includes("несуществующий")); // false
console.log(str.includes("Быть", 1)); // false
console.log(str.includes("БЫТЬ")); // false
```

---

- [MDN String.prototype.includes()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
