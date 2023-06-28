const greetings2 = ( username ) => {
    return `Hello, ${ username }`;
}

const greetings3 = ( username ) => `Hello, ${ username }`;
const greetings4 = () => `Hello World`;

// console.log( greetings('Goku') )

console.log( greetings2('Vegeta') );
console.log( greetings3('Goku') );
console.log( greetings4() );


const getUser = () => ({
        uid: 'ABC123',
        username: 'username'
});


const user = getUser();
console.log(user);

const getActivateUser = ( username ) =>({
    uid: 'ABC567',
    username: username
})

const activateUser = getActivateUser('Fernando');
console.log( activateUser );



