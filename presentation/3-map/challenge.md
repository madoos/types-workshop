# Challenge

Cuenta veces ha sido llamada una fución con el mismo argumento tal que:

```javascript
const reporter = /* your implementation */
const users = [{ name: "Ana" }, { name: "Juan" }, { name: "Eric" }]

const showName = user => {
    /* your implementation */
    console.log(user.name)
    return reporter
}

showName(users[0])
showName(users[0])
showName(users[1])
showName(users[2])

calledWithAna =  /* your implementation */
// => 2
```
