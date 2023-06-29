

const characters = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = characters;
console.log( p3 );


const returnArray = () =>{
    return ['ABC', 123];
}

const [ letters, numbers ] = returnArray(); 
console.log(letters, numbers);

const usState = ( value: string ): [string, () => void] => {
    return [ value, ()=>{ console.log('Hello world') } ];
}

const [ username, setName ] = usState( 'Goku' );

console.log( username );
setName();





