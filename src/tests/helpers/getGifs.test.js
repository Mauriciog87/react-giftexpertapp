import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

   test('debe traer 10 elementos ', async() => {
       const gifs = await getGifs('Dragon Ball');
       expect(gifs.length).toBe(10);
   });

   test('debe traer 10 elementos ', async() => {
        const gifs = await getGifs('');

        setTimeout(() => {
            expect(gifs.length).toBe(0);
        }, 5000);
    });
});
