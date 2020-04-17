---
name: Function
theme:
lang: JS
title: Function
---

```js
new Function([arg1[, arg2[, ...argN]],] functionBody)
```

---

## Свойства экземпляра

**`Function.arguments`**

: Массив, соответствующий аргументам, переданным в функцию. Это устаревшее свойство `Function`, используйте вместо него объект `arguments`, доступный внутри функции.

**`Function.caller`**

: Определяет функцию, вызвавшую текущую выполняющуюся функцию.

**`Function.length`**

: Определяет количество аргументов, ожидаемых функцией.

**`Function.name`**

: Имя функции.

**`Function.displayName`**

: Отображаемое имя функции.

**`Function.prototype.constructor`**

: Определяет функцию, создающую прототип объекта. Смотрите документацию по `Object.prototype.constructor`.

## Методы экземпляра

**`Function.prototype.apply()`**

: Вызывает функцию и устанавливает `this` в контекст предоставленного значения; аргументы передаются объектом `Array`.

**`Function.prototype.bind()`**

: Создаёт новую функцию, которая, при вызове, самостоятельно вызывает эту функцию в контексте предоставленного значения, с данной последовательностью аргументов, предшествующих любым аргументам, переданным в новую функцию при её вызове. Устанавливает `this` в контекст предоставленного значения.

**`Function.prototype.call()`**

: Вызывает (выполняет) функцию и устанавливает `this` в контекст предоставленного значения; аргументы передаются как есть.

**`Function.prototype.isGenerator()`**

: Возвращает `true`, если функция является генератором; в противном случае возвращает `false`.

**`Function.prototype.toSource()`**

: Возвращает строку, представляющую исходный код функции. Переопределяет метод `Object.prototype.toSource`.

**`Function.prototype.toString()`**

: Возвращает строку, представляющую исходный код функции. Переопределяет метод `Object.prototype.toString`.

---

## Пример: указание аргументов в конструкторе Function

Следующий код создаёт объект `Function`, который принимает два аргумента.

```js
// Пример может быть запущен непосредственно в вашей консоли JavaScript
// Создаём функцию, принимающую два аргумента, и возвращающую их сумму
var adder = new Function("a", "b", "return a + b");

// Вызываем функцию
adder(2, 6);
// > 8
```

Аргуметы `a` и `b` являются именами формальных аргументов, которые используются в теле функции, `return a + b`.

## Пример: рекурсивное сокращение для массового изменения DOM

Создание функции через конструктор `Function` - это один из способов динамического создания из функции неизвестного количества новых объектов с некоторым выполняемым кодом в глобальной области видимости. Следующий пример (a рекурсивное сокращение для массового изменения DOM) был бы невозможен без вызова конструктора `Function` для каждого нового запроса, если вы хотите избежать использования замыканий.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>
      Пример MDN - рекурсивное сокращение для массового изменения DOM
    </title>
    <script type="text/javascript">
      var domQuery = (function () {
        var aDOMFunc = [
          Element.prototype.removeAttribute,
          Element.prototype.setAttribute,
          CSSStyleDeclaration.prototype.removeProperty,
          CSSStyleDeclaration.prototype.setProperty,
        ];

        function setSomething(bStyle, sProp, sVal) {
          var bSet = Boolean(sVal),
            fAction = aDOMFunc[bSet | (bStyle << 1)],
            aArgs = Array.prototype.slice.call(arguments, 1, bSet ? 3 : 2),
            aNodeList = bStyle ? this.cssNodes : this.nodes;

          if (bSet && bStyle) {
            aArgs.push("");
          }
          for (
            var nItem = 0, nLen = this.nodes.length;
            nItem < nLen;
            fAction.apply(aNodeList[nItem++], aArgs)
          );
          this.follow = setSomething.caller;
          return this;
        }

        function setStyles(sProp, sVal) {
          return setSomething.call(this, true, sProp, sVal);
        }
        function setAttribs(sProp, sVal) {
          return setSomething.call(this, false, sProp, sVal);
        }
        function getSelectors() {
          return this.selectors;
        }
        function getNodes() {
          return this.nodes;
        }

        return function (sSelectors) {
          var oQuery = new Function(
            "return arguments.callee.follow.apply(arguments.callee, arguments);"
          );
          oQuery.selectors = sSelectors;
          oQuery.nodes = document.querySelectorAll(sSelectors);
          oQuery.cssNodes = Array.prototype.map.call(oQuery.nodes, function (
            oInlineCSS
          ) {
            return oInlineCSS.style;
          });
          oQuery.attributes = setAttribs;
          oQuery.inlineStyle = setStyles;
          oQuery.follow = getNodes;
          oQuery.toString = getSelectors;
          oQuery.valueOf = getNodes;
          return oQuery;
        };
      })();
    </script>
  </head>

  <body>
    <div class="testClass">Lorem ipsum</div>
    <p>Некоторый текст</p>
    <div class="testClass">dolor sit amet</div>

    <script type="text/javascript">
      domQuery(".testClass")
        .attributes("lang", "en")("title", "Risus abundat in ore stultorum")
        .inlineStyle("background-color", "black")("color", "white")(
        "width",
        "100px"
      )("height", "50px");
    </script>
  </body>
</html>
```

---

- [Function](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)
