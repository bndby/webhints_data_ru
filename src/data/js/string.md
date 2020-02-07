---
name: string
theme:
lang: JS
title: String
---

Глобальный объект **`String`** является конструктором строк, или, последовательностей символов.

## Свойства

**`String.prototype`**<br />
Позволяет добавлять свойства к объекту `String`.

Свойства, унаследованные из `Function`:<br />
`caller`, `constructor`, `length`, `name`

## Статические методы

**`String.fromCharCode()`**<br />
Возвращает строку, созданную из указанной последовательности значений Юникода.

**`String.fromCodePoint()`**<br />
Возвращает строку, созданную из указанной последовательности кодовых точек Юникода.

**`String.raw()`**<br />
Возвращает строку, созданную из сырой шаблонной строки.

Методы, унаследованные из `Function`:
`apply`, `call`, `toSource`, `toString`

## Свойства экземпляра

**`String.prototype.constructor`**<br />
Определяет функцию, создающую прототип этого объекта.

**`String.prototype.length`**
Отражает длину строки.

## Методы экземпляра

**`String.prototype.charAt()`**
Возвращает символ по указанному индексу.

**`String.prototype.charCodeAt()`**
Возвращает число, представляющее значение символа в Юникоде по указанному индексу.

**`String.prototype.codePointAt()`**
Возвращает неотрицательное целое число, представляющее закодированную в UTF-16 кодовую точку значения по указанной позиции.

**`String.prototype.concat()`**
Объединяет текст двух строк и возвращает новую строку.

**`String.prototype.includes()`**
Определяет, находится ли строка внутри другой строки.

**`String.prototype.endsWith()`**
Определяет, заканчивается ли строка символами другой строки.

**`String.prototype.indexOf()`**
Возвращает индекс первого вхождения указанного значения в объекте `String`, на котором был вызван этот метод, или `-1`, если вхождений нет.

**`String.prototype.lastIndexOf()`**
Возвращает индекс последнего вхождения указанного значения в объекте `String`, на котором был вызван этот метод, или `-1`, если вхождений нет.

**`String.prototype.localeCompare()`**
Возвращает число, указывающее, находится ли образцовая строка до, после или на том же самом месте, что и указанная строка в порядке сортировки.

**`String.prototype.match()`**
Используется для сопоставления строке регулярного выражения.

**`String.prototype.matchAll()`**
Возвращает итератор по всем результатам при сопоставлении строки с регулярным выражением.

**`String.prototype.normalize()`**
Возвращает форму нормализации Юникода для строкового значения.

**`String.prototype.quote()`**
Оборачивает строку в двойные кавычки ("`"`").

**`String.prototype.repeat()`**
Возвращает строку. состоящую из элементов объекта, повторённых указанное количество раз.

**`String.prototype.replace()`**
Используется для сопоставления строке регулярного выражения и для замены совпавшей подстроки на новую подстроку.

**`String.prototype.search()`**
Выполняет поиск совпадения регулярного выражения со строкой.

**`String.prototype.slice()`**
Извлекает часть строки и возвращает новую строку.

**`String.prototype.split()`**
Разбивает объект `String` на массив строк, разделёных указанной строкой на подстроки.

**`String.prototype.startsWith()`**
Определяет, начинается ли строка символами другой строки.

**`String.prototype.substr()`**
Возвращает указанное количество символов в строке, начинающихся с указанной позиции.

**`String.prototype.substring()`**
Возвращает символы в строке между двумя индексами.

**`String.prototype.toLocaleLowerCase()`**
Приводит символы в строке к нижнему регистру согласно текущей локали. Для большинства языков, метод делает то же самое, что и метод `toLowerCase()`.

**`String.prototype.toLocaleUpperCase()`**
Приводит символы в строке к верхнему регистру согласно текущей локали. Для большинства языков, метод делает то же самое, что и метод `toUpperCase()`.

**`String.prototype.toLowerCase()`**
Возвращает строковое значение с символами в нижнем регистре.

**`String.prototype.toSource()`**
Возвращает литерал объекта, представляющий указанный объект; вы можете использовать это значениедля создания нового объекта. Переопределяет метод `Object.prototype.toSource()`.

**`String.prototype.toString()`**
Возвращает строковое представление указаного объекта. Переопределяет метод `Object.prototype.toString()`.

**`String.prototype.toUpperCase()`**
Возвращает строковое значение с символами в верхнем регистре.

**`String.prototype.trim()`**
Обрезает пробельные символы в начале и в конце строки. Часть стандарта ECMAScript 5.

**`String.prototype.trimLeft()`**
Обрезает пробельные символы с левой стороны строки.

**`String.prototype.trimRight()`**
Обрезает пробельные символы с правой стороны строки.

**`String.prototype.valueOf()`**
Возвращает примитивное значение указанного объекта. Переопределяет метод `Object.prototype.valueOf()`.

`String.prototype[@@iterator]()`
Возвращает новый объект итератора `Iterator`, который итерируется по кодовым точкам строки и возвращает каждую кодовую точку в виде строкового значения.

---

Строковые литералы могут быть следующих форм:

```js
"строка текста";
"строка текста";
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어 தமிழ்";
```

Либо можно использовать глобальный объект `String` напрямую:

```js
String(thing);
new String(thing);
```

`thing`<br />
Всё, что может быть преобразовано в строку.

## Доступ к символам

Существует два способа добраться до конкретного символа в строке. В первом способе используется метод `charAt()`:

```js
return "кот".charAt(1); // вернёт "о"
```

Другим способом является рассмотрение строки как массивоподобного объекта, в котором символы имеют соответствующие числовые индексы:

```js
return "кот"[1]; // вернёт "о"
```

## Сравнение строк

В JavaScript вы просто используете операторы меньше и больше:

```js
var a = "a";
var b = "b";
if (a < b) {
  // true
  print(a + " меньше чем " + b);
} else if (a > b) {
  print(a + " больше чем " + b);
} else {
  print(a + " и " + b + " равны.");
}
```

Подобный результат также может быть достигнут путём использования метода `localeCompare()`, имеющегося у всех экземпляров `String`.

## Пример: преобразование в строку

Объект `String` можно использовать как «безопасную» альтернативу методу `toString()`, так как хотя он обычно и вызывает соответствующий метод `toString()`, он также работает и для значений `null` и `undefined`. Например:

```js
var outputStrings = [];
for (var i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
```

---

- [`Strings`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)