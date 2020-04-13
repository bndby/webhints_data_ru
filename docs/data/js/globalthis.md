---
name: globalThis
theme:
lang: JS
title: globalThis
---

```js
globalThis;
```

---

Глобальное свойство **`globalThis`** содержит значение глобального `this`, который является глобальным объектом.

---

```js
function canMakeHTTPRequest() {
  return typeof globalThis.XMLHttpRequest === "function";
}

console.log(canMakeHTTPRequest());
// expected output (in a browser): true
```

---

- [globalThis](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/globalThis)
