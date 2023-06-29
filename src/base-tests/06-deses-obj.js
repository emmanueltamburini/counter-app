
const person = {
    name: 'Tony',
    age: 45,
    password: 'IronMan'
};

const usContext = ({ password, name, age, range = 'Capitán' }) => {
    
    return {
        namePassword: password,
        age: age,
        latLng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { namePassword, year, latLng: { lat, lng } } = usContext( person );

console.log(namePassword, year);
console.log( lat, lng );


