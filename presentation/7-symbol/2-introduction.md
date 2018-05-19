## Symbol

Los Symbols son tipo de dato único que es inmutable y puede ser utilizado como identificador de propiedades de objeto. Estos son como los tipos Number, String, y Boolean primitivos.

```javascript
const sym1 = Symbol()
const sym2 = Symbol("foo")
const sym3 = Symbol("foo")

Symbol("foo") === Symbol("foo") // false
```

--

Symbol es un tipo de datos cuyos valores son únicos e immutables. Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos. Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.

```javascript
const inmutableRef = Symbol("some description")
```

--

### Símbolos compartidos en el registro global de símbolos

La sintaxis anteriormente descrita que usa la función Symbol() no creara un símbolo global disponible para toda el código base. Para crear símmbolos accesibles a través de los archivos incluso a través de realms (cada unbo de los cuales tiene su propio global scope) es necesario utilizar los métodos Symbol.for() y Symbol.keyFor() para crear y acceder a los símbolos desde un registro global de valores del tipo Symbol.

```javascript
const sym1 = Symbol.for("SYM_1")
const key = Symbol.keyFor(sym1) // "SYM_1"
```

--

## característica

* Los símbolos son completamente únicos
* Los símbolos se pueden usar como claves de Objeto
* Los Símbolos no aparecen en un Objeto usando "for in" y Object.getOwnPropertyNamesObject

--

## símbolos son buenos para:

* Los símbolos nunca entrarán en conflicto con las claves de objetos.
* Los símbolos no se pueden leer utilizando las herramientas de reflexión
* Los símbolos no son propiedades privadas
* Los símbolos no son coercibles en primitivos

--

## ¿Para qué son realmente buenos los símbolos?

* Como un valor único en el que probablemente normalmente usaría un String o Integer
* Un lugar para poner valores de metadatos en un objeto
* Dar a los desarrolladores la capacidad de agregar hooks a sus objetos, a través de su API

--

### Símbolos incorporados en JS

--

Símbolo de iteración:

Los objetos que implementen la interfaz Iterable deben tener una propiedad que tenga como clave este símbolo. Dicha propiedad deb ser una función que devuelva un objeto que implemente la interfaz Iterator. Usado por for...of.

```javascript
Symbol.iterator
```

--

Símbolos de expresiones regulares:

```javascript
Symbol.match // String.prototype.match()
Symbol.replace // String.prototype.replace()
Symbol.search // String.prototype.search()
Symbol.split // String.prototype.split().
```

--

Otros símbolos

```javascript
Symbol.hasInstance // instanceof.
Symbol.isConcatSpreadable // Array.prototype.concat().
Symbol.species
Symbol.toPrimitive
Symbol.toStringTag // Object.prototype.toString().
```

--

conclusión
