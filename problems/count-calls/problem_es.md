# Challenge

Cuantas veces ha sido llamada la función con el mismo usuario:

```javascript
const users = [{ name: "Ana" }, { name: "Juan" }, { name: "Eric" }]
showName(users[0])
showName(users[0])
showName(users[1])
showName(users[2])

calledWithAna =  /* your implementation */
```

## Template

```javascript
const reporter = /* your implementation */
const users = [{ name: "Ana" }, { name: "Juan" }, { name: "Eric" }]

function showName(user) {
  console.log(user.name)
  /* your implementation */
  return reporter
}

showName(users[0])
showName(users[0])
showName(users[1])
showName(users[2])

const calledWithAna =  /* your implementation */
console.log(calledWithAna)

// => 2
```
