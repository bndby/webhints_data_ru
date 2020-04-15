---
name: eval
theme:
lang: JS
title: eval()
---

```js
eval(string);
```

---

Метод **`eval()`** выполняет JavaScript код, представленный строкой.

## Параметры

**`string`**

: Строка, представленная JavaScript выражением, оператором или последовательностью операторов. Выражение может содержать переменные и свойства существующих объектов.

## Возвращаемое значение

Возвращает значение выполнения кода, переданного в функцию в виде строки. Если код не возвращает ничего - будет возвращено значение `undefined`.

---

```js
console.log(eval("2 + 2"));
// expected output: 4

console.log(eval(new String("2 + 2")));
// expected output: 2 + 2

console.log(eval("2 + 2") === eval("4"));
// expected output: true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// expected output: false
```

---

- [eval](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/eval)
