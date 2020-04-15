---
name: match
theme: String
lang: JS
title: String.prototype.match()
---

```js
str.match(regexp);
```

---

Метод **`match()`** возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.

## Параметры

**`regexp`**

: Объект регулярного выражения. Если будет передан объект `obj`, не являющийся регулярным выражением, он будет неявно преобразован в объект `RegExp` через вызов конструктора `new RegExp(obj)`.

## Возвращаемое значение

Объект `Array`, содержащий результаты сопоставления, или `null`, если ничего не было сопоставлено.

---

```js
var str = "Глава 3.4.5.1 содержит дополнительную информацию";
var re = /(глава \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

// выведет [ 'Глава 3.4.5.1',
// 'Глава 3.4.5.1',
// '.1',
// index: 0,
// input: 'Глава 3.4.5.1 содержит дополнительную информацию' ]

var str = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯабвгдеёжзийклмнопрстуфхцчшщьыъэюя";
var regexp = /[А-Д]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['А', 'Б', 'В', 'Г', 'Д', 'а', 'б', 'в', 'г', 'д']
```

---

- [String.prototype.match()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/match)
