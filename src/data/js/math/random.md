---
name: random
theme: Math
lang: JS
title: Math.random()
---

```js
Math.random();
```

---

Метод **`Math.random()`** возвращает псевдослучайное число с плавающей запятой из диапазона `[0, 1)`

## Возвращаемое значение

Псевдослучайное число с плавающей запятой от `0` (включительно) до `1` (не считая).

---

Получение случайного числа в заданном интервале

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

---

- [Math.random()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
