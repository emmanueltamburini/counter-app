import { getActivateUser, getUser } from '../../src/base-tests/05-functions';
describe('05 functions', () => {
    test('get user should return an object', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'username'
        }

        const user = getUser();

        expect(testUser).toEqual(user);
    })

    test('get activate user should return an object', () => {
        const name = "emmanuelTamburini";
        const testUser = {
            uid: 'ABC567',
            username: name
        }

        const user = getActivateUser(name);

        expect(testUser).toEqual(user);
    })
})