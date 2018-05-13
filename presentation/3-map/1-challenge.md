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
