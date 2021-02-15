import React from 'react';
import shallow from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial ', async() => {
       /*  const { data,loading } = useFetchGifs( 'harry potter' ); */

       const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs('harry potter') );
       const {data, loading}=result.current;


        await waitForNextUpdate();//esto se agrego para que funciones las 2 pruebas
       /*  console.log(data,loading); */

       expect( data ).toEqual([]);
       expect( loading ).toBe(true);
    })

    test('debe retornar un arreglo de imgs y el loading en false ', async() => {

        const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs('harry potter') );
        await waitForNextUpdate();

       const {data, loading}=result.current;


       expect( data.length ).toEqual(10);
       expect( loading ).toBe(false);
        
    })
    
    
})
