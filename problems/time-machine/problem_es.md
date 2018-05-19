## Challenge

Implementar la función timeMachine que añade a un objeto la posibilidad de obtener estados pasados.

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
