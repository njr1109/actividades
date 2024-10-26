let contactos = [
    { numero: "3125678901", nombre: "Carlos Ramírez" },
    { numero: "3124803569", nombre: "Ana López" },
    { numero: "3124935860", nombre: "Javier Torres" },
    { numero: "3021584697", nombre: "María González" },
    { numero: "3027601945", nombre: "Luis Martínez" },
    { numero: "3024819356", nombre: "Sofía Pérez" },
    { numero: "3205874916", nombre: "David Hernández" },
    { numero: "3206745809", nombre: "Laura Díaz" },
    { numero: "3209184652", nombre: "Andrés Castro" },
    { numero: "3051278469", nombre: "Claudia Morales" },
    { numero: "3056497321", nombre: "Diego Jiménez" },
    { numero: "3054839672", nombre: "Elena Fernández" },
    { numero: "3129468705", nombre: "Ricardo Salazar" },
    { numero: "3023856147", nombre: "Patricia Soto" },
    { numero: "3201948567", nombre: "Fernando Ruiz" }
];
//Añandiendo contactos//
contactos.unshift({ numero: "3208536941", nombre: "Valeria Medina" });
console.log(contactos);
contactos.splice(4,0,{ numero: "3052198374", nombre: "Oscar Ríos" },{ numero: "3127845123", nombre: "Natalia Castro" });
console.log(contactos);

//Eliminando contactos
contactos.shift();
console.log(contactos);
contactos.push({ numero: "3123054789", nombre: "Isabel Torres" });
console.log(contactos);
contactos.pop();
console.log(contactos);
contactos.splice(2,3);//eliminando 3 elementos
console.log(contactos);

//Nueva lista//
let quinto = contactos.slice(2,6)
console.log(quinto);