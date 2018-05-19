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
