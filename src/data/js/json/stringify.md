---
name: stringify
theme: JSON
lang: JS
title: JSON.stringify()
---

```js
JSON.stringify(value[, replacer[, space]])
```

---

Метод **`JSON.stringify()`** преобразует значение JavaScript в строку JSON, возможно с заменой значений, если указана функция замены, или с включением только определённых свойств, если указан массив замены.

## Параметры

**`value`**

: Значение, преобразуемое в строку JSON.

_`replacer`_

: Если является функцией, преобразует значения и свойства по ходу их преобразования в строку; если является массивом, определяет набор свойств, включаемых в объект в окончательной строке.

_`space`_

: Делает результат красиво отформатированным (расставляя пробелы).

---

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}' or '{"y":6,"x":5}'
JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// '[1,"false",false]'

// Символы:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, function (k, v) {
  if (typeof k === "symbol") {
    return "символ";
  }
});
// '{}'
```

Пример использования параметра `replacer`

```js
var foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

JSON.stringify(foo, function (key, value) {
  if (typeof value === "string") {
    return undefined; // удаляем все строковые свойства
  }
  return value;
}); // '{"week":45,"month":7}'

JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', сохранились только свойства week и month
```

---

- [JSON.stringify()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
