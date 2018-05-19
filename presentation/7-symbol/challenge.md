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
