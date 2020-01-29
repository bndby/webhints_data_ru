---
name: localeCompare
theme: String
lang: JS
title: String.prototype.localeCompare()
---

Метод **`localeCompare()`** возвращает число, указывающее, должна ли данная строка находиться до, после или в том же самом месте, что и строка, переданная через параметр, при сортировке этих строк.

Новые аргументы `locales` и `options` позволяют приложениям определять язык, чей порядок сортировки оно хочет использовать и настраивать поведение этой функции. В старых реализациях, игнорирующих аргументы `locales` и `options`, используемая локаль и порядок сортировки целиком зависят от реализации.

## Синтаксис

```js
str.localeCompare(compareString[, locales[, options]])
```

## Параметры

**`compareString`**
: Строка, с которой сравнивается данная.

`locales`
: Необязательный параметр. Строка с языковой меткой BCP 47, либо массив таких строк.

`options`
: Необязательный параметр. Объект с некоторыми или всеми из следующих свойств: `localeMatcher`, `usage`, `sensitivity`, `ignore­Punctua­tion`, `numeric`, `caseFirst`

---

```js
// -2, -1 или другое отрицательное значение
console.log(new Intl.Collator().compare("a", "c"));

// 2, 1 или другое положительное значение
console.log(new Intl.Collator().compare("c", "a"));

console.log(new Intl.Collator().compare("a", "a")); // 0

// отрицательное значение: в немецком буква ä идёт рядом с буквой a
console.log("ä".localeCompare("z", "de"));

// положительное значение: в шведском буква ä следует после буквы z
console.log("ä".localeCompare("z", "sv"));

// В немецком буква a является базовой для буквы ä
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// В шведском буквы ä и a являются двумя разными базовыми буквами
// положительное значение
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" }));
```

---

- [String.prototype.localeCompare()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
