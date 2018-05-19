## Tipos en es6

Objetivo:

* Entender los nuevos tipos de ES6
* Hacer ejercicios prácticos para descubrir cómo facilitan algunas tareas
* Entender como el uso correcto de los tipos mejora el rendimiento.

--

Preparar entorno:

```bash
npm i -g madoos-es6-types
```

Crear un directorio de trabajo:

```bash
mkdir es6-types
cd es6-types
```

Obtener retos:

```bash
madoos-es6-types
```

Verificar resultados:

```bash
madoos-es6-types verify <FILE>
```

---
## Tipos de Datos

--

* Fundamentos
* Objetos: descriptors, Getters, setters, Prototipos
* Array
* Map
* WeakMap
* Set
* WeakSet
* Symbol
* Proxy

--
## Tipos

--

¿Qué es un tipo?

Un tipo es un conjunto de características que identifican el comportamiento de un valor en particular.

--

## División de los tipos

--
**Primitivos:**

* String
* Number
* Boolean
* Symbol
* null
* undefined

--
**Objetos (Por referencia)**

* Function
* Array
* Object
* Maps
* Set
* Weakset
* WeakMap
* Date
* RegExp
* Error

---
## Objetos

--
Los objetos son una colección de propiedades en donde los valores de las propiedades pueden ser de cualquier tipo y las propiedades solo pueden ser strings o símbolos
--

## Atributos de las propiedades

* value
* configurable
* enumerable
* writable

--

## Tipos de propiedades

* Data properties
* Accessor properties
* Internal properties

--
## Descriptores de propiedad

--

```javascript
const user = {
  name: "Sara"
}

const descriptor = Object.getOwnPropertyDescriptors(user)
/*
{
    name: {
        value: "Sara",
        configurable: true,
        enumerable: true,
        writable: true,
        __proto__: Object
    }
}
*/
```

--

## Definiendo propiedades

--

```javascript
const user = {}

Object.defineProperty(user, "name", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: "Sara"
})
```

--

## Getters y setters

--

En ocasiones queremos valores basados en otros valores, para esto los data accessors son bastante útiles.

--

```javascript
const user = {
  get name() {
    return this.name
  },
  set name(value) {
    this.name = value.toUpperCase()
  }
}

user.name = "Sara"
// SARA
```

--

## Prototype

--
Los prototipos son un conjunto de normas para integrar Programación Orientada a Objetos en JavaScript. Entonces, siguiendo estas reglas nosotros debemos ser capaces de crear las distintas metodologías de la Orientación a Objetos:

* Herencia
* Encapsulamiento
* Abstracción
* Polimorfismo

--

## Comparación POO y POP

--
Objetos de clases:

* Una clase definida por su código fuente es estática.
* Representa una definición abstracta del objeto.
* Cada objeto es una instancia de una clase.
* El legado se encuentra en las clases.

--
Objetos prototipos:

* Un prototipo definido en su código fuente es mutable.
* Es en sí mismo un objeto, así como otros.
* Tiene una existencia física en la memoria.
* Puede ser modificado y llamado.
* Debe ser nombrado.
* Un prototipo puede ser visto como un modelo ejemplar de una familia objeto.
* Un objeto hereda propiedades (valores y métodos) de su prototipo.

--

## Enlazando prototipos

--

```javascript
function userFactory(name) {
  const proto = {
    nameToUpper() {
      return this.name.toUpperCase()
    }
  }

  return Object.create(proto, {
    name: { writable: true, configurable: true, value: name }
  })
}

const mohamed = userFactory("Mohamed")
mohamed.nameToUpper() // => "MOHAMED"
```

--

```javascript
function userFactory(name) {
  const proto = {
    nameToUpper() {
      return this.name.toUpperCase()
    }
  }
  const user = {
    name,
    __proto__: proto
  }
  return user
}

const paco = userFactory("Paco")
paco.nameToUpper() // => "PACO"
```

--
![picture](https://uploads.toptal.io/blog/image/392/toptal-blog-image-1399822383211.png)
--

## Extendiendo prototipos nativos

--

```javascript
Object.prototype.toUpperAll = function() {
  for (const key of Object.keys(this)) {
    let value = this[key]
    if (typeof value === "string") {
      this[key] = value.toUpperCase()
    }
  }
  return this
}

const test = { test: "test" }
test.toUpperAll() // => {test: "TEST"}
```

--
## Challenge

merge objects

```bash
# Ejecutar en el terminal: madoos-es6-types
# Seleccionar: OBJECTS
# Seguir instrucciones
```

--
Implementa el método merge para todas las instancias de un objeto:

```javascript
const a = { a: "a" }
const b = { b: "b" }
const c = { c: "c" }

a.merge(b).merge(c) // => { a: 'a', b: 'b', c: 'c'}
```

--

Solución:

```javascript
Object.prototype.merge = function(src) {
  for (const key of Object.keys(src)) {
    this[key] = src[key]
  }
  return this
}

const a = { a: "a" }
const b = { b: "b" }
const c = { c: "c" }

a.merge(b).merge(c) // => { a: 'a', b: 'b', c: 'c'}
```

---
## Challenge

count calls

```bash
# Ejecutar en el terminal: madoos-es6-types
# Seleccionar COUNT CALLS
# Seguir instrucciones
```

--
Cuenta veces ha sido llamada una función con el mismo argumento:

```javascript
const reporter = /* your implementation */
const users = [{ name: "Ana" }, { name: "Eric" }]

function showName(user){
    /* your implementation */
    console.log(user.name)
    return reporter
}

showName(users[0])
showName(users[0])
showName(users[1])
calledWithAna =  /* your implementation */ //
```

--
Solución:

```javascript
const reporter = new Map()
const users = [{ name: "Ana" }, { name: "Eric" }]

function showName(user) {
  console.log(user.name)
  let called = reporter.get(user) || 0
  called++
  reporter.set(user, called)
  return reporter
}

showName(users[0])
showName(users[0])
showName(users[1])
const calledWithAna = reporter.get(users[0]) // => 2
```

--
## Maps

--

El objeto Map almacena pares clave/valor.
Cualquier valor pueden ser usados como clave o valor.

```javascript
const store = new Map([[{ key: "key" }, "value"]])
```

--

## Métodos y propiedades

```javascript
Map.prototype.constructor
Map.prototype.size

Map.prototype.clear()
Map.prototype.entries()
Map.prototype.forEach(callbackFn[, thisArg])
Map.prototype.get(key)
Map.prototype.has(key)
Map.prototype.values()
Map.prototype[@@iterator]()
```

--
Objetos

* Las claves de son Strings y Symbols
* El tamaño se determina manualmente
* Para iterar es necesario primero obtener sus claves
* No itera en orden

Mapas

* Las claves son de cualquier tipo
* Tamaño usando la propiedad size
* Es iterable
* Itera en orden de inserción

--

## Cuándo usar Map?

--

* Cuando solo se tiene que acceder a las propiedades, Map es puramente hash
* En los escenarios que requieren mucha adición y eliminación, el delete de objects tiene problemas de rendimiento
* Map conserva el orden de sus claves

--

* Map asegurará el rendimiento iteración estable en todos los navegadores
* Map tiende a tener un mejor rendimiento en el almacenamiento de un gran conjunto de datos, especialmente cuando las claves son desconocidas en tiempo de ejecución, y cuando todas las claves son del mismo tipo y todos los valores son del mismo tipo

--

## Cuándo NO usar Map?

* Con estructuras de datos muy simples
* Escenarios donde existe la necesidad de aplicar una lógica separada a la propiedad

--

```javascript
const user {
  name: 'Sonia',
  printName(){
    console.log(this.name)
  }  
}

user.printName() //=> "Sonia"
```

--

conclusión

---
## Challenge

unique numbers

```bash
# Ejecutar en el terminal: madoos-es6-types
# Seleccionar UNIQUE NUMBERS
# Seguir instrucciones
```

--
Implementar una funcion que retorne los elementos únicos

```javascript
const numbers = [1, 1, 2, 2, 3, 3, 4, 4]

function unique(numbers) {
  /* your implementation */
}

const uniqueNumbers = unique(numbers)
// => [1, 2, 3, 4]
```

--

Solución

```javascript
function unique(numbers) {
  return numbers.filter(function(elem, pos, arr) {
    return arr.indexOf(elem) == pos
  })
}
```

```javascript
function unique(numbers) {
  return Array.from(new Set(numbers))
}
```

--
## set

El objeto Set te permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u objetos de referencia.

```javascript
new Set([1, 2, 3])
new Set([{}, new Map(), []])
```

--

## Métodos y propiedades

```javascript
Set.prototype.constructor
Set.prototype.size

Set.prototype.add(value)
Set.prototype.clear()
Set.prototype.delete(value)
Set.prototype.entries()
Set.prototype.forEach(callbackFn[, thisArg])
Set.prototype.has(value)
Set.prototype.keys()
Set.prototype.values()
Set.prototype[@@iterator]()
```

--
## Set vs Array

![picture](https://cdn-images-1.medium.com/max/800/1*ImM6dhwekslUYwg5cX74AQ.png)

--

En la mayoría de los idiomas, los Set tienen un claro y claro caso de uso: operaciones rápidas de unión, intersección y diferencia.

En JavaScript estas operaciones no se definen fácilmente

--

Sin las operaciones de conjuntos comunes definidas, JavaScript Set () puede verse como un contenedor glorificado que solo almacena elementos únicos. Cuando pones un elemento repetido, en realidad reemplaza al existente.

--

Cuando tenemos una gran cantidad de elementos set no empeora al añadir items.

--

Presencia

```javascript
set1.has(5)
array1.indexOf(5)
/*
Set.has() es más rápido que Array.indexOf() incluso para matrices pequeñas.
La diferencia de ejecución aumenta a medida que aumenta el tamaño de los contenedores.

// size = 1000
// SET:  21.014999999999418 ARRAY:  54.00500000000102
// size = 10000
// SET:  17.44499999999971 ARRAY:  398.505000000001
// size = 100000
// SET:  19.770000000004075 ARRAY:  3779.524999999994
*/
```

--

Velocidad de inserción

```javascript
set1.add(5)
array1.push(5)
/*
Ah! Las matrices son mucho más rápidas (5x) en inserción que Sets. 
Tenga en cuenta que la velocidad de inserción crece linealmente en Arrays y de forma no lineal en Sets:

// ammount = 100000;
// Array.push in 4.054999999993015ms; Set.add in 20.915000000037253ms;
// ammount = 1000000;
// Array.push in 17.175000000046566ms; Set.add in 417.03999999992084ms;
// ^ ~4x more than prev.               ^ ~20x more than prev.
// ammount = 10000000;
// Array.push in 349.8299999999581ms; Set.add in 3902.625ms;
// ^ ~20x more than prev.             ^ ~10x more than prev.
*/
```

--

Velocidad de iteración

Los valores secuenciales del Array son más rápidos de iterar que los valores de Set (que se repiten en el orden de inserción).

```javascript
let sum = 0

for (let item of array1) {
  // <- here
  sum += item
}

for (let item of set1) {
  // <- here
  sum += item
}

// ammount = 100000;
// Array.for in 4.44999999999709ms; Set.for in 9.239999999997963ms;
// ammount = 1000000;
// Array.for in 9.044999999998254ms; Set.for in 55.14499999998952ms;
// ammount = 10000000;
// Array.for in 74.47000000000116ms; Set.for in 180.13999999999942ms;
```

--

Operaciones de conjunto

Unión

```javascript
const union = new Set([...set1, ...set2])
```

Diferencia

```javascript
const diff = new Set([...set1].filter(x => !set2.has(x)))
```

Intersección

```javascript
const intersected = new Set([...set1].filter(x => set2.has(x)))
```

--
Cuándo usar Set?

```javascript
const usersCreated = new Set()

class User {
  constructor() {
    usersCreated.add(this)
  }

  static instancesCreated() {
    return usersCreated
  }
}

const created = User.instancesCreated().size
```

--
## Conclusión

--

* Set cuando importan valores únicos
* Set.has es mucho más rápido que Array.indexOf
* Array.push es mucho más rápido que Set.add
* Las matrices son más rápidas para iterar secuencialmente
* Unión, Diferencia, Intersección son fáciles de implementar con Set

---
## Challenge

memory leak

```bash
# Ejecutar en el terminal: madoos-es6-types
# Seleccionar MEMORY LEAK
# Seguir instrucciones
```

--

En el reto “count calls” hemos encontrado una forma de contar las llamadas únicas.

La solución ha creado un terrible memory leak, tu trabajo es encontrarlo antes que el servidor muera!!

--

Solución:

```javascript
const users = new WeakSet()
let __users__ = []

const addUser = () => {
  __users__.push({
    name: Math.random()
      .toString(36)
      .substring(7)
  })

  users.add(__users__[__users__.length - 1])
}

const clearUsers = () => {
  __users__ = []
}

setInterval(addUser, 250)
setInterval(clearUsers, 1000)
setTimeout(() => process.exit(0), 4000)
console.log(true)
```

--
## WeakSet

--

Los objetos WeakSet son colecciones de objetos. Un objeto en WeakSet solo puede ser agregado una vez; Esto quiere decir que es único en la colección WeakSet.

--

Las principales diferencias con el objeto Set son:

* A diferencia de Sets, WeakSets son solamente colecciones de objetos y no contienen valores arbitrarios de cualquier otro tipo.

* El WeakSet es débil: Las referencias a objetos en la colección se mantienen débilmente.. Si ya no hay otra referencia a un objeto almacenado en el WeakSet, ellos pueden ser removidos por el recolector de basura. Esto también significa que no hay ninguna lista de objetos almacenados en la colección. Los WeakSets no son enumerables.

--

Métodos y propiedades

```javascript
WeakSet.prototype.constructor

WeakSet.prototype.add(value)
WeakSet.prototype.delete(value)
WeakSet.prototype.has(value)
```

--
## WeakMap

--

Las claves de los WeakMaps solamente pueden ser del tipo Object. Los Primitive data types como claves no están permitidos (ej. un Symbol no pueden ser una clave de WeakMap).

--

## Métodos y propiedades

```javascript
WeakMap.prototype.constructor

WeakMap.prototype.delete(key)
WeakMap.prototype.get(key)
WeakMap.prototype.has(key)
WeakMap.prototype.set(key, value)
```

--

conclusión

---
## Challenge

time machine

```bash
# Ejecutar en el terminal: madoos-es6-types
# Seleccionar TIME MACHINE
# Seguir instrucciones
```

--

Implementar la función timeMachine que añade a un objeto la posibilidad de obtener estados pasados.

--

```javascript
const example = timeMachine({ state: "FIRST_STATE" })
example.state = "SECOND_STATE"
example.state = "THIRD_STATE"
delete example.state

console.log(example) // {}
console.log(example.backInTime()) // {state: "THIRD_STATE"}
console.log(example.backInTime()) // {state: "SECOND_STATE"}
console.log(example.backInTime()) // {state: "FIRST_STATE"}
```

--

Solución:

```javascript
function timeMachine(target) {
  const states = []
  const storeState = state => states.push(Object.assign({}, state))

  Object.defineProperty(target, "backInTime", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: () => states.pop()
  })

  target = new Proxy(target, {
    set: (obj, prop, value) => {
      storeState(obj)
      return Reflect.set(obj, prop, value)
    },
    deleteProperty: (obj, prop, value) => {
      storeState(obj)
      return Reflect.deleteProperty(obj, prop)
    }
  })

  return target
}
```

--
## Proxy

El objeto Proxy se usa para definir un comportamiento personalizado para operaciones fundamentales (por ejemplo, para observar propiedades, cuando se asignan, enumeración, invocación de funciones, etc).

```javascript
const foo = new Proxy(target, handler)
```

--

## Terminología

--

handler:

Objeto que gestiona las intercepciones a las propiedades del objeto proxy.

traps:

Son los métodos interceptores que proveen acceso a las propiedades. Es análogo al concepto de traps en los sistemas operativos.

target:

El objeto que será interceptado.

--

## Traps disponibles

--

Para operadores:

```javascript
handler.has() // Un trap para el operador in.
handler.deleteProperty() // Un trap el operador delete.
handler.construct() // Un trap para el operador new.
```

--

Para funciones:

```javascript
handler.apply() // Un trap para la llamada a una función.
```

--

Para objectos:

```javascript
handler.getPrototypeOf() // Un trap para Object.getPrototypeOf.
handler.setPrototypeOf() // Un trap para Object.setPrototypeOf.
handler.isExtensible() // Un trap para Object.isExtensible.
handler.preventExtensions() // Un trap para Object.preventExtensions.
handler.getOwnPropertyDescriptor() // Un trap para Object.getOwnPropertyDescriptor.
handler.defineProperty() // Un trap para Object.defineProperty.
handler.get() // Un trap para obtener propiedades.
handler.set() // Un trap para dar valor.
handler.ownKeys() // Un trap para Object.getOwnPropertyNames y Object.getOwnPropertySymbols.
```

--
## Objeto Reflect

Reflect es un objeto incorporado que proporciona métodos para interceptar operaciones de javascript. Los métodos son los mismos que los de proxy handlers. Reflect no es un objeto de funciones y por lo tanto no es constructible.

--

```javascript
target = new Proxy(target, {
  set: (obj, prop, value) => {
    storeState(obj)
    return Reflect.set(obj, prop, value)
  },
  deleteProperty: (obj, prop, value) => {
    storeState(obj)
    return Reflect.deleteProperty(obj, prop)
  }
})
```

--

El objeto Reflect proporciona funciones estáticas con los mismos nombres de los métodos de proxy handler. Algunos de estos métodos son correspondientes a los métodos de Object.

--

¿Por qué usar Reflect?

* Es un lugar más natural para muchos de los métodos de reflexión definidos previamente en Object.
* Un hogar natural para proxies, evitando la necesidad de un enlace Proxy global.
* Los métodos en este módulo se correlacionan uno a uno con los traps de Proxy. Los controladores proxy necesitan estos métodos para reenviar convenientemente las operaciones.

--
conclusión

---
## Challenge

interoperability

```bash
# Ejecutar en el terminal: madoos-es6-types
# Seleccionar INTEROPERABILITY
# Seguir instrucciones
```

--

Implementar para la clase Duple (una dupla contiene dos elementos del mismo tipo)
interoperabilidad con el objeto Array y la declaración "for of".

```javascript
const duple = new Duple("foo", "baz")
const array = Array.from(duple) // ["foo", "baz"]
const otherDuple = Duple.from(["foo", "baz"]) // { first: "foo", second: "baz }

for (let item of duple) {
  console.log(item) // "foo", "baz"
}
```

--

Solución:

```javascript
class Duple {
  constructor(first, second) {
    if (typeof first === typeof second) {
      this.first = first
      this.second = second
    } else {
      throw new Error("the arguments are not the same type")
    }
  }

  static from(iterable) {
    const iterator = iterable[Symbol.iterator]()
    const first = iterator.next().value
    const second = iterator.next().value

    return new Duple(first, second)
  }

  *[Symbol.iterator]() {
    yield this.first
    yield this.second
  }
}
```

--
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

---
## Arrays

--

## Nuevas características

--

## Métodos estáticos

* Array.from(arrayLike, mapFunc?, thisArg?)
* Array.of(...items)

--

```javascript
const arrayLike = { length: 2, 0: "a", 1: "b" }

// for-of only works with iterable values
for (const x of arrayLike) {
  // TypeError
  console.log(x)
}

const arr = Array.from(arrayLike)
for (const x of arr) {
  // OK, iterable
  console.log(x)
}
// Output:
// a
// b
```

--

```javascript
// es una alternativa a .map

const spans = document.querySelectorAll("span.name")
const names1 = Array.prototype.map.call(spans, s => s.textContent) // map(), generically:

// Array.from():
const names2 = Array.from(spans, s => s.textContent)
```

--

```javascript
const arr = Array.of(5) // [5]
```

--

## Métodos de instancias

--

* Array.prototype.copyWithin()
* Array.prototype.fill()
* Array.prototype.entries()
* Array.prototype.keys()
* Array.prototype.values()
* Array.prototype.includes()
* Array.prototype.findIndex()
* Array.prototype.find()

--

```javascript
const src = ["a", "b"]
src.keys() // [ 0, 1 ]
src.values() // ['a', 'b' ]
src.entries() //[ [ 0, 'a' ], [ 1, 'b' ] ]

const numbers = [6, -5, 8]
numbers.find(x => x < 0) // -5
numbers.findIndex(x => x < 0) // 1
```

```javascript
const numbers = [0, 1, 2, 3]
const copy = numbers.copyWithin(2, 0, 2) // [ 0, 1, 0, 1 ]

const letters = ["a", "b", "c"]
letters.fill(7, 1, 2) // [ 'a', 7, 'c' ]
```

--

conclusión

---
Muchas gracias!!

![picture](https://s5.eestatic.com/2016/12/16/social/Memes-Humor-Redes_sociales-Internet-La_Jungla_178744040_23538138_1706x960.jpg)

---
