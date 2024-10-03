console.log('Intro au TypeScript ♥');

//! Typage
// Variable
const nb1 = 42;
const nb2: number = 13;

let message: string;
message = 'C\'est une chaîne de caractere';

// Collection
const numbers: number[] = [];
numbers.push(42);
numbers.push(3);

const names: Array<string> = ['Della'];
names.unshift('Zaza');

// Methode
function sayHello(name: string): void {
    console.log('Bonjour ' + name);
}

function isEven(number: number): boolean {
    return number % 2 === 0;
}

//! Création d'un type
// Type Simple
type StudentInfo = {
    firstname: string,
    lastname: string,
    yearResult : number,
    hobby?: string
}

function showInfo({ firstname, lastname, yearResult, hobby }: StudentInfo) {

    console.log(`L'étudiant ${firstname} ${lastname} à ${yearResult}`);

    if(hobby?.includes('Foot')) {
        console.log('et il a comme hobby le foot ⚽');
    }
}

// Type Composé
// - Union
type StringOrNumber = string | number;
const v1: StringOrNumber = "Test";
const v2: StringOrNumber = 42;

// - Intersection
type Voiture = {
    marque: string,
    modele: string | number,
    nbPorte: number
}
type SousMarin = {
    identifiant: string,
    profondeurMax: number,
    modele: string,
    typeMoteur: 'diesel' | 'électrique' | 'nucléaire'
}

const voiture1: Voiture = {
    marque: 'Audi',
    modele: 'A5',
    nbPorte: 5
}
const sousMarin1: SousMarin = {
    identifiant: 'RJ42f',
    modele: 'R42',
    profondeurMax: 2_000,
    typeMoteur: 'électrique'
}

const voitureFantomas: Voiture & SousMarin = {
    marque: 'Citroen',
    modele: 'DS',
    nbPorte: 3,
    identifiant: 'RJ53s',
    profondeurMax: 100_000,
    typeMoteur: 'nucléaire'
}

//! Async / Await
async function demoAsync() : Promise<Voiture> {

    const result = await fetch('Une resource');

    // ↓ Ce typage n'est pas garenti -> Car c'est du runtime
    const data: Voiture = await result.json();
    return data;
}  