import { getHeroByIdAsync } from '../../src/base-tests/09-promesas';
describe('09 Promises', () => {
    test('should getHeroByIdAsync return an hero', (done) => {
        const id = 1;
        getHeroByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    });

    test('should getHeroByIdAsync return an error', (done) => {
        const id = 100;
        getHeroByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch(hero => {
                expect(hero).toBe('Hero not found' + id);
                done();
            });
    });
})