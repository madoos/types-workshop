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
