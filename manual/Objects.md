# Objectos js

Los objetos son una colección de propiedades en donde los valores de las propiedades pueden ser de cualquier tipo y las propiedades solo pueden ser strins o simblos

Esas propiedades se pueden comportar de alguna manera en funcion a como se difna

## Atributos de las propiedades

Cada una de las propiedades tiene 4 atributos, los cuales son

* value
* configurable: Nos permite definir si los atributos de la propiedad van a poder ser modificados.
* enumerable: Controla si la propiedad va a ser mostrada cuando se enumeren las propiedades del objeto, como usando for..in
* writable: Nos permite definir si el valor de una propiedad va a poder ser modificado o no.

const m = {
map(f){
const r = Object.create(this.**proto**)
for(let key of Object.keys(this)){
r[key] = f(this[key], key, this)
}

        return r
    }

}
