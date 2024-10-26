//punto 3// 

//punto 1//
let tercero = [
    "elemento 1",
    "elemento 2",
    "elemento 3",
    "elemento 4",
    "elemento 5",
    "elemento 6",
]

// Eliminar un elemento//

tercero.splice(2,1);
console.log(tercero);

// Insertar 1 elemento en la misma posicion//
tercero.splice(2,1, "elemento nuevo 1");
console.log(tercero);

// Se eliminan mas de un elemento en otra posicion//
tercero.splice(4,3);
console.log(tercero);