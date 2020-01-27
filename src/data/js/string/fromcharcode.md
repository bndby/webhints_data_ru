---
name: fromCharCode
theme: String
lang: js
---

# String.fromCharCode()

Статический метод **`String.fromCharCode()`** возвращает строку, созданную из указанной последовательности значений Юникода.

```js
String.fromCharCode(num1[, ...[, numN]])
```

- `num1, ..., numN` - Последовательность чисел, являющихся значениями Юникода.

Этот метод возвращает примитивную строку, а не объект `String`.

---

```js
String.fromCharCode(65, 66, 67); // "ABC"
```

---

- [MDN String.fromCharCode()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
