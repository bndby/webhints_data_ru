---
name: abbr
theme:
lang: HTML
title: abbr
---

```html
<abbr title="Расшифровка аббревиатуры">АББРЕВИАТУРА</abbr>
```

---

Тег **`<abbr>`** указывает, что последовательность символов является аббревиатурой.

## Атрибуты

Атрибут `title` имеет специальное семантическое значение, когда используется вместе с элементом `<abbr>`. Он должен содержать полную расшифровку или описание аббревиатуры.

---

```html
<!DOCTYPE html>
<html>
  <head>
    <title>abbr</title>
    <meta charset="utf-8" />
    <style>
      abbr {
        border-bottom: 1px dashed red;
        color: #000080;
      }
    </style>
  </head>

  <body>
    <p>
      <abbr>CGI</abbr> обозначается протокол, с помощью которого любые внешние
      программы взаимодействуют с веб-сервером. С помощью
      <abbr
        title="Common
    Gateway Interface, общий шлюзовый интерфейс"
        >CGI</abbr
      >
      на сервере можно выполнять программы на любом языке программирования и
      результат их действия выводить в виде веб-страницы.
    </p>
  </body>
</html>
```

---

- [`abbr`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/abbr)
