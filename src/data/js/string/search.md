---
name: search
theme: String
lang: JS
title: String.prototype.search()
---

Метод **`search()`** выполняет поиск сопоставления между регулярным выражением и этим объектом `String`.

## Синтаксис

```js
str.search([regexp]);
```

## Параметры

**`regexp`**<br />
Необязательный параметр. Объект регулярного выражения. Если будет передан не объект регулярного выражения, он будет неявно преобразован в объект `RegExp` через вызов конструктора `new RegExp(regexp)`.

---

```js
function testInput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = " содержит ";
  } else {
    midstring = " не содержит ";
  }
  console.log(str + midstring + re);
}

var testString = "hey JuDe";
var re = /[A-Z]/g;

// выведет: hey Jude содержит /[A-Z]/g
testInput(re, testString);
```

---

- [String.prototype.search()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/search)
