const username   = 'Emmanuel';
const lastName = 'Tamburini';

const fullName = `${ username } ${ lastName }`;

console.log( fullName );

export const getGreetings = (name: string) =>  {
    return 'Hello ' + name;
}

console.log( `This is your text: ${ getGreetings( username ) }  ` );