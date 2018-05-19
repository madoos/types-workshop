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

## Traps disponibles

--

Para operadores:

```javascript
handler.has() // Un trap para el operador in.
handler.deleteProperty() // Un trap el operador delete.
handler.construct() // Un trap para el operador new.
```

--

Para funciones:

```javascript
handler.apply() // Un trap para la llamada a una función.
```

--

Para objectos:

```javascript
handler.getPrototypeOf() // Un trap para Object.getPrototypeOf.
handler.setPrototypeOf() // Un trap para Object.setPrototypeOf.
handler.isExtensible() // Un trap para Object.isExtensible.
handler.preventExtensions() // Un trap para Object.preventExtensions.
handler.getOwnPropertyDescriptor() // Un trap para Object.getOwnPropertyDescriptor.
handler.defineProperty() // Un trap para Object.defineProperty.
handler.get() // Un trap para obtener propiedades.
handler.set() // Un trap para dar valor.
handler.ownKeys() // Un trap para Object.getOwnPropertyNames y Object.getOwnPropertySymbols.
```
