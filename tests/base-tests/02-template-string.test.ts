import { getGreetings } from '../../src/base-tests/02-template-string';

describe('02 template string', () => { 
    test('getGreetings should be return "Hello Emmanuel"', () => { 
        const name = 'Emmanuel';
        const message = getGreetings(name);

        expect(message).toBe(`Hello ${name}`);
     })
 })