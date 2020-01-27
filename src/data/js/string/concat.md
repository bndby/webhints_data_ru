---
name: concat
theme: String
lang: JS
---

# String.prototype.concat()

Метод **`concat()`** объединяет текст из двух или более строк и возвращает новую строку.

```js
str.concat(string2, string3[, ..., stringN])
```

- `string2...stringN` - Строки, объединяемые в эту строку.

Метод `concat()` объединяет текст из двух или более строк и возвращает новую строку.

---

```js
var hello = "Привет, ";
console.log(hello.concat("Кевин", ", удачного дня."));

/* Привет, Кевин, удачного дня. */
```

---

- [MDN String.prototype.concat()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
