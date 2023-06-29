


const username   = 'Fernando';
const lastName = 'Herrera';

const fullName = `${ username } ${ lastName }`;

console.log( fullName );

function getGreetings(name) {
    return 'Hi ' + name;
}

console.log( `This is your text: ${ getGreetings( username ) }  ` );