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
