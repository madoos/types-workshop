## Challenge

Implementar para la clase Duple (una dupla es una estructura de datos que contiene dos elementos del mismo tipo)
interoperabilidad con el objeto Array y la declaración for of.

```javascript
const duple = new Duple("foo", "baz")
const array = Array.from(duple) // ["foo", "baz"]

const otherDuple = Duple.from(["foo", "baz"]) // { first: "foo", second: "baz }

for (let item of duple) {
  console.log(item) // "foo", "baz"
}
```
