---
name: charCodeAt
theme: String
lang: js
---

# String.prototype.charCodeAt()

Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу (за исключением кодовых точек Юникода, больших 0x10000).

```js
str.charCodeAt(index);
```

- `index` - Целое число больше, либо равное `0` и меньше длины строки; если параметр не является числом, он устанавливается в `0`.

---

```js
"ABC".charCodeAt(0); // вернёт 65
```

---

- [MDN String.prototype.charCodeAt()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
