const { getGifs } = require("../../helpers/GetGifs")


describe('Pruebas con getGifs Fetch', () => {
    
    test('debe traer 10 elementos ', async () => {
        
        const gifs = await getGifs('One Punch');
       
        expect( gifs.length ).toBe( 10 );
    });

    test('que pasa cuando no mando categoria ', async () => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    });
    
    
})
