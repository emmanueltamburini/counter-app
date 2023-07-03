import { getImage } from '../../src/base-tests/11-async-await';

describe('11 async await', () => {
    test('should getImage return an image URL', async () => {
        const url = await getImage();
        expect(typeof url).toBe('string');
    })
});