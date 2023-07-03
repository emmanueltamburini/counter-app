
import heroes from '../data/heroes';

export const getHeroById = (id: number) => heroes.find( (hero) => hero.id === id );

export const getHeroesByOwner = ( owner:string ) => heroes.filter( (hero) => hero.owner === owner );
