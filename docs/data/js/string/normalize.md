---
name: normalize
theme: String
lang: JS
title: String.prototype.normalize()
---

```js
str.normalize([form]);
```

---

Метод **`normalize()`** возвращает форму нормализации Юникода данной строки (если значение не является строкой, сначала оно будет в неё преобразовано).

## Параметры

_`form`_

: Одно из значений "`NFC`", "`NFD`", "`NFKC`" или "`NFKD`", определяющих форму нормализации Юникода. Если параметр опущен или равен `undefined`, будет использоваться значение "`NFC`".

---

```js
let valueStr = ["h", "ĥ", "æ", "ae", "g", "ġ"],
  normArr = valueStr.map(function(text) {
    return text.normalize(); // (по умолчанию 'NFC') normArr (после сортировки) -> [ae, g, h, æ, ġ, ĥ]
    //return text.normalize('NFD'); // normArr (после сортировки) -> [ae, g, ġ, h, ĥ, æ]
    //return text.normalize('NFKC'); // normArr (после сортировки) -> [ae, g, h, æ, ġ, ĥ]
    //return text.normalize('NFKD'); // normArr (после сортировки) -> [ae, g, ġ, h, ĥ, æ]
  });

//После приведение строк в нормальную форму, мы можем провести сортировку, массива:
normArr.sort(function(f, s) {
  if (f < s) {
    return -1;
  } else if (f === s) {
    return 0;
  } else {
    return 1;
  }
});

//Приведение к нормальной форме можно выполнить во время сортировки. Нормализацию при этом можно выполнять с помощью разных форм нормализации
let valueStrNorm = ["h", "s", "ĥ", "æ", "ș", "ae", "g", "ġ"];
valueStrNorm.sort(function(first, second) {
  let fN = first.normalize(),
    sN = second.normalize("NFKC");

  if (fN < sN) {
    return -1;
  } else if (fN === sN) {
    return 0;
  } else {
    return 1;
  }
});

valueStrNorm.join(", "); //-> ae, g, h, s, æ, ġ, ĥ, ș
```

---

- [String.prototype.normalize()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
