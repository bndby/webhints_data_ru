---
name: encodeURIComponent
theme:
lang: JS
title: encodeURIComponent()
---

```js
encodeURIComponent(str);
```

---

**`encodeURIComponent()`** - метод, кодирующий компонент универсального идентификатора ресурса (URI) заменой каждой определенной последовательности символов одной, двумя, тремя или четырьмя последовательностями символов, представленных в кодировке UTF-8 (будет только 4 управляющих последовательности для символов, состоящих из 2 "суррогатных" символов).

## Параметры

**`str`**

: Строка. Компонент URI.

---

```js
// низко-высокая пара - нормально
console.log(encodeURIComponent("\uD800\uDFFF"));

// один высокий суррогат бросит "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uD800"));

// один низкий суррогат бросит "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uDFFF"));
```

Пример представляет специальное кодирование, требуемое для заголовков сервера в UTF-8: Content-Disposition и Link (к примеру, имена файлов в UTF-8):

```js
var fileName = "my file(2).txt";
var header =
  "Content-Disposition: attachment; filename*=UTF-8''" +
  encodeRFC5987ValueChars(fileName);

console.log(header);
// логирует "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // Замечание: хотя RFC3986 резервирует "!", RFC5987 это не делает,
      // так что нам не нужно избегать этого
      .replace(/['()]/g, escape) // i.e., %27 %28 %29
      .replace(/\*/g, "%2A")
      // Следующее не требуется для кодирования процентов для RFC5987,
      // так что мы можем разрешить немного больше читаемости через провод: |`^
      .replace(/%(?:7C|60|5E)/g, unescape)
  );
}
```

---

- [encodeURIComponent](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
