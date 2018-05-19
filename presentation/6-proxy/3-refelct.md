## Objecto Reflect

Reflect es un objecto incorporado que proporciona metodos para interceptar operaciones de javascript. Los métodos son los mismos que los de proxy handlers. Reflect no es un objeto de funciones y por lo tanto no es constructible.

--

```javascript
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
```

--

El objeto Reflect proporciona funciones estáticas con los mismos nombres de los métodos de proxy handler. Algunos de estos métodos son correspondientes a los métodos de Object.

--

¿Por qué usar Reflect?

* Es un lugar más natural para muchos de los métodos de reflexión definidos previamente en Object.
* Un hogar natural para proxies, evitando la necesidad de un enlace Proxy global.
* Los métodos en este módulo se correlacionan uno a uno con los traps de Proxy. Los controladores proxy necesitan estos métodos para reenviar convenientemente las operaciones.
