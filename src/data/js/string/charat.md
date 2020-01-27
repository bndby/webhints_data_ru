---
name: charAt
theme: String
lang: js
---

# String.prototype.charAt()

Метод **`charAt()`** возвращает указанный символ из строки.

```js
str.charAt(index);
```

- `index` - Целое число от `0` до длины строки минус `1`.

---

```js
var anyString = "Дивный новый мир";

console.log(anyString.charAt(0)); // 'Д'
console.log(anyString.charAt(1)); // 'и'
console.log(anyString.charAt(2)); // 'в'
console.log(anyString.charAt(3)); // 'н'
console.log(anyString.charAt(4)); // 'ы'
console.log(anyString.charAt(5)); // 'й'
console.log(anyString.charAt(999)); // ''
```

---

- [MDN String.prototype.charAt()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
