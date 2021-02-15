import React from 'react';
import {shallow}  from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid/>', () => {

    const category="harry potter";


    test('debes mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        })
        const wrapper=shallow(<GifGrid category={ category }/>)
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs ', () => {
        //Mock
        const gifs=[{
            id:'ABC',
            url:'http/cualquier/cosa',
            title:'cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        })

        const wrapper=shallow(<GifGrid category={ category }/>)

        expect( wrapper ).toMatchSnapshot();

        //evaluar si existen componentes

        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length)
    })
    
    
    
})
