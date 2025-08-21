interface Persona {
    firstname: string,
    lastname?: string,
}

const persona1: Persona = {
    firstname: "Luca",
    lastname: 'Espinoza'
}

const persona2: Persona = {
    firstname: "Mariano"
}

console.log(persona1)
console.log(persona2)