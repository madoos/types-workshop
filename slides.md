## Tipos en es6

Objetivo:

* Entender los nuevos tipos de ES6
* Hacer ejercicios prácticos para descubrir como facilitan algunas tareas
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

¿Que es un tipo?

Un tipo es un conjunto de carascteristicas que identifican el comportamiento de un valor en particular.

--

## Division de los tipos

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
## Objectos

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
Cuenta veces ha sido llamada una fucinón con el mismo argumento:

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

Solucíon:

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

Los objetos WeakSet son colecciones de objetos. Un objecto en WeakSet solo puede ser agregado una vez; Esto quiere decir que es unico en la coleccion WeakSet.

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

---
## Challenge

time machine

```bash
# Ejecutar en el terminal: madoos-es6-types
# Seleccionar TIME MACHINE
# Seguir instrucciones
```

---
