# Tipos de Datos

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
# Tipos

--

¿Que es un tipo?

Un tipo es un conjunto de carascteristicas que identifican el comportamiento de un valor en particular.

--

# Division de los tipos

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
# Objectos

--
Los objetos son una colección de propiedades en donde los valores de las propiedades pueden ser de cualquier tipo y las propiedades solo pueden ser strings o símbolos
--

## Atributos de las propiedades

* value
* configurable
* enumerable
* writable

--

## Tipos de propiedads

* Data properties
* Accessor properties
* Internal properties

--
## Challenge

--

Implementa el método merge para todas las instancias de un objeto de tal forma que:

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

--
# Descriptores de propiedad

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

# Extendiendo prototipos nativos

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

---
## Challenge

--
Cuenta veces ha sido llamada una fucinón con el mismo argumento tal que:

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
Objectos

* Las claves de son Strings y Symbols
* El tamaño se determina manualmente
* Para iterar es necesario primiero obtener sus claves
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

![picture](http://2.bp.blogspot.com/-wVbdTdZg2AQ/UYOFCVy00ZI/AAAAAAAAbqU/D16Pk_PnL_Q/s1600/mapsmania.gif)

---
# Challenge

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
# set 2

--
# set 3

---
