import React from 'react';
import {shallow}  from 'enzyme';
import  {GifGridItem} from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {

    const title = "un titulo";
    const url = "algo";// estos argumentos se tienen que poner para que pase la prueba ya que se hicieron los propsTypes para que sean requeridos
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>)
    
    test('debe mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debe tener un parrafo con el cliente', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })
    
    test('debe tener la imagen igual al url y alt de los props ', () => {
        
        const img = wrapper.find('img');//<- etiqueta
        console.log( img.props().src)
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
        /* console.log( img.html()) */
    });

    test('debe tener animate:fadeIn', () => {
        
        const div= wrapper.find('div');
        const className = div.prop('className');
        
        expect( className.includes('animate__fadeIn') ).toBe( true );
    })
    
    
    
})
