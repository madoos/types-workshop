# LO HICISTE!

## Symbol

Symbol es un tipo de datos cuyos valores son únicos e immutables. Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos. Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.

JavaScript tiene algunos símbolos incorporados que representan comportamientos internos del lenguaje que no fueron expuestos a los programadores antes de ECMAScript 6. Se accede a los dichos símbolos a través de las siguientes propiedades del constructor Symbol.

## Símbolo de iteración

Symbol.iterator

Los objetos que implementen la interfaz Iterable deben tener una propiedad que tenga como clave este símbolo. Dicha propiedad deb ser una función que devuelva un objeto que implemente la interfaz Iterator. Usado por for...of.
