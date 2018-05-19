## Proxy

El objeto Proxy se usa para definir un comportamiento personalizado para operaciones fundamentales (por ejemplo, para observar propiedades, cuando se asignan, enumeración, invocación de funciones, etc).

```javascript
const foo = new Proxy(target, handler)
```

--

## Terminología

--

handler:

Objeto que gestiona las intercepciones a las propiedades del objeto proxy.

traps:

Son los métodos interceptores que proveen acceso a las propiedades. Es análogo al concepto de traps en los sistemas operativos.

target:

El objeto que será interceptado.

--

##
