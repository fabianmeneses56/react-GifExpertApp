import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {
    
    const setcategories = jest.fn();
    let wrapper = shallow( <AddCategory setcategories={ setcategories }/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setcategories={ setcategories }/>);
    })

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe cambuar la caja de texto ', () => {
        
        const input = wrapper.find('input');
        const value = 'hola mundo';
 
        input.simulate('change',{target:{value}});

        expect( wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        expect(setcategories).not.toHaveBeenCalled();
    })

    test('debe llamar el setCategories y limpiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';
 
        input.simulate('change',{target:{value}});

        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        expect(setcategories).toHaveBeenCalled();

        expect( wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
})
