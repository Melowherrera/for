//Ejercicio 1
console.log("Actividad 1")

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
    console.log(i);
    }
}
//Ejercicio 2
console.log("Actividad 2")

const pokemonArray = [
    { nombre: 'Pikachu', numero: 1 },
    { nombre: 'Bulbasaur', numero: 2 },
    { nombre: 'Ivysaur', numero: 3 },
    { nombre: 'Venusaur', numero: 4 },
    { nombre: 'Charmander', numero: 5 },
    { nombre: 'Charmeleon', numero: 6 },
    { nombre: 'Charizard', numero: 7 },
    { nombre: 'Squirtle', numero: 8 },
    { nombre: 'Wartortle', numero: 9 },
    { nombre: 'Blastoise', numero: 10 },
    { nombre: 'Caterpie', numero: 11 },
    { nombre: 'Metapod', numero: 12 },
    { nombre: 'Butterfree', numero: 13 },
    { nombre: 'Weedle', numero: 14 },
    { nombre: 'Kakuna', numero: 15 },
    { nombre: 'Beedrill', numero: 16 },
    { nombre: 'Pidgey', numero: 17 },
    { nombre: 'Pidgeotto', numero: 18 },
    { nombre: 'Pidgeot', numero: 19 },
    { nombre: 'Rattata', numero: 20 },
    { nombre: 'Raticate', numero: 21 },
    { nombre: 'Spearow', numero: 22 },
    { nombre: 'Fearow', numero: 23 },
    { nombre: 'Ekans', numero: 24 },
    { nombre: 'Arbok', numero: 25 },
    { nombre: 'Sandshrew', numero: 27 },
    { nombre: 'Sandslash', numero: 28 },
    { nombre: 'Nidoran-f', numero: 29 },
    { nombre: 'Nidorina', numero: 30 },
    { nombre: 'Nidoqueen', numero: 31 },
    { nombre: 'Nidoran-m', numero: 32 },
    { nombre: 'Nidorino', numero: 33 },
    { nombre: 'Nidoking', numero: 34 },
    { nombre: 'Clefairy', numero: 35 },
    { nombre: 'Clefable', numero: 36 },
    { nombre: 'Vulpix', numero: 37 },
    { nombre: 'Ninetales', numero: 38 },
    { nombre: 'Jigglypuff', numero: 39 },
    { nombre: 'Wigglytuff', numero: 40 },
    { nombre: 'Zubat', numero: 41 },
    { nombre: 'Golbat', numero: 42 },
    { nombre: 'Oddish', numero: 43 },
    { nombre: 'Gloom', numero: 44 },
    { nombre: 'Vileplume', numero: 45 },
    { nombre: 'Paras', numero: 46 },
    { nombre: 'Parasect', numero: 47 },
    { nombre: 'Venonat', numero: 48 },
    { nombre: 'Venomoth', numero: 49 },
  
];

// Solicitamos al usuario un número
const numeroUsuario = parseInt(prompt("Ingresa un número:"));

// Mostramos los nombres de los Pokémons cuyos números son múltiplos de 5
for (let i = 0; i < numeroUsuario && i < pokemonArray.length; i += 5) {
    console.log(pokemonArray[i]);
}

//Ejercicio 3
// Definimos el arreglo mixto
const arregloMixto = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

// Filtramos y mostramos solo los elementos que son tipo número
const numerosFiltrados = arregloMixto.filter(elemento => typeof elemento === 'number');
console.log(numerosFiltrados);