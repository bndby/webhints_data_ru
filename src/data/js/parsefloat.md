---
name: parseFloat
theme:
lang: JS
title: parseFloat()
---

```js
parseFloat(строка);
```

---

Функция **`parseFloat()`** принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)

## Параметры

**`строка`**

: Текстовая строка, из которой вам надо выделить десятичное число.

## Возвращаемое значение

Число с плавающей точкой, полученное из строки. Если первый символ не может быть сконвертирован в число, то возвращается `NaN`.

---

```js
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// expected output: 28.695307297889173

console.log(circumference("4.567abcdefgh"));
// expected output: 28.695307297889173

console.log(circumference("abcdefgh"));
// expected output: NaN
```

---

- [parseFloat](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
