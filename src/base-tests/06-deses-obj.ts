interface Input {
    password: string;
    age: number;
    name?: string
}

interface Result {
    namePassword: string,
    age: number,
    latLng: {
        lat: number,
        lng: number
    },
    year?: number
}

const person: Input = {
    name: 'Tony',
    age: 45,
    password: 'IronMan'
};

const usContext = ({ password, age, }: Input): Result => {
    
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


