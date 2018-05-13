## WeakSet

--

Los objetos WeakSet son colecciones de objetos. Un objecto en WeakSet solo puede ser agregado una vez; Esto quiere decir que es unico en la coleccion WeakSet.

--

Las principales diferencias con el objeto Set son:

* A diferencia de Sets, WeakSets son solamente colecciones de objetos y no contienen valores arbitrarios de cualquier otro tipo.

* El WeakSet es débil: Las referencias a objetos en la colección se mantienen débilmente.. Si ya no hay otra referencia a un objeto almacenado en el WeakSet, ellos pueden ser removidos por el recolector de basura. Esto también significa que no hay ninguna lista de objetos almacenados en la colección. Los WeakSets no son enumerables.

--

Métodos y propiedades

```javascript
WeakSet.prototype.constructor

WeakSet.prototype.add(value)
WeakSet.prototype.delete(value)
WeakSet.prototype.has(value)
```
