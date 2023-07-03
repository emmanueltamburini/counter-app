import { getHeroById, getHeroesByOwner } from '../../src/base-tests/08-imp-exp';
describe('08 imp exp', () => {
    test('should getHeroById return an hero by id', () => {
        const id = 1;
        const hero = getHeroById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });


    test('should getHeroById return an undefined', () => {
        const id = 100;
        const hero = getHeroById(id);

        expect(hero).toBeFalsy();
    });


    test('should getHeroesByOwner sending DC heroes return an DC heroes', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }
      ]);
      expect(heroes).toEqual(heroes.filter(hero => hero.owner === owner));
    });

    test('should getHeroesByOwner sending Marvel heroes return an Marvel heroes', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([{
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        },
      ]);
      expect(heroes).toEqual(heroes.filter(hero => hero.owner === owner));
    });

})