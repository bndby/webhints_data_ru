---
name: decodeURIComponent
theme:
lang: JS
title: decodeURIComponent()
---

```js
decodeURIComponent(encodedURI);
```

---

Метод **`decodeURIComponent()`** декодирует управляющие последовательности символов в компоненте Uniform Resource Identifier (URI), созданные с помощью метода [`encodeURIComponent`](/js/encodeuricomponent/) или другой подобной процедуры.

## Параметры

**`encodedURI`**

: Строка, содержащая закодированный компонент Uniform Resource Identifier.

## Возвращаемое значение

Новая строка, представляющая собой декодированную версию компонента Uniform Resource Identifier (URI), переданного в качестве параметра.

## Исключения

При неправильном использовании выдает исключение `URIError` ("неверный формат последовательности URI").

---

```js
function containsEncodedComponents(x) {
  // ie ?,=,&,/ etc
  return decodeURI(x) !== decodeURIComponent(x);
}

console.log(containsEncodedComponents("%3Fx%3Dtest")); // ?x=test
// expected output: true

console.log(containsEncodedComponents("%D1%88%D0%B5%D0%BB%D0%BB%D1%8B")); // шеллы
// expected output: false
```

---

- [decodeURIComponent](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
