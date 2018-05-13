## Maps

--

El objeto Map almacena pares clave/valor.
Cualquier valor pueden ser usados como clave o valor.

```javascript
const store = new Map([[{ key: "key" }, "value"]])
```

--

## Métodos y propiedades

```javascript
Map.prototype.constructor
Map.prototype.size

Map.prototype.clear()
Map.prototype.entries()
Map.prototype.forEach(callbackFn[, thisArg])
Map.prototype.get(key)
Map.prototype.has(key)
Map.prototype.values()
Map.prototype[@@iterator]()
```

--
Objectos

* Las claves de son Strings y Symbols
* El tamaño se determina manualmente
* Para iterar es necesario primiero obtener sus claves
* No itera en orden

Mapas

* Las claves son de cualquier tipo
* Tamaño usando la propiedad size
* Es iterable
* Itera en orden de inserción

--

## Cuándo usar Map?

--

* Cuando solo se tiene que acceder a las propiedades, Map es puramente hash
* En los escenarios que requieren mucha adición y eliminación, el delete de objects tiene problemas de rendimiento
* Map conserva el orden de sus claves

--

* Map asegurará el rendimiento iteración estable en todos los navegadores
* Map tiende a tener un mejor rendimiento en el almacenamiento de un gran conjunto de datos, especialmente cuando las claves son desconocidas en tiempo de ejecución, y cuando todas las claves son del mismo tipo y todos los valores son del mismo tipo

--

## Cuándo NO usar Map?

* Con estructuras de datos muy simples
* Escenarios donde existe la necesidad de aplicar una lógica separada a la propiedad

--

```javascript
const user {
  name: 'Sonia',
  printName(){
    console.log(this.name)
  }  
}

user.printName() //=> "Sonia"
```
