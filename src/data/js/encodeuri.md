---
name: encodeURI
theme:
lang: JS
title: encodeURI()
---

```js
encodeURI(URI);
```

---

Метод **`encodeURI()`** кодирует универсальный идентификатор ресурса (URI), замещая некоторые символы на одну, две, три или четыре управляющие последовательности, представляющие UTF-8 кодировку символа (четыре управляющие последовательности будут использованы только для символов, состоящих из двух «суррогатных» символов).

## Параметры

**`URI`**

: Полный URI.

## Возвращаемое значение

Новая строка, представляющая собой строку-параметр, закодированную в виде универсального идентификатора ресурса (URI).

---

```js
const uri = "https://mozilla.org/?x=шеллы";
const encoded = encodeURI(uri);
console.log(encoded);
// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // expected output: "https://mozilla.org/?x=шеллы"
} catch (e) {
  // catches a malformed URI
  console.error(e);
}
```

---

- [encodeURI](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
